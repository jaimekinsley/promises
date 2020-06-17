const fsPromises = require('fs').promises;

// Read a file
fsPromises.readFile('./README.md', { encoding: 'utf8' })
  .then(console.log);

// Write a file
fsPromises.writeFile('./test-file.txt', 'this is a new file with new text')
  .then(console.log('done!'));

// Copy a file
const promiseToReadFile = fsPromises.readFile('./test-file.txt', { encoding: 'utf8' });

promiseToReadFile
  .then(contents => fsPromises.writeFile('./new-test-file', contents)
    .then(console.log('Done with both!')));
