import express from "express";
import { signin, signup } from "../controllers/user.controller.js"; // Ensure the correct import path

const router = express.Router();

// Signin Route
router.post('/signin', async (req, res) => {
  console.log("Signin route hit");
  
  // Call the signin function from the controller
  await signin(req, res);
});

// Signup Route
router.post('/signup', async (req, res) => {
  console.log("Signup route hit");
  
  // Call the signup function from the controller
  await signup(req, res);
});

export default router;
