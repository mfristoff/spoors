import { createClientFromRequest } from 'npm:@base44/sdk@0.8.40';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { accessToken } = await base44.asServiceRole.connectors.getConnection('googledrive');
    const authHeader = { Authorization: `Bearer ${accessToken}` };
    const url = new URL(req.url);

    // Read params from query or body (read body once)
    let folderId = url.searchParams.get('folderId');
    let folderName = url.searchParams.get('folderName');
    if (!folderId && !folderName) {
      try {
        const body = await req.json();
        if (body) {
          folderId = folderId || body.folderId;
          folderName = folderName || body.folderName;
        }
      } catch {}
    }

    const listImagesIn = async (id) => {
      const q = encodeURIComponent(`'${id}' in parents and trashed = false and mimeType contains 'image/'`);
      const fields = encodeURIComponent("files(id,name,mimeType,thumbnailLink,size)");
      const apiUrl = `https://www.googleapis.com/drive/v3/files?q=${q}&fields=${fields}&pageSize=1000&orderBy=modifiedTime desc`;
      const res = await fetch(apiUrl, { headers: authHeader });
      const data = await res.json();
      return (data.files || []).map((f) => ({ name: f.name, id: f.id, thumb: f.thumbnailLink, size: f.size }));
    };

    if (folderId) {
      const files = await listImagesIn(folderId);
      return Response.json({ count: files.length, files });
    }

    if (folderName) {
      const norm = folderName.toLowerCase().replace(/[^a-z0-9]/g, '');
      const allQ = encodeURIComponent("mimeType = 'application/vnd.google-apps.folder' and trashed = false");
      const allFields = encodeURIComponent("files(id,name)");
      const allUrl = `https://www.googleapis.com/drive/v3/files?q=${allQ}&fields=${allFields}&pageSize=1000`;
      const allRes = await fetch(allUrl, { headers: authHeader });
      const allData = await allRes.json();
      const match = (allData.files || []).find(
        (f) => f.name && f.name.toLowerCase().replace(/[^a-z0-9]/g, '') === norm
      );
      if (!match) return Response.json({ error: 'folder_not_found', name: folderName });
      const files = await listImagesIn(match.id);
      return Response.json({ folder: match.name, count: files.length, files });
    }

    // Default: locate the California_Location_Photos folder and list its subfolders
    const folderQ = encodeURIComponent("mimeType = 'application/vnd.google-apps.folder' and trashed = false");
    const folderFields = encodeURIComponent("files(id,name)");
    let folderUrl = `https://www.googleapis.com/drive/v3/files?q=${folderQ}&fields=${folderFields}&pageSize=1000`;
    const folderRes = await fetch(folderUrl, { headers: authHeader });
    const folderData = await folderRes.json();
    const target = (folderData.files || []).find(
      (f) => f.name && f.name.toLowerCase().replace(/[^a-z0-9]/g, '').includes('californialocationphotos')
    );
    if (!target) {
      const names = (folderData.files || []).map((f) => f.name);
      return Response.json({ error: 'folder_not_found', available_folders: names });
    }
    const subQ = encodeURIComponent(`'${target.id}' in parents and trashed = false and mimeType = 'application/vnd.google-apps.folder'`);
    const subFields = encodeURIComponent("files(id,name)");
    const subUrl = `https://www.googleapis.com/drive/v3/files?q=${subQ}&fields=${subFields}&pageSize=1000`;
    const subRes = await fetch(subUrl, { headers: authHeader });
    const subData = await subRes.json();
    const folders = (subData.files || []).map((f) => ({ name: f.name, id: f.id }));

    // Fetch the first image thumbnail for each subfolder in parallel
    const withImages = await Promise.all(folders.map(async (folder) => {
      try {
        const iq = encodeURIComponent(`'${folder.id}' in parents and trashed = false and mimeType contains 'image/'`);
        const ifields = encodeURIComponent("files(id,name,thumbnailLink,size)");
        const iurl = `https://www.googleapis.com/drive/v3/files?q=${iq}&fields=${ifields}&pageSize=1&orderBy=modifiedTime desc`;
        const ires = await fetch(iurl, { headers: authHeader });
        const idata = await ires.json();
        const first = (idata.files || [])[0];
        return { ...folder, thumb: first?.thumbnailLink || null, imageId: first?.id || null };
      } catch {
        return { ...folder, thumb: null, imageId: null };
      }
    }));

    return Response.json({ folder: target.name, count: withImages.length, folders: withImages });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});