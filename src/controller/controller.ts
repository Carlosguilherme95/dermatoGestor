import { AppDataSource } from "../data-source/data-source";
import {
  userAdd,
  receita_lanc,
  despesa_lanc,
  despesa_lanc_check,
  productCreate,
  docCreate,
} from "../service/service";
import { Request, Response } from "express";
import {
  LancamentosD,
  LancamentosR,
  Products,
  Renovdocs,
  User,
} from "../models/entity";
import { error } from "console";
import { deserialize } from "v8";
import { get } from "http";

export async function apiAddUser(req: Request, res: Response) {
  try {
    const { nome, sobrenome, telefone, email } = req.body;

    await userAdd(nome, sobrenome, telefone, email);

    res.status(201).send("Usuário adicionado com sucesso!");
  } catch (Error) {
    console.error(Error);
    res.status(500).send({ msg: Error.message });
  }
}

export async function apiGetAllUser(req: Request, res: Response) {
  const getAllUser = AppDataSource.getRepository(User);
  const users = await getAllUser.find();

  res.status(200).json(users);
}
export async function apiGetOneUser(req: Request, res: Response) {
  const { id_user } = req.params;
  try {
    const apiGetOneUser = AppDataSource.getRepository(User);
    const apiGetone = await apiGetOneUser.findOne({
      where: { id_user: Number(id_user) },
    });
    if (!apiGetone) {
      res.status(400).send("usuário não foi encontrado");
    }
    res.status(200).json(apiGetone);
  } catch (Error) {
    res.status(500).send("Ocorreu um erro inesperado");
  }
}
export async function apiDeleteUser(req: Request, res: Response) {
  const { id_user } = req.params;
  try {
    const deleteOneUser = AppDataSource.getRepository(User);
    const deleteOne = await deleteOneUser.findOne({
      where: { id_user: Number(id_user) },
    });
    if (!deleteOne) {
      res.status(400).send("não foi possível encontrar o usuário");
    }
    await deleteOneUser.delete(deleteOne);
    res.status(200).send("usuário deletado com sucesso");
  } catch (Error) {
    res.status(500).send("ocorreu um erro inesperado");
  }
}
export async function apiModifyUser(req: Request, res: Response) {
  const { id_user } = req.params;
  try {
    const apiModifyUser = AppDataSource.getRepository(User);
    const apiModify = await apiModifyUser.findOne({
      where: { id_user: Number(id_user) },
    });
    if (apiModify) {
      apiModify.nome = req.body.nome;
      apiModify.sobrenome = req.body.sobrenome;
      apiModify.email = req.body.email;
      apiModify.telefone = req.body.telefone;
    } else {
      res.status(400).send("erro no preenchimento dos dados");
    }
    await apiModifyUser.save(apiModify);
    res.status(200).send("Usuário modificado com sucesso");
  } catch (Error) {
    res.status(500).send("Não foi possível modificar o usuário");
  }
}
/*-------------------------------------RECEITAS------------------------------------------*/
export async function apiAddReceita(req: Request, res: Response) {
  try {
    const { receita, valor } = req.body;
    await receita_lanc(receita, valor);
    res.status(201).send("Receita adicionada com sucesso!");
  } catch (Error) {
    res.status(500).send({ msg: Error.message });
  }
}
export async function apiGetReceitaByid(req: Request, res: Response) {
  const { id_lanc_R } = req.params;
  try {
    const getByidLancR = AppDataSource.getRepository(LancamentosR);
    const getOneLanceR = await getByidLancR.findOne({
      where: { id_lanc_R: Number(id_lanc_R) },
    });
    if (!getByidLancR) {
      res.status(400).send("Não foi possível encontrar esse lançamento");
    }
    res.status(200).json(getOneLanceR);
  } catch (Error) {
    res.status(500).send({ msg: Error.message });
  }
}

