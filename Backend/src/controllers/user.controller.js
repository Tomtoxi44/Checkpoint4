const database = require("../../database");

const getUsersAll = (req, res) => {
    database
      .query("SELECT * FROM user")
      .then(([users]) => res.json(users))
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error getUsers");
      });
  };







const postUser = (req, res) => {
const { pseudo, password} = req.body;

database
    .query(
    "INSERT INTO user(pseudo,password) VALUES (?,?)",
    [pseudo, password]
    )
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
};


const getLogin = (req, res) => {
  const { pseudo, password } = req.body;

  database
    .query("SELECT * FROM user WHERE pseudo = ? AND password = ? ", [pseudo,password])
    .then(([users]) => {
      if (users[0] != null) {
        res.user = users[0];
        res.status(200).send("succes")
      } else {
        res.sendStatus(401);
      }
    })
    .catch(() => {
      res.status(500).send("Connexion failed");
    });
};



  module.exports = {
    getLogin,
    getUsersAll,
    postUser,
  };