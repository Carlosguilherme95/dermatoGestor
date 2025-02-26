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
exports.apiAddUser = apiAddUser;
exports.apiGetAllUser = apiGetAllUser;
exports.apiAddReceita = apiAddReceita;
exports.apiGetAllReceitas = apiGetAllReceitas;
exports.apiDeleteReceita = apiDeleteReceita;
const data_source_1 = require("../data-source/data-source");
const service_1 = require("../service/service");
const entity_1 = require("../models/entity");
function apiAddUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { nome, sobrenome, telefone, email } = req.body;
            yield (0, service_1.userAdd)(nome, sobrenome, telefone, email);
            res.status(201).send("Usuário adicionado com sucesso!");
        }
        catch (Error) {
            console.error(Error);
            res.status(500).send({ msg: Error.message });
        }
    });
}
function apiGetAllUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const getAllUser = data_source_1.AppDataSource.getRepository(entity_1.User);
        const users = yield getAllUser.find();
        res.status(200).json(users);
    });
}
/*------------------------------------------------------------------------------------------*/
function apiAddReceita(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { receita, valor } = req.body;
            yield (0, service_1.receita_lanc)(receita, valor);
            res.status(201).send("Receita adicionada com sucesso!");
        }
        catch (Error) {
            res.status(500).send({ msg: Error.message });
        }
    });
}
function apiGetAllReceitas(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const getAllLancR = data_source_1.AppDataSource.getRepository(entity_1.LancamentosR);
        const lancR = yield getAllLancR.find();
        res.status(200).json(lancR);
    });
}
function apiDeleteReceita(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id_lanc_R } = req.params;
        try {
            const lancRrepository = data_source_1.AppDataSource.getRepository(entity_1.LancamentosR);
            const rmmlancamento = yield lancRrepository.findOne({
                where: { id_lanc_R: Number(id_lanc_R) },
            });
            if (!rmmlancamento) {
                res.status(400).send("Não foi possível encontrar esse lançamento");
            }
            yield lancRrepository.remove(rmmlancamento);
            res.status(200).json({ msg: "Seu lançamento foi removido com sucesso" });
        }
        catch (Error) {
            res.status(500).send({ msg: Error.message });
        }
    });
}
