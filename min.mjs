import * as fs from 'fs';
const content = fs.readFileSync('./src.mjs', 'utf-8');
fs.writeFileSync('./main.mjs', content.replace(/\n+/g, ''));