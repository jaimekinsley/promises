const { getCharacter, getManyCharacters } = require('../rickAndMortyApi');

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

  it('can get multiple characters by id', () => {
    return getManyCharacters([1, 2, 3])
      .then(character => {
        expect(character).toEqual([{
          id: 1,
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human'
        },
        {
          id: 2,
          name: 'Morty Smith',
          status: 'Alive',
          species: 'Human'
        },
        {
          id: 3,
          name: 'Summer Smith',
          status: 'Alive',
          species: 'Human'
        }
        ]);
      });
  });
});
