var shell = require("shelljs");
var path = require("path");
var builder = require("./metalsmith")({});

console.log("Building:", builder.source());
builder.build(function (err) {
  if (err) throw err;
  var src = path.join(__dirname, "../imagenes");
  var dest = path.join(__dirname, "../dist/imagenes");
  shell.ln("-s", src, dest);
  console.log("Done:", builder.destination());
});
