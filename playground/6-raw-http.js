// const { copyFileSync } = require("fs");
const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=8b2df35237bd5e36c7bccae95b907cb8&query=40,-125&units=f";

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
    console.log(chunk);
  });
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();