export async function apiGetAllReceitas(req: Request, res: Response) {
  const getAllLancR = AppDataSource.getRepository(LancamentosR);
  const lancR = await getAllLancR.find();

  res.status(200).json(lancR);
}
export async function apiDeleteReceita(req: Request, res: Response) {
  const { id_lanc_R } = req.params;
  try {
    const lancRrepository = AppDataSource.getRepository(LancamentosR);
    const rmmlancamento = await lancRrepository.findOne({
      where: { id_lanc_R: Number(id_lanc_R) },
    });
    if (!rmmlancamento) {
      res.status(400).send("Não foi possível encontrar esse lançamento");
    }
    await lancRrepository.remove(rmmlancamento);
    res.status(200).json({ msg: "Seu lançamento foi removido com sucesso" });
  } catch (Error) {
    res.status(500).send({ msg: Error.message });
  }
}

export async function apiChangeReceita(req: Request, res: Response) {
  const { id_lanc_R } = req.params;
  try {
    const lancRrepository = AppDataSource.getRepository(LancamentosR);
    const changelanc = await lancRrepository.findOne({
      where: { id_lanc_R: Number(id_lanc_R) },
    });
    if (changelanc) {
      changelanc.receitaNome = req.body.receitaNome;
      changelanc.valor = req.body.valor;
    }
    await lancRrepository.save(changelanc);
    res.status(200).json({ msg: "Seu lançamento foi alterado" });
  } catch (Error) {
    res.status(500).send({ msg: Error.message });
  }
}
/*-----------------------DESPESAS------------------------------------------*/
export async function apiAdDespesa(req: Request, res: Response) {
  try {
    const { despesa, valor } = req.body;
    await despesa_lanc(despesa, valor);
    res.status(200).send("Despesa adicionada!");
  } catch (Error) {
    console.log(Error);
    res.status(500).send({ msg: "Não foi possível adicionar a despesa" });
  }
}
export async function apiGetAlldespesas(req: Request, res: Response) {
  const getAllDespesas = AppDataSource.getRepository(LancamentosD);
  const despesas = await getAllDespesas.find();

  if (!despesas) {
    res.status(500).send({ msg: "não foi possível localizar despesas" });
  }
  res.status(200).json(despesas);
}
export async function apiGetOnedespesa(req: Request, res: Response) {
  const { id_lanc_D } = req.params;
  //
  try {
    const despRepository = AppDataSource.getRepository(LancamentosD);
    //
    const getOneReceita = await despRepository.findOne({
      where: { id_lanc_D: Number(id_lanc_D) },
    });
    //
    if (!getOneReceita) {
      res.status(500).send({ msg: "Não encontramos a receita" });
    }
    //
    res.status(200).json(getOneReceita);
  } catch (Error) {
    res.status(400).send({ msg: "Erro" });
  }
}
export async function apiDeletedespesa(req: Request, res: Response) {
  const { id_lanc_D } = req.params;
  try {
    const despRepository = AppDataSource.getRepository(LancamentosD);
    const remDespesa = await despRepository.findOne({
      where: { id_lanc_D: Number(id_lanc_D) },
    });
    if (!remDespesa) {
      res.status(500).send({ msg: "Não existe despesa para remover" });
    }
    await despRepository.delete(remDespesa);
    res.status(200).send("despesa deletada com sucesso!!!");
  } catch (Error) {
    res.status(500).send({ msg: "Erro" });
  }
}
export async function apiChangeDespesa(req: Request, res: Response) {
  const { id_lanc_D } = req.params;
  try {
    const despRepository = AppDataSource.getRepository(LancamentosD);
    const despRespositoryMod = await despRepository.findOne({
      where: { id_lanc_D: Number(id_lanc_D) },
    });
    if (despRespositoryMod) {
      despRespositoryMod.despesaNome = req.body.despesaNome;
      despRespositoryMod.valor = req.body.valor;
    }
    await despRepository.save(despRespositoryMod);
    res.status(200).send("Modificação realizada!!");
  } catch (Error) {
    res.status(500).send("Não foi possível realizar a modificação");
  }
}
/*----------------------PRODUTOS----------------------------------------------*/

