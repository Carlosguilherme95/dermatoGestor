import express from "express";
import {
  apiAddReceita,
  apiAddUser,
  apiDeleteReceita,
  apiGetAllReceitas,
  apiGetAllUser,
  apiGetReceitaByid,
  apiChangeReceita,
  apiAdDespesa,
  apiGetAlldespesas,
  apiGetOnedespesa,
  apiDeletedespesa,
  apiChangeDespesa,
  apiProductCreate,
  apiGetAllProducts,
  apiGetOneProduct,
  apiDeleteProduct,
  apiModifyProduct,
} from "../controller/controller";

const router = express.Router();

/*------------------------USER---------------------------------*/
router.post("/", apiAddUser);
router.get("/", apiGetAllUser);
/*-----------------------RECEITAS-----------------------------*/
router.post("/receitas", apiAddReceita);
router.get("/receitas", apiGetAllReceitas);
router.get("/receitas/:id_lanc_R", apiGetReceitaByid);
router.delete("/receitas/:id_lanc_R", apiDeleteReceita);
router.put("/receitas/:id_lanc_R", apiChangeReceita);
/*-----------------------DESPESAS-----------------------------*/
router.post("/despesas", apiAdDespesa);
router.get("/despesas", apiGetAlldespesas);
router.get("/despesas/:id_lanc_D", apiGetOnedespesa);
router.delete("/despesas/:id_lanc_D", apiDeletedespesa);
router.put("/despesas/:id_lanc_D", apiChangeDespesa);
/*----------------------PRODUTOS----------------------------------*/
router.post("/produtos", apiProductCreate);
router.get("/produtos", apiGetAllProducts);
router.get("/produtos/:id_product", apiGetOneProduct);
router.delete("/produtos/:id_product", apiDeleteProduct);
router.put("/produtos/:id_product", apiModifyProduct);

/*----------------------------------------------------------------*/
export default router;
