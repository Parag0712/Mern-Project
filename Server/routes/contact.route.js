import { Router } from "express";
import {contactForm} from "../controllers/contact.controller.js";

const router = Router();
// Register Route
router.route("/contact").post(contactForm);
// Here User Routes
export default router;