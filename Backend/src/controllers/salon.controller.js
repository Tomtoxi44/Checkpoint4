const database = require("../../database");

const getSalonAll = (req, res) => {
    database
      .query("SELECT * FROM salon")
      .then(([users]) => res.json(users))
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error getUsers");
      });
  };




  module.exports = {
    getSalonAll,

  };