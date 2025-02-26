"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../models/entity");
// Configuração do TypeORM
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "82.25.74.94",
    port: 3306,
    username: "root",
    password: "91016765Carlos@",
    database: "dermatoGestor",
    synchronize: true,
    logging: false,
    entities: [entity_1.User, entity_1.Endereco, entity_1.LancamentosR, entity_1.LancamentosD],
    migrations: [],
    subscribers: [],
});
