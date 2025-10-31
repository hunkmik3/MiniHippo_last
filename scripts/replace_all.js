const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'minihippo.com');

function walk(dir, onFile) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, onFile);
    else if (entry.isFile()) onFile(full);
  }
}

function replaceInFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.html', '.js', '.css'].includes(ext)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  const orig = content;

  // Replace common forms
  content = content.replace(/Aptis\s*keys/gi, 'MiniHippo');
  content = content.replace(/Aptis/gi, 'MiniHippo');

  if (content !== orig) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Replaced in:', path.relative(ROOT, filePath));
  }
}

walk(ROOT, replaceInFile);
console.log('Done replacing Aptis -> MiniHippo');


