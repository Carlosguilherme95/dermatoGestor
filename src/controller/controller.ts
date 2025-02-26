import { AppDataSource } from "../data-source/data-source";
import {
  userAdd,
  receita_lanc,
  despesa_lanc,
  despesa_lanc_check,
  productCreate,
} from "../service/service";
import { Request, Response } from "express";
import { LancamentosD, LancamentosR, User } from "../models/entity";
import { error } from "console";
import { deserialize } from "v8";

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
  const { prod_name, prod_valor, prod_classif } = req.body;
  await productCreate(prod_name, prod_valor, prod_classif);
  if (productCreate === null || productCreate === undefined) {
    res.status(500).send("não foi possível adicionar o produto");
  } else {
    res.status(200).send("Produto adicionado");
  }
}
