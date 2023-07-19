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

const postMessage = (req,res)=>{
  const salonId = parseInt(req.params.salonId, 10);
  const userId = parseInt(req.params.userId, 10);
  const { messages } =req.body

  database
  .query(
    "INSERT INTO messagetable(salon_id,user_id,messages) VALUES(?,?,?)",[salonId,userId,messages]
  )
  .then(([result]) => {
    res.location(`/user/${result.insertId}`).sendStatus(201);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send("Error saving the user");
  });
}




  module.exports = {
    getMessageAll,
    postMessage,
  };