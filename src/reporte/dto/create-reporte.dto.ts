import { IsDate, IsOptional, IsString, IsNumber } from "class-validator";

export class CreateReporteDto {
  @IsNumber()
  laboratorio:number;
  @IsOptional()
  @IsNumber()
  usuarioMant:number;
  
  @IsString()
  tipoMant:string;

  @IsString()
  objeto:string;
  
  @IsOptional()
  @IsString()
  especificacion:string;

  @IsString()
  estado:string='PENDIENTE';

  @IsString()
  descripcion:string;
}
