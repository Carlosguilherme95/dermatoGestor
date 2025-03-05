import express from "express";
import {
  apiAddReceita,
  apiDeleteReceita,
  apiGetAllReceitas,
  apiGetReceitaByid,
  apiChangeReceita,
  apiAdDespesa,
  apiGetAlldespesas,
  apiProductCreate,
  apiGetAllProducts,
  apiGetOneProduct,
  apiDeleteProduct,
  apiModifyProduct,
  apiAddDocument,
  apiGetDocument,
  apiGetoneDocument,
  apiDeleteDocument,
  apiModify,
  addUUser,
  getOneUser,
  deleteUser,
  getAllUser,
  modifyUser,
  apiDeletedespesa,
  ativosPost,
  ativosGetAll,
  ativosGetOne,
  ativosDelete,
  ativosModify,
} from "../controller/controller";

const router = express.Router();

/*------------------------USER---------------------------------*/
router.post("/user", addUUser);
router.get("/user/:id_user", getOneUser);
router.get("/user", getAllUser);
router.delete("/user/:id_user", deleteUser);
router.put("/user/:id_user", modifyUser);

/*-----------------------RECEITAS-----------------------------*/
router.post("/receitas", apiAddReceita);
router.get("/receitas", apiGetAllReceitas);
router.get("/receitas/:id_lanc_R", apiGetReceitaByid);
router.delete("/receitas/:id_lanc_R", apiDeleteReceita);
router.put("/receitas/:id_lanc_R", apiChangeReceita);
/*-----------------------DESPESAS-----------------------------*/
router.post("/despesas", apiAdDespesa);
router.get("/despesas", apiGetAlldespesas);
router.delete("/despesas/:id_lanc_D", apiDeletedespesa);
/*----------------------PRODUTOS----------------------------------*/
router.post("/produtos", apiProductCreate);
router.get("/produtos", apiGetAllProducts);
router.get("/produtos/:id_product", apiGetOneProduct);
router.delete("/produtos/:id_product", apiDeleteProduct);
router.put("/produtos/:id_product", apiModifyProduct);

/*---------------------CRIANDO DOCUMENTOS/RENOV----------------------*/
router.post("/documento", apiAddDocument);
router.get("/documento", apiGetDocument);
router.get("/documento/:id_doc", apiGetoneDocument);
router.delete("/documento/:id_doc", apiDeleteDocument);
router.put("/documento/:id_doc", apiModify);
/*--------------------CRIANDO ATIVOS-----------------------------------*/
router.post("/ativos", ativosPost);
router.get("/ativos", ativosGetAll);
router.get("/ativos/:id_ativos", ativosGetOne);
router.delete("/ativos/:id_ativos", ativosDelete);
router.put("/ativos/:id_ativos", ativosModify);
export default router;
