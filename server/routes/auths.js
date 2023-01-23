import express from "express";
import { signup , signout, signin , googleAuth} from "../controllers/auth.js";

const router = express.Router();

//CREATE A USER
router.post("/signup", signup)

//SIGN IN
router.post("/signin", signin)


//GOOGLE AUTH
router.post("/google", googleAuth)


router.post("/signout", signout);




export default router;