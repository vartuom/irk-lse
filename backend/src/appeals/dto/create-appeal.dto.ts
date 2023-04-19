import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateAppealDto {
  @IsString()
  appealerName: string;

  @IsEmail()
  appealerEmail: string;

  @IsString()
  @IsNotEmpty()
  appealText: string;

  extras?: string;
}
