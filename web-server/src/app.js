const path = require("path");
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

// app.use(express.static(path.join(publicDirectoryPath, "../public/help.html")));

// console.log(path.join(publicDirectoryPath, "../public/help"));
// console.log(publicDirectoryPath);

// app.get("/help", (req, res) => {
//   res.send(path.join(publicDirectoryPath, "../help.html"));
// });

app.get("/weather", (req, res) => {
  // res.send("<h1>Your weather page!</h1>");
  res.send({
    weather: "cloudy",
    place: "Tooele",
    temp: 54,
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
