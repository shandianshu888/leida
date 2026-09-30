import fs from 'node:fs';
const file='build.mjs';
let source=fs.readFileSync(file,'utf8');
source=source.replaceAll('href="/articles/"','href="/articles/index.html"');
source=source.replaceAll('href="/"','href="/index.html"');
fs.writeFileSync(file,source);
