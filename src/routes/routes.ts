import express from "express";
import { apiAddUser, apiGetAllUser } from "../controller/controller";

const router = express.Router();

router.post("/", apiAddUser);
router.get("/", apiGetAllUser);

export default router;
