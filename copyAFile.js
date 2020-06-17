const fsPromises = require('fs').promises;

const copy = (src, dst) => {
  return fsPromises.readFile(src, { encoding: 'utf8' })
    .then(contents => fsPromises.writeFile(dst, contents));
};

module.exports = {
  copy
};
