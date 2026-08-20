import base44 from '@base44/vite-plugin'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

const base44Options = {
  legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === 'true',
  hmrNotifier: true,
  navigationNotifier: true,
  analyticsTracker: true,
  visualEditAgent: true,
}

export default defineConfig(({ command }) => ({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    // Base44's plugin rewrites @/ imports to /src/, which breaks Cloudflare's
    // production build. Keep it for local development only.
    ...(command === 'serve' ? [base44(base44Options)] : []),
    react(),
  ],
}))
