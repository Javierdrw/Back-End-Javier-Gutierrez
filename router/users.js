import { Router } from "express";
import { allUser, userByRole , userByName} from "../controllers/users/read.js";

const router = Router();

router.get("/all", allUser);
router.get("/role/:x", userByRole);
router.get("/all/:name", userByName);

export default router;
