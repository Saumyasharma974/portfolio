import { Router } from "express";
import { sendContactEmail } from "./userController.js";

const router=Router();



router.post("/contact", sendContactEmail);


export default router;