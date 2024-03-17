import express from "express";
import { getMyProfile, login, register } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", login);

router.post("/register", register);

router.post("/me", isAuthenticated, getMyProfile);

export default router;