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

const postSalon = (req,res) => {
  const { name_salon } = req.body;
  database
  .query("INSERT INTO salon(name_salon) VALUES(?)",[name_salon])
  .then(([result]) => {
    res
        .status(201)
        .location(`/user/${result.insertId}`)
        .json({ id: result.insertId });
    })
    .catch((err) => {
    console.error(err);
    res.status(500).send("Error saving the user");
    });
}


  module.exports = {
    getSalonAll,
    postSalon,

  };