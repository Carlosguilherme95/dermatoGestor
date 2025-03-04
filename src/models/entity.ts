import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class LancamentosR {
  @PrimaryGeneratedColumn()
  id_lanc_R!: number;

  @Column()
  receitaNome!: string;

  @Column()
  categoria!: string;

  @Column()
  valor!: string;

  @Column()
  datalanc!: string;

  @Column()
  desc!: string;
}

@Entity()
export class LancamentosD {
  @PrimaryGeneratedColumn()
  id_lanc_D!: number;

  @Column()
  categoria: string;

  @Column()
  despesaNome!: string;

  @Column()
  valor!: string;

  @Column()
  datalanc: string;

  @Column()
  desc: string;
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

@Entity()
export class Renovdocs {
  @PrimaryGeneratedColumn()
  id_doc!: number;

  @Column()
  documento!: string;

  @Column()
  data_renov!: number;
}

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
  telefone: string;

  @Column()
  cep: string;

  @Column()
  logradouro: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column({ nullable: true }) // Pode ser opcional
  unidade: string;
}
