import { AppDataSource } from "../data-source/data-source";
import { userIsValid, userAdd } from "../service/service";
import { Request, Response } from "express";
import { User } from "../models/entity";

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
