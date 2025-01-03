import { IsDate, IsOptional, IsString } from "class-validator";

export class CreateReporteDto {
  @IsString()
  laboratorio:string;
  
  @IsString()
  tipoMant:string;

  @IsString()
  objeto:string;
  
  @IsOptional()
  @IsString()
  especificacion:string;

  @IsString()
  descripcion:string;
}
