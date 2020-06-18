const { getCharacter } = require('../rickAndMortyApi');

describe('rick and morty api function', () => {
  it('can get a character by id', () => {
    return getCharacter('1')
      .then(character => {
        expect(character).toEqual({
          id: 1,
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human'
        });
      });
  });
});
