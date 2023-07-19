const database = require("../../database");

const getMessageAll = (req, res) => {
    const salonId = parseInt(req.params.salonId, 10);
    database
      .query("SELECT * FROM messagetable INNER JOIN salon ON salon_id = idSalon INNER JOIN user ON user_id = idUser WHERE salon_id=? ",[salonId])
      .then(([users]) => res.json(users))
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error getUsers");
      });
  };

  module.exports = {
    getMessageAll,

  };