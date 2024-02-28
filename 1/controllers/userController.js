const userSchema = require("../models/userModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const jwt = require("jsonwebtoken");
const userAuth = require("../middleware/userAuth");

const SECRET = "secretword";
const createToken = (_id) => {
  return jwt.sign({ _id }, SECRET, { expiresIn: "3d" });
};

// Create a New user
const addUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // Create a new user document and save it to the database
    const newUser = new userSchema({ email, hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userSchema.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.hashedPassword);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    // Create JWT token
    const token = createToken(user._id);
    res.status(200).json({ message: "Authentication successful", token });
  } catch (error) {
    res.status(400).json({ message: "Authentication failed" });
  }
};

module.exports = {
  loginUser,
  addUser,
};
