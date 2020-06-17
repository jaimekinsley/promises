const { transform } = require('../transform');

const fsPromises = require('fs').promises;

describe('tests a function', () => {
  beforeAll(() => {
    return fsPromises.writeFile('./transform-file.txt', 'This is a file for testing the Transform Function');
  });

  afterAll(() => {
    return fsPromises.unlink('./transform-file.txt');
  });

  it('can remove capitals, capitalize, and reverse with transform', () => {
    return transform('./transform-file.txt')
      .then(transformedString => {
        expect(transformedString).toEqual('NOITCNUMROFSNAREHTGNITSETROFELIFASISIH');
      });
  });
});


