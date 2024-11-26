import { Column, DeleteDateColumn,  Entity, 
    PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn
 } from "typeorm";
 
 @Entity()
export class Laboratorio {
    @Column({ primary: true, generated: true })
    id:number;
    
    @Column({length:500})
    nombre:string;

    @Column({length:500})
    clave:string;

    @CreateDateColumn()
    creado:Date;

    @DeleteDateColumn()
    eliminado:Date;

    @UpdateDateColumn()
    modificado:Date;
    
}
