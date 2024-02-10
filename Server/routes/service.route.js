import { Router } from "express";
import { verifyAdmin } from "../middleware/admin.middleware.js";
import { addService, deleteService, getOneService, getService, updateService, updateServiceImg } from "../controllers/service.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

// 65b64de23c3394230891cd8f
// Register Route
// router.route("/add-service").post(verifyAdmin,upload.single("serviceImage"),addService);
router.route("/add-service").post(upload.single("serviceImage"),addService);
router.route("/get-service").get(verifyJWT,getService);
router.route("/update-service/:serviceId?").patch(updateService);
router.route("/delete-service").post(verifyAdmin,deleteService);
router.route("/get-one-service/:serviceId").get(getOneService);
router.route("/updateserviceimg/:serviceId").patch(upload.single("serviceImage"),updateServiceImg);


// router.route("/update-service").patch(verifyAdmin,upload.single("serviceImage"),addService);
// Here User Routes
export default router;