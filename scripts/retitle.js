const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'aptiskey.com');

function walk(dir, onFile) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, onFile);
    } else if (entry.isFile()) {
      onFile(full);
    }
  }
}

function retitleHtml(filePath) {
  if (!filePath.endsWith('.html')) return;
  let content = fs.readFileSync(filePath, 'utf8');
  const orig = content;

  // Replace <title> if contains 'Aptis'
  content = content.replace(/<title>([\s\S]*?)<\/title>/i, (m, inner) => {
    if (/aptis/i.test(inner) || inner.trim() === '' || inner.length > 0) {
      return '<title>MiniHippo</title>';
    }
    return m;
  });

  // Replace meta name="title"
  content = content.replace(/<meta\s+name=["']title["']\s+content=["'][^"']*["']\s*\/?>(?!\s*<)/i, '<meta name="title" content="MiniHippo" />');

  // Replace stray text occurrences in common spots
  content = content.replace(/Aptis\s+reading\s+keys/gi, 'MiniHippo');
  content = content.replace(/Hệ thống Aptis keys/gi, 'MiniHippo');

  if (content !== orig) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated:', path.relative(ROOT, filePath));
  }
}

walk(ROOT, retitleHtml);
console.log('Done retitling.');


