import { Router } from "express";
import { login, register } from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();
// Register Route
router.route("/register").post(upload.single("avatar"),register);
// Login Route
router.route("/login").post(login);

// Here User Routes
export default router;