const request = require('superagent');

// export a function getCharacter that takes an id and returns a promise that resolves to a character
// return only the characters name, status, and species

const getCharacter = id => {
  return request.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ body }) => ({
      id: body.id,
      name: body.name,
      status: body.status,
      species: body.species
    }));
};

const getManyCharacters = arr => {
  return Promise.all(arr.map((id) => getCharacter(id)));
};

module.exports = {
  getCharacter,
  getManyCharacters
};
