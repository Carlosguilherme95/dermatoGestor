import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id_user!: number;

  @Column()
  nome: string;

  @Column()
  sobrenome: string;

  @Column()
  email: string;

  @Column()
  telefone: number;
}

@Entity()
export class Endereco {
  @PrimaryGeneratedColumn()
  id_endereco!: number;

  @Column()
  rua: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: number;

  @Column()
  numero: number;
}

@Entity()
export class LancamentosR {
  @PrimaryGeneratedColumn()
  id_lanc_R!: number;

  @Column()
  receitaNome!: string;

  @Column()
  valor!: number;
}

@Entity()
export class LancamentosD {
  @PrimaryGeneratedColumn()
  id_lanc_D!: number;

  @Column()
  despesaNome!: string;

  @Column()
  valor!: number;
}

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id_product!: number;

  @Column()
  prod_name!: string;

  @Column()
  prod_valor!: number;

  @Column()
  prod_classif!: string;
}
