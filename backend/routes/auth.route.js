// auth.route.js
import express from "express";
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    res.send("Signup successful!");
  } catch (error) {
    res.status(500).send("An error occurred.");
  }
});

router.post("/signin", async (req, res) => {
  try {
    res.send("Signin successful!");
  } catch (error) {
    res.status(500).send("An error occurred.");
  }
});

router.post("/login", async (req, res) => {
  try {
    res.send("Login successful!");
  } catch (error) {
    res.status(500).send("An error occurred.");
  }
});

router.post("/logout", async (req, res) => {
  try {
    res.send("Logout successful!");
  } catch (error) {
    res.status(500).send("An error occurred.");
  }
});

export default router;  // Default export
