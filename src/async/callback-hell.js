/*

It is easy to run into overstacked callbacks (aka callback hell) when a
pipeline of logic following an IO operation, which is typically a callback
from the beginning.

*/

'use strict';

const fs = require('fs');

/*

The following nested callbacks has these processing steps:
- open a file
- get stats info from the fs API
- count line number and word number
- write the stats and count to a file
- read the stats file and count number of lines
- delete the stats file
*/ 

const fileName = 'hello-clock.html';


// -- open file and read lines
fs.readFile(fileName, (err, data) => {
    if (err) {
        // console.log(err.message);
        return console.error(err);
    } 

    console.log('source file read');
    let lines = data.toString().split('\n');

    // use Array reduce function to count total number of words
    let numWords = lines.reduce((cnt, line) => {
        return cnt + line.split(' ').length;
    }, 0);

    // -- get file stats
    fs.stat(fileName, 'r', (err, stats) => {
        const statsText = Object.keys(stats).map( k => `${k}: ${stats[k]}`)
                .join('\n');

        let statsData = `-- file [${fileName}] stats info --\n`
                + statsText + '\n'
                + '-- additional info --\n'
                + 'number of lines: ' + lines.length + '\n'
                + 'number of words: ' + numWords + '\n';

        const statsFileName = fileName +'.stats';

        // -- write stats and counts to a stats file
        fs.writeFile(statsFileName, statsData, (err) => {
            if (err) {
                return console.error(err);
            }
            console.log('stats file saved');

            // -- read stats file and count number of lines
            fs.readFile(statsFileName, (err, data) => {
                const numLines = data.toString().split('\n').length;
                console.log('stats file number of lines:', numLines);

                // -- delete stats file    
                fs.unlink(statsFileName, (err) => {
                    if (err) {
                        return console.error(err);
                    }
                    console.log('stats file deleted');
                });
            });
        });
        
    });
});








