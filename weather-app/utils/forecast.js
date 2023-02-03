const request = require("request");

const forecast = (latitude, longitude, callback) => {
  // const APIKey = "8b2df35237bd5e36c7bccae95b907cb8";
  const url =
    "http://api.weatherstack.com/current?access_key=8b2df35237bd5e36c7bccae95b907cb8&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";
  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services!", undefined);
    } else if (body.error) {
      callback("Unable to find location.", undefined);
    } else {
      callback(
        undefined,
        `In ${body.location.name} it's ${body.current.weather_descriptions[0]} and is currently ${body.current.temperature} degrees and feels like it's ${body.current.feelslike} degrees out.`
      );
    }
    // console.log(response.body);
  });
};

module.exports = forecast;
// const zip = "40.559, -112.297";
// const url = `http://api.weatherstack.com/current?access_key=8b2df35237bd5e36c7bccae95b907cb8&query=${zip}&units=f`;

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service");
//   } else if (response.body.error) {
//     console.log("Uable to find location");
//   } else {
//     console.log(
//       `In ${response.body.location.name} it's ${response.body.current.weather_descriptions[0]} and is currently ${response.body.current.temperature} degrees but feels like it's ${response.body.current.feelslike} degrees out.`
//     );
//   }
//   console.log(response.body);
// });
