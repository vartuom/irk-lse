import { Transform, Type } from "class-transformer";
import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

export class AppealFilterQueryDto {
  @Transform(({ value }) => {
    if (typeof value === "string") {
      return value === "true";
    }
    return value;
  })
  @IsBoolean()
  isProcessed: boolean;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  page?: number;

  @IsOptional()
  @IsString()
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
