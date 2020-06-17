// Read a file
const fsPromises = require('fs').promises;

fsPromises.readFile('./README.md', { encoding: 'utf8' })
  .then(console.log);

// Write a file
fsPromises.writeFile('./new-test-file.txt', 'this is a new file with new text')
  .then(console.log('done!'));

// Copy a file
