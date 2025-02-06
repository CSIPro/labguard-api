import { IsString, IsNumber, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    rol: string;
  }