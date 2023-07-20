const express = require('express')
const router = express.Router();


const userController =require("../controllers/user.controller");
const salonController =require("../controllers/salon.controller");
const messageController =require("../controllers/messageTable.controller");
const {hashPassword,verifyPassword}= require("../auth/auth.js")




//-------------------------------------------
//              User
//-------------------------------------------
router.get("/user",userController.getUsersAll);
router.post("/user",userController.postUser);
router.post("/login",userController.getLogin,verifyPassword);


//-------------------------------------------
//              Salon
//-------------------------------------------

router.get("/salon",salonController.getSalonAll);
router.post("/salon",salonController.postSalon)

//-------------------------------------------
//              messagetable
//-------------------------------------------
router.get("/salon/:salonId/message",messageController.getMessageAll);
router.post("/salon/:salonId/user/:userId/message",messageController.postMessage)


module.exports = router;