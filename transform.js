const fsPromises = require('fs').promises;

const transform = (src) => {
  return fsPromises.readFile(src, { encoding: 'utf8' })
    .then(contents => contents.replace(/([^a-z])/g, ''))
    .then(contents => contents.toUpperCase())
    .then(contents => contents.split('').reverse().join(''));
};

module.exports = {
  transform
};
