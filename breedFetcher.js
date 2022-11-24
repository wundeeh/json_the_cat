const request = require("request");

const fetchBreed = (breed, callback) => {

  const url =  `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (error, resp, body) => {
    //console.log(typeof body);
    if (error) {
      callback(`Failed to request details: ${error}`, null);
    }

    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data);

    const breedDescription = data[0];

    if (breedDescription) {
      callback(null, breedDescription.description);
    } else {
      callback(`Failed to find breed ${breed}`, null);
    }
  });

};

module.exports = fetchBreed;