import { Axios } from "axios";
import { request } from "http";
import { AppDataSource } from "../data-source/data-source";
import {
  LancamentosD,
  LancamentosR,
  Products,
  Renovdocs,
  User,
} from "../models/entity";

export async function receita_lanc(
  receitaNome,
  categoria,
  valor,
  datalanc,
  desc
) {
  const newReceita = new LancamentosR();
  newReceita.receitaNome = receitaNome;
  newReceita.categoria = categoria;
  newReceita.valor = valor;
  newReceita.datalanc = datalanc;
  newReceita.desc = desc;

  const receitaAddtoDatabase = AppDataSource.getRepository(LancamentosR);
  await receitaAddtoDatabase.save(newReceita);
}

export async function despesa_lanc(
  categoria,
  despesaNome,
  valor,
  datalanc,
  desc
) {
  const newDespesa = new LancamentosD();
  newDespesa.categoria = categoria;
  newDespesa.despesaNome = despesaNome;
  newDespesa.valor = valor;
  newDespesa.datalanc = datalanc;
  newDespesa.desc = desc;

  const despesaAddtodatabase = AppDataSource.getRepository(LancamentosD);
  await despesaAddtodatabase.save(newDespesa);
}

export async function productCreate(
  prod_name: string,
  prod_valor: number,
  prod_classif: string
) {
  productValidator(prod_name, prod_valor, prod_classif);
  const newProduct = new Products();
  newProduct.prod_name = prod_name;
  newProduct.prod_valor = prod_valor;
  newProduct.prod_classif = prod_classif;

  const productAddDatabase = AppDataSource.getRepository(Products);
  await productAddDatabase.save(newProduct);
}
export async function productValidator(
  prod_name: string,
  prod_valor: number,
  prod_classif: string
) {
  if (
    typeof prod_name !== "string" ||
    isNaN(Number(prod_valor)) ||
    typeof prod_classif !== "string"
  ) {
    throw new Error(
      "utilize letras para o nome | numeros para valor | letras para classificação"
    );
  }
}

export async function docCreate(documento: string, data_renov: number) {
  docvalidation(documento, data_renov);
  const newDocument = new Renovdocs();
  newDocument.documento = documento;
  newDocument.data_renov = data_renov;

  const docoumentdatabase = AppDataSource.getRepository(Renovdocs);
  await docoumentdatabase.save(newDocument);
}
export async function docvalidation(documento: string, data_renov: Number) {
  if (typeof documento !== "string" || isNaN(Number(data_renov))) {
    throw new Error(
      "você deve preencher o nome do documento com letras e a data com números"
    );
  }
}

export async function UUUserFrontEnd(
  nome: string,
  sobrenome: string,
  email: string,
  telefone: string,
  cep: string,
  logradouro: string,
  bairro: string,
  cidade: string,
  estado: string,
  unidade: string
) {
  userValidadetion(
    nome,
    sobrenome,
    email,
    telefone,
    cep,
    logradouro,
    bairro,
    cidade,
    estado,
    unidade
  );
  const userCreate = new User();
  userCreate.nome = nome;
  userCreate.sobrenome = sobrenome;
  userCreate.email = email;
  userCreate.telefone = telefone;
  userCreate.cep = cep;
  userCreate.logradouro = logradouro;
  userCreate.bairro = bairro;
  userCreate.cidade = cidade;
  userCreate.estado = estado;
  userCreate.unidade = unidade;

  const userDbConect = AppDataSource.getRepository(User);
  await userDbConect.save(userCreate);
}

export async function userValidadetion(
  nome: string,
  sobrenome: string,
  email: string,
  telefone: string,
  cep: string,
  logradouro: string,
  bairro: string,
  cidade: string,
  estado: string,
  unidade: string
) {
  if (
    typeof nome !== "string" ||
    typeof sobrenome !== "string" ||
    typeof email !== "string" ||
    typeof telefone !== "string" ||
    typeof cep !== "string" ||
    typeof logradouro !== "string" ||
    typeof bairro !== "string" ||
    typeof cidade !== "string" ||
    typeof estado !== "string" ||
    typeof unidade !== "string"
  ) {
    throw new Error("dado inválido");
  }
}
