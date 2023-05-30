import { Module } from "@nestjs/common";
import { AppealsService } from "./appeals.service";
import { AppealsController } from "./appeals.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Appeal } from "./entities/appeal.entity";

@Module({
  controllers: [AppealsController],
  providers: [AppealsService],
})
export class AppealsModule {}
