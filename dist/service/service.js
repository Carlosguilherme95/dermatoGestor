"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAdd = userAdd;
exports.userIsValid = userIsValid;
exports.receita_lanc = receita_lanc;
exports.receita_lanc_check = receita_lanc_check;
const data_source_1 = require("../data-source/data-source");
const entity_1 = require("../models/entity");
function userAdd(nome, sobrenome, telefone, email) {
    return __awaiter(this, void 0, void 0, function* () {
        userIsValid(nome, sobrenome, telefone, email); // valida os dados passados pelo usuário
        const newUser = new entity_1.User(); // cria novo usuário
        newUser.nome = nome;
        newUser.sobrenome = sobrenome;
        newUser.telefone = telefone;
        newUser.email = email;
        const userAddDatabase = data_source_1.AppDataSource.getRepository(entity_1.User); // nessa çomja eu adiciono no banco de dados
        yield userAddDatabase.save(newUser); // nessa linha eu garanto que foi salvo no banco de dados
    });
}
// função que faz validação dos dados passados
function userIsValid(nome, sobrenome, telefone, email) {
    if (typeof nome !== "string" ||
        typeof sobrenome !== "string" ||
        isNaN(Number(telefone)) ||
        typeof email !== "string") {
        throw new Error("nos campos nome / sobrenome / email utilize letras e no campo telefone utilize números");
    }
}
function receita_lanc(receita, valor) {
    return __awaiter(this, void 0, void 0, function* () {
        receita_lanc_check(receita, valor);
        const newReceita = new entity_1.LancamentosR();
        newReceita.receitaNome = receita;
        newReceita.valor = valor;
        const receitaAddtoDatabase = data_source_1.AppDataSource.getRepository(entity_1.LancamentosR);
        yield receitaAddtoDatabase.save(newReceita);
    });
}
function receita_lanc_check(receita, valor) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof receita !== "string" || isNaN(Number(valor))) {
            throw new Error("você precisa preencher receita com letras (tipo da receita ex: salário) e valor com números");
        }
    });
}
