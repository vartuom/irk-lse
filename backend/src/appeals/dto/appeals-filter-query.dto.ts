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

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  page?: number;

  @IsOptional()
  @IsString()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  startDate?: number;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  toDate?: number;

  @IsOptional()
  @IsString()
  sort?: string;
}
