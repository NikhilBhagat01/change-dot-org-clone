const express = require("express");
const {
  registerController,
  loginController,
  getUserDetailsController,
  updateUserController,
  getPetitionsCreatedController,
  getPetitionsSignedController,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

router.get("/:id", getUserDetailsController);

router.put("/:id", updateUserController);

router.get("/:id/petitions-created", getPetitionsCreatedController);

router.get("/:id/petitions-signed", getPetitionsSignedController);

module.exports = router;
