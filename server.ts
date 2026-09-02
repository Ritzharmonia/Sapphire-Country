import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { initialWebsiteData } from './src/initialData';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Support JSON request bodies up to 50MB for data URLs/images
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));

  const dataFilePath = path.join(process.cwd(), 'src', 'persistedData.json');
  const publicDir = path.join(process.cwd(), 'public');

  // Serve static assets from public directory
  app.use(express.static(publicDir));

  // Helper to extract and save base64 / data URL images to public folder
  function saveBase64Image(dataUrl: string, filenamePrefix: string): string {
    if (!dataUrl || !dataUrl.startsWith('data:image/')) {
      return dataUrl;
    }
    try {
      const match = dataUrl.match(/^data:image\/([a-zA-Z0-9+]+);base64,(.+)$/);
      if (match) {
        const ext = match[1] === 'svg+xml' ? 'svg' : match[1];
        const buffer = Buffer.from(match[2], 'base64');
        const filename = `${filenamePrefix}.${ext}`;
        const filePath = path.join(publicDir, filename);
        fs.writeFileSync(filePath, buffer);
        console.log(`[Persistence] Saved official image to ${filename}`);
        return `/${filename}`;
      }
    } catch (err) {
      console.error(`[Persistence] Error saving image ${filenamePrefix}:`, err);
    }
    return dataUrl;
  }

  // API endpoint to retrieve current locked website data
  app.get('/api/data', (_req, res) => {
    if (fs.existsSync(dataFilePath)) {
      try {
        const raw = fs.readFileSync(dataFilePath, 'utf-8');
        return res.json(JSON.parse(raw));
      } catch (e) {
        console.error('Error reading persisted data file:', e);
      }
    }
    return res.json(initialWebsiteData);
  });

  // API endpoint to permanently lock and persist website changes & official images
  app.post('/api/sync-final', (req, res) => {
    try {
      const payload = req.body;
      if (!payload || typeof payload !== 'object') {
        return res.status(400).json({ error: 'Invalid payload' });
      }

      const lockedData = { ...payload };

      // Ensure directory exists
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }

      // Check and persist official crest image
      if (lockedData.crest?.imageUrl) {
        lockedData.crest.imageUrl = saveBase64Image(lockedData.crest.imageUrl, 'official-royal-crest');
      }

      // Check and persist official monarch portrait image
      if (lockedData.overview?.monarchImage) {
        lockedData.overview.monarchImage = saveBase64Image(lockedData.overview.monarchImage, 'official-monarch-portrait');
      }

      // Write persisted JSON file
      fs.writeFileSync(dataFilePath, JSON.stringify(lockedData, null, 2), 'utf-8');
      console.log('[Persistence] Successfully locked and persisted website state to persistedData.json');

      return res.json({ 
        success: true, 
        message: 'Official website data and images permanently locked and persisted.',
        data: lockedData 
      });
    } catch (err) {
      console.error('[Persistence] Failed to sync final data:', err);
      return res.status(500).json({ error: 'Failed to persist website data' });
    }
  });

  // Health check
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', locked: true });
  });

  // Vite middleware in dev or static files in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Sapphire Country Official Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
