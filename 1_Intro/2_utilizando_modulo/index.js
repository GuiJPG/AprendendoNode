const fs = require("fs"); //File System
fs.readFile("arquivo.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});