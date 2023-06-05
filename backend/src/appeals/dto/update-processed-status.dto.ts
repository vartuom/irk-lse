import { IsBoolean, IsNotEmpty } from "class-validator";

export class UpdateProcessedStatusDto {
  @IsNotEmpty()
  @IsBoolean()
  processedStatus: boolean;
}
