import { IsString } from "class-validator";
export class CreateLaboratorioDto {
  @IsString()
  clave: string;
  @IsString()
  nombre: string;
}
