import { Type } from "class-transformer";
import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

export class AppealFilterQueryDto {
  @Type(() => Boolean)
  @IsBoolean()
  isProcessed: boolean;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  page?: number;

  @IsOptional()
  @IsString()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  name?: string;

  startDate?: number;
  endDate?: number;

  @IsOptional()
  @IsString()
  sort?: string;
}
