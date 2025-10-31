/* eslint-disable */
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json({ limit: '1mb' }));
app.use(cookieParser());

// APIs expected by the mirrored site

app.get('/logout', (req, res) => {
  // Clear a few likely cookies if present; client handles redirect
  res.clearCookie('displayName');
  res.status(200).json({ ok: true });
});


app.post('/ask', async (req, res) => {
  const { question } = req.body || {};
  if (!question || typeof question !== 'string') {
    return res.json({ error: 'Invalid question' });
  }
  // Stubbed AI answer for local functionality
  const answer = [
    'This is a local demo answer. The backend received your submission and would score it here.',
    '',
    'Summary:',
    '- Question received and parsed',
    '- Scoring logic not connected in local demo',
    '- You can integrate a real model/API later',
  ].join('\n');
  res.json({ answer });
});

// Static hosting for the mirrored site
const rootDir = __dirname;
app.use(express.static(rootDir, {
  extensions: ['html'],
  setHeaders: (res, filePath) => {
    // Ensure correct content type for js/css if needed; Express sets most by default
  }
}));

// Fallback to root index.html when path looks like a directory or unknown
app.get('*', (req, res, next) => {
  if (req.method !== 'GET') return next();
  const requestedPath = req.path;
  const hasExt = path.extname(requestedPath) !== '';
  if (!hasExt) {
    return res.sendFile(path.join(rootDir, 'index.html'));
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


