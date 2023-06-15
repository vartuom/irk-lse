import { IsString, Length, IsEmail } from "class-validator";

export class CreateUserDto {
  @IsString()
  @Length(2, 30)
  username: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
