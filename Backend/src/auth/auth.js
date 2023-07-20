const argon2 = require("argon2");
const { response } = require("express");
const {getLogin} = require("../controllers/user.controller")

const hashPassword = async (req, res, next) => {
  try{
    const hash = await argon2.hash(req.body.password,{
      type: argon2.argon2id,
      memoryCost: 2 ** 16,
      hashLength: 50,
    });
    req.body.password = hash
    next()

  }catch(err){
    console.error("Impossible to hash the password", err)
  }
}

const isPseudoExists = (req,res,next)=>{
  const {pseudo} = req.body;
  getLogin(pseudo)
  .then(([reponse])=> {
    if(reponse.length){
      res.user = response[0]
      next()
    }else{
      res.status(403).send("this pseudo already exixst in the database")
    }
  })
  .catch((err)=> {
    console.error("internal Server error",err.message);
  })
}

const verifyPassword = (req, res) => {
  
argon2.verify(res.user.password, req.body.password)
.then((match)=>{
  if (match){
    console.log("Hourra, ça fonctionne");
  }else{
    console.log("Oups");
  }
})
 
};

module.exports = {
  hashPassword,
  verifyPassword,
  isPseudoExists
};