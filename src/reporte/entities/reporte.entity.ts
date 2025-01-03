import { Laboratorio } from "src/laboratorio/entities/laboratorio.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from "typeorm";
@Entity()
export class Reporte {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  tipoMant: string;

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
  

  @CreateDateColumn()
  creado: Date;

  @DeleteDateColumn()
  eliminado: Date;

  @UpdateDateColumn()
  modificado: Date;
}
