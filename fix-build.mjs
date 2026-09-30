import fs from 'node:fs';
const file = 'build.mjs';
let source = fs.readFileSync(file, 'utf8');
source = source
  .replace('<div class="orb"><span>24</span>', '<div class="orb"><span>${topics.length}</span>')
  .replace('FIELD NOTES / 24', 'FIELD NOTES / ${topics.length}')
  .replace('选择短周期、来源清楚、能导出配置并有明确支持渠道的方案；同时准备回退路径。这样即使服务波动，也不会把工作和生活一起卡住。', '优先选择短周期、来源清楚且有支持渠道的方案，并准备回退路径。');
source = source.replace('透明度和可恢复性比峰值参数更重要。优先选择短周期、来源清楚且有支持渠道的方案，并准备回退路径。', '透明度比峰值参数更重要。优先选择短周期、来源清楚且有支持渠道的方案。');
source = source.replace('透明度比峰值参数更重要。优先选择短周期、来源清楚且有支持渠道的方案。', '透明度比峰值更重要。优先选择短周期、来源清楚的方案。');
fs.writeFileSync(file, source);
