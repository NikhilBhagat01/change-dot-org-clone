const express = require("express");
const {
  registerController,
  loginController,
  getUserDetailsController,
  updateUserController,
  getPetitionsCreatedController,
  getPetitionsSignedController,
} = require("../controllers/userController");
const checkTokenInRedis = require("../middlewares/checkTokenInRedis");

const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

router.get("/:id", checkTokenInRedis, getUserDetailsController);

router.put("/:id", updateUserController);

router.get("/:id/petitions-created", getPetitionsCreatedController);

router.get("/:id/petitions-signed", getPetitionsSignedController);

module.exports = router;
