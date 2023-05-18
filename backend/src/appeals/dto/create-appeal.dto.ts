import { IsEmail, Length, IsOptional, IsString } from "class-validator";

export class CreateAppealDto {
  @IsString()
  @Length(2, 250)
  firstName: string;

  @IsString()
  @Length(2, 250)
  lastName: string;

  @IsOptional()
  @IsString()
  @Length(2, 250)
  middleName: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @Length(2, 250)
  extraContacts: string;

  @IsString()
  @Length(2, 5000)
  appealText: string;
}
