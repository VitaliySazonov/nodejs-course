const fs = require('fs'); //filesystem
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) throw err;
//     console.log('File created');
// });

const filePath = path.join(__dirname, 'test', 'text.txt');
// fs.writeFile(filePath, 'Hello Node JS', err => {
//     if (err) throw err;
//     console.log('File created');
//     fs.appendFile(filePath, '\nHello again Node JS', err => {
//         if (err) throw err;
//         console.log('File created');
//
//     });
// });

fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) throw err;
    console.log(content);

    const data = Buffer.from(content);
    console.log('Content: ', data.toString());
});




