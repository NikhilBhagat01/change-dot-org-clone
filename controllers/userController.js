const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const redis = require("../redis/redis");
const jwt = require("jsonwebtoken");

// REGISTER USER
const registerController = async (req, res) => {
  const { name, email, password, avatar } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
      avatar,
    });

    res.status(201).json({
      status: "success",
      message: "Resgistration successful",
    });
  } catch (error) {
    console.log(error);
  }
};

// LOGIN USER
const loginController = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRATION_TIME,
      }
    );

    const { password, ...otherinfo } = user._doc;
    await redis.set(`user:${user._id}:token`, token, "EX", 3600);

    res.status(200).json({
      status: "success",
      token,
      user: otherinfo,
    });
  } catch (error) {
    console.log(error);
  }
};

// GET USER DETAILS
const getUserDetailsController = async (req, res) => {
  const { id } = req.params;
  if (req.user.id !== id) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const cachedProfile = await redis.get(`user:${id}:profile`);
    if (cachedProfile) {
      console.log("Cached profile");
      return res.status(200).json(JSON.parse(cachedProfile));
    }

    const user = await userModel
      .findById(id)
      .populate("petitionsCreated petitionsSigned");

    await redis.set(`user:${id}:profile`, JSON.stringify(user), "EX", 3600);
    res.status(200).json(user);
  } catch (error) {
    console.res
      .status(500)
      .json({ message: "Error fetching user profile", error });
  }
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
