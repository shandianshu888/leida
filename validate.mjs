import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('dist');
const files=[];
function walk(dir){for(const item of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,item.name);item.isDirectory()?walk(p):files.push(p)}}
walk(root);
const html=files.filter(f=>f.endsWith('.html'));
const failures=[];
for(const file of html){
  const source=fs.readFileSync(file,'utf8');
  if(!/<title>[^<]+<\/title>/.test(source)) failures.push(`${file}: missing title`);
  if(!/<meta name="description"/.test(source)) failures.push(`${file}: missing description`);
  if(!/<link rel="canonical"/.test(source)) failures.push(`${file}: missing canonical`);
  for(const [,href] of source.matchAll(/href="([^"#?]+)(?:[?#][^"]*)?"/g)){
    if(/^(https?:|mailto:|tel:)/.test(href)) continue;
    const target=path.resolve(path.dirname(file),href);
    const resolved=fs.existsSync(target)&&fs.statSync(target).isDirectory()?path.join(target,'index.html'):target;
    if(!resolved.startsWith(root)||!fs.existsSync(resolved)) failures.push(`${file}: broken ${href}`);
  }
}
console.log(JSON.stringify({htmlPages:html.length,files:files.length,failures:[...new Set(failures)]},null,2));
process.exitCode=failures.length?1:0;
