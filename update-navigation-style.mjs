import fs from 'node:fs';
const file='styles.css';
let css=fs.readFileSync(file,'utf8');
const marker='/* expanded navigation */';
if(!css.includes(marker)){
  css+=`\n${marker}\n.top .nav>nav{gap:17px;font-size:13px;white-space:nowrap}.top .nav>nav a{position:relative;padding:24px 0}.top .nav>nav a:after{content:"";position:absolute;left:0;right:0;bottom:17px;height:2px;background:var(--orange);transform:scaleX(0);transition:transform .2s}.top .nav>nav a:hover:after{transform:scaleX(1)}.recommend-hero{background:#ffd8c8}.recommend-intro{background:var(--ink);color:#fff;padding:70px 0}.recommend-intro>.wrap{display:grid;grid-template-columns:1fr 1fr;gap:80px}.recommend-intro h2{font-size:clamp(32px,4vw,54px);line-height:1.1;margin:10px 0}.recommend-intro b{color:var(--orange);font:700 12px ui-monospace,monospace;letter-spacing:.14em}.recommend-points p{border-top:1px solid #444;padding:18px 0;margin:0}.recommend-points strong{color:var(--orange);margin-right:18px;font-family:ui-monospace,monospace}@media(max-width:1050px){.top .nav>nav{gap:11px;font-size:12px}.brand{font-size:18px}}@media(max-width:850px){.top .nav>nav{white-space:normal;gap:0}.top .nav>nav a{padding:10px 0;font-size:15px}.top .nav>nav a:after{display:none}.recommend-intro>.wrap{grid-template-columns:1fr;gap:30px}}\n`;
  fs.writeFileSync(file,css);
}
