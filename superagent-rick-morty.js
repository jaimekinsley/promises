const request = require('superagent');

// use superagent to make a get request to https://rickandmortyapi.com/api/character/
// use then to wait for the request to resolve and print the output
// request.get('https://rickandmortyapi.com/api/character/')
//   .then(({ body }) => ({
//     name: body.results[0].name,
//     status: body.results[0].status,
//     image: body.results[0].image
//   }))
//   .then(character => console.log(character));

// make another get request to retrieve the origin of each character
// HINT: use Promise.all
request.get('https://rickandmortyapi.com/api/character/')
  .then(({ body }) => {
    const requests = body.results.map(result => request.get(result.origin.url));
    return Promise.all(requests);
  })
  .then(responses => {console.log(responses[0].body);
  });
