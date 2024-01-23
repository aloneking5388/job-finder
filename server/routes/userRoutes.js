import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import { getUser, updateUser } from "../controllers/userController.js";
import { stripeSession } from "../controllers/stripe.Controller.js";

const router = express.Router();

// GET user
router.post("/get-user", userAuth, getUser);

// UPDATE USER || PUT
router.put("/update-user", userAuth, updateUser);

// STRIPE 
router.post("/create-stripe-session-subscription", stripeSession);

export default router;
