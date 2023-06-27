import {
  IsEmail,
  Length,
  IsOptional,
  IsString,
  ValidateIf,
} from "class-validator";

export class CreateAppealDto {
  @IsString()
  @Length(2, 250)
  firstName: string;

  @IsString()
  @Length(2, 250)
  lastName: string;

  /**
   * IsOptinal игнорирует следующие валидаторы
   * только если выполняется условие на === null или === undefined
   * т.е в нашем случае для пустой строки, валидаторы не будут игнорироваться
   * поэтому добавил ValidateIf
   */

  @IsOptional()
  @ValidateIf((e) => e.middleName !== "")
  @IsString()
  @Length(2, 250)
  middleName: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @ValidateIf((e) => e.extraContacts !== "")
  @IsString()
  @Length(2, 250)
  extraContacts: string;

  @IsString()
  @Length(2, 5000)
  appealText: string;
}
