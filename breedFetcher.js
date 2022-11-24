const request = require("request");

const fetchBreedDescription = (breedName, callback) => {

  const url =  `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, resp, body) => {
    //console.log(typeof body);
    if (error) {
      callback(`Failed to request details: ${error}`, null);
    }

    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data);

    const breed = data[0];

    if (breed) {
      callback(null, breed.description);
    } else {
      callback(`Failed to find breed ${breedName}`, null);
    }
  });

};

module.exports = { fetchBreedDescription };