import { Column, Entity, PrimaryGeneratedColumn, DeleteDateColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Laboratorio {
@PrimaryGeneratedColumn()
id: number;
@Column()
clave:string;

@Column()
nombre:string;

@CreateDateColumn()
creado:Date;

@DeleteDateColumn()
eliminado:Date;

@UpdateDateColumn()
modificado:Date;


}
