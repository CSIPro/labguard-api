import { Laboratorio } from "../../laboratorio/entities/laboratorio.entity";
import { User } from "../../users/entities/user.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from "typeorm";
@Entity()
export class Reporte {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  tipoMant: string;
  @Column()
  estado: string;
  @Column()
  objeto: string;

  @Column({ nullable: true })
  especificacion: string|null;

  @Column({type:'text'})
  descripcion: string;

  @ManyToOne(()=>Laboratorio, (laboratorio)=>laboratorio.id, {
    eager:true
  })
  laboratorio:Laboratorio
  
  @ManyToOne(()=>User, (usuarioMant)=>usuarioMant.id, {
    eager:true
  })
  usuarioMant:User
  @CreateDateColumn()
  creado: Date;

  @DeleteDateColumn()
  eliminado: Date;

  @UpdateDateColumn()
  modificado: Date;
}
