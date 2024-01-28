import { Router } from "express";
import { getUserDetails, login, logout, register, updateAccountDetails, updateUserAvatarImage } from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();
// Register Route
router.route("/register").post(upload.single("avatar"),register);
// Login Route
router.route("/login").post(login);
router.route("/logout").post(verifyJWT,logout);
router.route("/get-user").get(verifyJWT,getUserDetails);
router.route("/updateProfile").patch(verifyJWT,updateAccountDetails);
router.route("/updateAvatar").patch(verifyJWT,upload.single("avatar"),updateUserAvatarImage);
// Here User Routes
export default router;