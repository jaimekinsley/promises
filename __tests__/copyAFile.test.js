const { copy } = require('../copyAFile');

const fsPromises = require('fs').promises;

describe('tests copy function', () => {
  beforeAll(() => {
    return fsPromises.writeFile('./copy-file.txt', 'this is a file for testing the copy function');
  });

  afterAll(() => {
    return Promise.all([
      fsPromises.unlink('./copy-file.txt'),
      fsPromises.unlink('./new-copy-file.txt')
    ]);
  });

  it('can copy a file contents into a new file', () => {
    return copy('./copy-file.txt', './new-copy-file.txt')
      .then(() => {
        return fsPromises.readFile('./new-copy-file.txt', { encoding: 'utf8' });
      })
      .then(newFile => {
        expect(newFile).toEqual('this is a file for testing the copy function');
      });
  });
});


