// REGISTER USER
const registerController = async (req, res) => {
  res.send("Register");
};

// LOGIN USER
const loginController = async (req, res) => {
  res.send("Login");
};

// GET USER DETAILS
const getUserDetailsController = async (req, res) => {
  res.send("User Details");
};

// UPDATE USER DETAILS
const updateUserController = async (req, res) => {
  res.send("Update user");
};

// GET PETITIONS CREATED BY USER
const getPetitionsCreatedController = async (req, res) => {
  res.send("Petitions created");
};

const getPetitionsSignedController = async (req, res) => {
  res.send("Petitions signed");
};

module.exports = {
  registerController,
  loginController,
  getUserDetailsController,
  updateUserController,
  getPetitionsCreatedController,
  getPetitionsSignedController,
};
