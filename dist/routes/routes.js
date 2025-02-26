"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controller/controller");
const router = express_1.default.Router();
router.post("/", controller_1.apiAddUser);
/*------------------------------------------------------------*/
router.post("/receitas", controller_1.apiAddReceita);
router.get("/receitas", controller_1.apiGetAllReceitas);
router.delete("/receitas/:id_lanc_R", controller_1.apiDeleteReceita);
/*-------------------------------------------------------------*/
router.get("/", controller_1.apiGetAllUser);
exports.default = router;
