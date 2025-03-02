import { request } from "http";
import { AppDataSource } from "../data-source/data-source";
import {
  LancamentosD,
  LancamentosR,
  Products,
  Renovdocs,
  User,
} from "../models/entity";
import { error } from "console";

export async function userAdd(
  nome: string,
  sobrenome: string,
  telefone: number,
  email: string
) {
  userIsValid(nome, sobrenome, telefone, email); // valida os dados passados pelo usuário
  const newUser = new User(); // cria novo usuário
  newUser.nome = nome;
  newUser.sobrenome = sobrenome;
  newUser.telefone = telefone;
  newUser.email = email;

  const userAddDatabase = AppDataSource.getRepository(User); // nessa çomja eu adiciono no banco de dados
  await userAddDatabase.save(newUser); // nessa linha eu garanto que foi salvo no banco de dados
}
// função que faz validação dos dados passados
export function userIsValid(nome, sobrenome, telefone, email) {
  if (
    typeof nome !== "string" ||
    typeof sobrenome !== "string" ||
    isNaN(Number(telefone)) ||
    typeof email !== "string"
  ) {
    throw new Error(
      "nos campos nome / sobrenome / email utilize letras e no campo telefone utilize números"
    );
  }
}
export async function receita_lanc(receita: string, valor: number) {
  receita_lanc_check(receita, valor);
  const newReceita = new LancamentosR();
  newReceita.receitaNome = receita;
  newReceita.valor = valor;

  const receitaAddtoDatabase = AppDataSource.getRepository(LancamentosR);
  await receitaAddtoDatabase.save(newReceita);
}
export async function receita_lanc_check(receita: string, valor: number) {
  if (typeof receita !== "string" || isNaN(Number(valor))) {
    throw new Error(
      "você precisa preencher receita com letras (tipo da receita ex: salário) e valor com números"
    );
  }
}
export async function despesa_lanc(despesa: string, valor: number) {
  despesa_lanc_check(despesa, valor);
  const newDespesa = new LancamentosD();
  newDespesa.despesaNome = despesa;
  newDespesa.valor = valor;
  const despesaAddtodatabase = AppDataSource.getRepository(LancamentosD);
  await despesaAddtodatabase.save(newDespesa);
}

export async function despesa_lanc_check(despesa: string, valor: number) {
  if (typeof despesa !== "string" || isNaN(Number(valor))) {
    throw new Error(
      "você precisa preencher despesa com letras (tipo da despesa ex: água / luz) e valor com números"
    );
  }
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
