import { createClientFromRequest } from 'npm:@base44/sdk@0.8.40';

export default async function(req) {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });
    if (user.role !== 'admin') return Response.json({ error: 'Forbidden' }, { status: 403 });

    const body = await req.json();
    const folderName = body.folderName;
    const offset = Math.max(0, Number(body.offset) || 0);
    const limit = Math.min(5, Math.max(1, Number(body.limit) || 5));
    if (!folderName) return Response.json({ error: 'folderName is required' }, { status: 400 });

    const { accessToken } = await base44.asServiceRole.connectors.getConnection('googledrive');
    const headers = { Authorization: `Bearer ${accessToken}` };
    const escapedName = folderName.replace(/'/g, "\\'");
    const folderQuery = encodeURIComponent(`name = '${escapedName}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false`);
    const folderResponse = await fetch(`https://www.googleapis.com/drive/v3/files?q=${folderQuery}&fields=files(id,name)&pageSize=10`, { headers });
    if (!folderResponse.ok) return Response.json({ error: 'Unable to read Drive folder' }, { status: 502 });
    const folderData = await folderResponse.json();
    const folder = folderData.files?.[0];
    if (!folder) return Response.json({ error: 'folder_not_found', name: folderName }, { status: 404 });

    const imageQuery = encodeURIComponent(`'${folder.id}' in parents and trashed = false and mimeType contains 'image/'`);
    const imageResponse = await fetch(`https://www.googleapis.com/drive/v3/files?q=${imageQuery}&fields=files(id,name,mimeType)&pageSize=1000&orderBy=name`, { headers });
    if (!imageResponse.ok) return Response.json({ error: 'Unable to list Drive images' }, { status: 502 });
    const imageData = await imageResponse.json();
    const allFiles = imageData.files || [];
    const selected = allFiles.slice(offset, offset + limit);

    const uploaded = [];
    for (const driveFile of selected) {
      const sourceResponse = await fetch(`https://www.googleapis.com/drive/v3/files/${driveFile.id}?alt=media`, { headers });
      if (!sourceResponse.ok) {
        uploaded.push({ name: driveFile.name, error: 'download_failed' });
        continue;
      }
      const blob = await sourceResponse.blob();
      const file = new File([blob], driveFile.name, { type: driveFile.mimeType || blob.type || 'application/octet-stream' });
      const result = await base44.asServiceRole.integrations.Core.UploadFile({ file });
      uploaded.push({ name: driveFile.name, url: result.file_url });
    }

    return Response.json({ folder: folder.name, total: allFiles.length, offset, nextOffset: offset + selected.length, hasMore: offset + selected.length < allFiles.length, files: uploaded });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}