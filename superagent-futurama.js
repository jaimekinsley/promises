const request = require('superagent');

// use superagent to make a get request to http://futuramaapi.herokuapp.com/api/quotes/1
// use then to wait for the request to resolve and print the output
request.get('http://futuramaapi.herokuapp.com/api/quotes/1')
  .then(({ body }) => ({
    character: body[0].character,
    quote: body[0].quote,
    image: body[0].image
  }))
  .then(quote => console.log(quote));

// alternative
request.get('http://futuramaapi.herokuapp.com/api/quotes/1')
  .then(res => res.body[0])
  .then(quote => console.log(quote));


// How would you get more than 1 quote?
request.get('http://futuramaapi.herokuapp.com/api/quotes/3')
  .then(({ body }) => {
    return body.map(quote => ({
      character: quote.character,
      quote: quote.quote,
      image: quote.image
    }));
  })
  .then(quote => console.log(quote));

// alternative
request.get('http://futuramaapi.herokuapp.com/api/quotes/3')
  .then(({ body }) => {
    body.forEach(quote => console.log(quote));
  });

// How would you get only quotes by Bender?
request.get('http://futuramaapi.herokuapp.com/api/characters/bender')
  .then(({ body }) => {
    return body.map(character => ({
      character: character.character,
      quote: character.quote,
      image: character.image
    }));
  })
  .then(quote => console.log(quote));

// alternative
request.get('http://futuramaapi.herokuapp.com/api/characters/bender')
  .then(({ body }) => {
    body.forEach(quote => console.log(quote));
  });


