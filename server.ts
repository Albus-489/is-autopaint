import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from the same directory as server.ts
dotenv.config({ path: path.resolve(__dirname, '.env') });

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Telegram
  app.post('/api/contact', async (req, res) => {
    const { name, phone, message } = req.body;
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error('--- DEBUG: Environment Variables ---');
      console.error('TELEGRAM_BOT_TOKEN:', token ? 'Exists (starts with ' + token.substring(0, 5) + '...)' : 'MISSING');
      console.error('TELEGRAM_CHAT_ID:', chatId ? 'Exists' : 'MISSING');
      console.error('Current Directory:', process.cwd());
      console.error('------------------------------------');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const text = `
🆕 Uusi yhteydenotto (IS-Autopaint):
👤 Nimi: ${name}
📞 Puhelin: ${phone}
💬 Viesti: ${message}
    `.trim();

    try {
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'HTML',
        }),
      });

      if (response.ok) {
        res.json({ success: true });
      } else {
        const errorData = await response.json();
        console.error('Telegram API error:', errorData);
        res.status(500).json({ error: 'Failed to send message' });
      }
    } catch (error) {
      console.error('Fetch error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
    app.get('*', (req, res) => {
      res.sendFile('dist/index.html', { root: '.' });
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
