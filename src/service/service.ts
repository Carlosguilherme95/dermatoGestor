import { AppDataSource } from "../data-source/data-source";
import { User } from "../models/entity";

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
