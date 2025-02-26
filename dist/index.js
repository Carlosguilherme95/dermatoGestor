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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("reflect-metadata");
const data_source_1 = require("./data-source/data-source");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
exports.app = (0, express_1.default)();
const port = 3000;
exports.app.use(express_1.default.json());
exports.app.use("/api", routes_1.default);
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield data_source_1.AppDataSource.initialize(); // Conecta ao banco de dados
            console.log("Conectado com sucesso ao banco de dados!");
        }
        catch (error) {
            console.error("Erro ao conectar ao banco de dados:", error);
        }
    });
}
connect();
exports.app.listen(port, () => {
    console.log(`App de exemplo está rodando na porta ${port}`);
});
//npm run dev
