import { IsDate, IsOptional, IsString, IsNumber } from "class-validator";

export class CreateReporteDto {
  @IsNumber()
  laboratorio:number;
  
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
