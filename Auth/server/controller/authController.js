const User = require("../model/userModel");
const session = require('express-session');

module.exports.Register = async (req, res, next) => {
  try {
    const { email, password, username } = req.body; // Extract email and username from request body
    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username }); // Create new user with email, password, and username

    // Log the user in by setting the session
    req.session.user = {
      _id: user._id,
      email: user.email,
      username: user.username
    };

    res.status(201).json({ message: "User signed in successfully", success: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred during registration" });
  }
};

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Find the user by email
    const user = await User.findOne({ email });

    // If user is not found, return error
    if (!user) {
      return res.status(404).json({ message: "Incorrect email or password" });
    }

    // Log the user in by setting the session
    req.session.user = {
      _id: user._id,
      email: user.email,
      username: user.username
    };

    // Return success message
    res.status(200).json({ message: "User logged in successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
