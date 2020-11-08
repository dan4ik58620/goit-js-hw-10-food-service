const fs = require("fs");
const path = require("path");
//const events = require("events"); //
//const util = require("util"); //

const productsRoute = (req, res) => {
  const filePath = path.join(__dirname, "../../../", "assets", "1assorti.jpg");
  const image = fs.statSync(filePath);

  res.writeHead(200, {
    "Content-Type": "image/jpeg",
    "Content-Length": image.size
  });
  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
};

// products.forEach(function(products) {
//   products.on("состав", function(text) {
//     console.log(products.pizza + "состав:" + text);
//   });
// });

module.exports = productsRoute;
