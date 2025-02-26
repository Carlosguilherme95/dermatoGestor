"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LancamentosD = exports.LancamentosR = exports.Endereco = exports.User = void 0;
const typeorm_1 = require("typeorm");
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id_user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "sobrenome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], User.prototype, "telefone", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)()
], User);
let Endereco = class Endereco {
};
exports.Endereco = Endereco;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Endereco.prototype, "id_endereco", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Endereco.prototype, "rua", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Endereco.prototype, "bairro", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Endereco.prototype, "cidade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Endereco.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Endereco.prototype, "numero", void 0);
exports.Endereco = Endereco = __decorate([
    (0, typeorm_1.Entity)()
], Endereco);
let LancamentosR = class LancamentosR {
};
exports.LancamentosR = LancamentosR;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], LancamentosR.prototype, "id_lanc_R", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LancamentosR.prototype, "receitaNome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LancamentosR.prototype, "valor", void 0);
exports.LancamentosR = LancamentosR = __decorate([
    (0, typeorm_1.Entity)()
], LancamentosR);
let LancamentosD = class LancamentosD {
};
exports.LancamentosD = LancamentosD;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], LancamentosD.prototype, "id_lanc_D", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LancamentosD.prototype, "despesaNome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LancamentosD.prototype, "valor", void 0);
exports.LancamentosD = LancamentosD = __decorate([
    (0, typeorm_1.Entity)()
], LancamentosD);
