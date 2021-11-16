// package.json -> "type": module

import * as fs from 'fs/promises';

let result = await fs.readFile('boardgames.json');
//console.log(result);

// convert to JSON
let data = JSON.parse(result);
//console.log(data);

for (let id in data){
    console.log(data[id]);

}