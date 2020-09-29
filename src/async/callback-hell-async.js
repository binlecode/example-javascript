
/*

Since Node.js 8.0.0
Native async / await are supported.
Native Promisify is supported too.

With these we can convert the nested callbacks to a pipeline.

*/

'use strict';

const fs = require('fs');
const { promisify } = require('util');

const fileName = 'hello-clock.html';

const fread = promisify(fs.readFile);
const fstats = promisify(fs.stat);
const fwrite = promisify(fs.writeFile);
const fdelete = promisify(fs.unlink);

// async function fsPipeline() {  // old school function definition style
const fsPipeline = async () => {  // fat arrow function style

    const data = await fread(fileName);
    
    const lines = data.toString().split('\n');
    const numWords = lines.reduce((cnt, line) => {
        return cnt + line.split(' ').length;
    }, 0);;
    
    
    const stats = await fstats(fileName);
    
    let statsText = Object.keys(stats).map( k => `${k}: ${stats[k]}`)
            .join('\n');
    statsText = `-- file [${fileName}] stats info --\n`
            + statsText + '\n'
            + '-- additional info --\n'
            + 'number of lines: ' + lines.length + '\n'
            + 'number of words: ' + numWords + '\n';

    const statsFileName = fileName +'.stats';
    
    await fwrite(statsFileName, statsText);
    console.log('stats file saved');

    const statsData = await fread(statsFileName);
    const numLines = statsData.toString().split('\n').length;
    console.log('stats file number of lines:', numLines);

    await fdelete(statsFileName);
    console.log('stats file deleted');
}

fsPipeline();

