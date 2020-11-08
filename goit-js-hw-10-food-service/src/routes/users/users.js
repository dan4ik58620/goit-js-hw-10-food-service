const qs = require("querystring");
const fs = require("fs");

const userName = user => {
  // get file with user
  // find a way to folder users
  // save file in folder
  fs.mkdir("../../db/users", function() {
    fs.writeFile("../../db/users/username.json", user, function() {});
  });
};

const signUpRoute = (req, res) => {
  // get data that comes
  if (req.method === "GET" && req.url.includes("users")) {
    const user = {
      username: "Ivan",
      telephone: "063 777 77 77",
      password: "12345",
      email: "ivan@gmail.com"
    };
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(user));
    return;
  }
  if (req.method === "POST") {
    let body = {
      status: "success",
      user: {
        username: "Ivan",
        telephone: "063 777 77 77",
        password: "12345",
        email: "ivan@gmail.com"
      }
    };
    req.on("data", function(user) {
      body = body + user;
      console.log("incoming data");
    });
    req.on("end", function() {
      const post = qs.parse(body);
      console.log(post);
    });
  }
  // username from data save to const
  // data in username.json
  // username.json in folder users
  // send file in response with data of user
};

module.exports = signUpRoute;