export async function apiProductCreate(req: Request, res: Response) {
  try {
    const { prod_name, prod_valor, prod_classif } = req.body;
    const newProd = await productCreate(prod_name, prod_valor, prod_classif);
    res.status(200).send("produto adicionado!!");
  } catch (Error) {
    res.status(500).send("não foi possível criar o produto");
  }
}
export async function apiGetAllProducts(req: Request, res: Response) {
  try {
    const getAllProducts = AppDataSource.getRepository(Products);
    const getAll = await getAllProducts.find();

    res.status(200).json(getAll);
  } catch (Error) {
    res.status(500).send("Não encontramos produtos");
  }
}
export async function apiGetOneProduct(req: Request, res: Response) {
  const { id_product } = req.params;
  try {
    const getOneProduct = AppDataSource.getRepository(Products);
    const getOne = await getOneProduct.findOne({
      where: { id_product: Number(id_product) },
    });
    res.status(200).json(getOne);
  } catch (Error) {
    res.status(500).send("Não foi possível acessar o produto");
  }
}
export async function apiDeleteProduct(req: Request, res: Response) {
  const { id_product } = req.params;
  try {
    const deleteProduct = AppDataSource.getRepository(Products);
    const deleteProd = await deleteProduct.findOne({
      where: { id_product: Number(id_product) },
    });
    await deleteProduct.delete(deleteProd);
    res.status(200).send("Produto deletado com sucesso");
  } catch (Error) {
    res.status(500).send({ msg: Error });
  }
}
export async function apiModifyProduct(req: Request, res: Response) {
  const { id_product } = req.params;

  try {
    const modifProduct = AppDataSource.getRepository(Products);
    const modif = await modifProduct.findOne({
      where: { id_product: Number(id_product) },
    });
    if (modif) {
      modif.prod_classif = req.body.prod_classif;
      modif.prod_name = req.body.prod_name;
      modif.prod_valor = req.body.valor;
    }
    await modifProduct.save(modif);
    res.status(200).send("Produto modificado com sucesso");
  } catch (Error) {
    res.status(500).send("Não foi possível modificar o produto");
  }
}
/*--------------DOCUMENTOS--------------------------------------------*/
export async function apiAddDocument(req: Request, res: Response) {
  const { documento, data_renov } = req.body;
  try {
    const addDoc = await docCreate(documento, data_renov);
    res.status(201).send("documento criado com sucesso!");
  } catch (Error) {
    res.status(500).send("não foi possível criar o documento");
  }
}
export async function apiGetDocument(req: Request, res: Response) {
  const { id_doc } = req.params;
  try {
    const docGet = AppDataSource.getRepository(Renovdocs);
    const docGetAll = await docGet.find();
    res.status(200).json(docGetAll);
  } catch (Error) {
    res.status(500).send("não encontramos usuários");
  }
}
export async function apiGetoneDocument(req: Request, res: Response) {
  const { id_doc } = req.params;
  try {
    const getOneDocument = AppDataSource.getRepository(Renovdocs);
    const getOne = await getOneDocument.findOne({
      where: { id_doc: Number(id_doc) },
    });
    if (!getOne) {
      res.status(400).send("não foi possível achar esse documento");
    }
    res.status(200).json(getOne);
  } catch (Error) {
    res.status(500).send("error inesperado");
  }
}
export async function apiDeleteDocument(req: Request, res: Response) {
  const { id_doc } = req.params;
  try {
    const getDocument = AppDataSource.getRepository(Renovdocs);
    const getDoc = await getDocument.findOne({
      where: { id_doc: Number(id_doc) },
    });
    if (!getDoc) {
      res.status(400).send("não achamos esse número de documento");
    }
    await getDocument.delete(getDoc);
    res.status(200).send("documento deletado");
  } catch (Error) {
    res.status(500).send("erro inesperado");
  }
}
export async function apiModify(req: Request, res: Response) {
  const { id_doc } = req.params;
  try {
    const modifDocument = AppDataSource.getRepository(Renovdocs);
    const modifDoc = await modifDocument.findOne({
      where: { id_doc: Number(id_doc) },
    });
    if (modifDoc) {
      modifDoc.documento = req.body.documento;
      modifDoc.data_renov = req.body.data_renov;
    }
    await modifDocument.save(modifDoc);
    res.status(200).send("documento modificado com sucesso");
  } catch (Error) {
    res.status(500).send("não foi possível modificar esse documento");
  }
}
