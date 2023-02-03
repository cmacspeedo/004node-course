const request = require("request");

// console.log(geocodeURL);
// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to location services!");
//   } else if (response.body.features.length === 0) {
//     console.log("Unable to find location. Try another search.");
//   } else {
//     const latitude = response.body.features[0].center[0];
//     const longitude = response.body.features[0].center[1];
//     console.log(latitude, longitude);
//   }
// });

const geocode = (address, callback) => {
  const geoKey =
    "pk.eyJ1IjoiY21hY3NwZWVkbyIsImEiOiJjbGRrdnpiZHowYXN5M3BwbWN6YWZsZTcxIn0.mzdDc5EgsHoBwUVVCmsOVA";
  // const address = "Philadelphia";
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${geoKey}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
