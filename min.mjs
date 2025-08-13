import * as fs from 'fs';


fs.watchFile('./src.mjs', { }, (cur) => {
	const content = fs.readFileSync('./src.mjs', 'utf-8');
	fs.writeFileSync('./main.mjs', content.replace(/\/\/.*$/gm,'').replace(/\n+/g, '').replace(/\t+/g,''));
})