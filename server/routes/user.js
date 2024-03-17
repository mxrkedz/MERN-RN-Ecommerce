import express from "express";
import { changePassword, getMyProfile, logOut, login, register, updateProfile } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", login);

router.post("/register", register);

router.post("/me", isAuthenticated, getMyProfile);

router.post("/logout", isAuthenticated, logOut);

//Updating Routes
router.put("/updateprofile",isAuthenticated,updateProfile)
router.put("/changepassword",isAuthenticated,changePassword)


export default router;