var path = require('path');
const userRoutes = (app, fs) => {
  // variables
  const dataPath = path.join(__dirname, "../data/users.json");

  // READ
  app.get("/users", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = userRoutes;

