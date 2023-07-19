const express = require('express')
const router = express.Router();


const userController =require("../controllers/user.controller");
const salonController =require("../controllers/salon.controller");
const messageController =require("../controllers/messageTable.controller");





//-------------------------------------------
//              User
//-------------------------------------------
router.get("/user",userController.getUsersAll);
router.post("/user",userController.postUser);
router.post("/login",userController.getLogin);


//-------------------------------------------
//              Salon
//-------------------------------------------

router.get("/salon",salonController.getSalonAll);

//-------------------------------------------
//              messagetable
//-------------------------------------------
router.get("/salon/:salonId/message",messageController.getMessageAll);


module.exports = router;