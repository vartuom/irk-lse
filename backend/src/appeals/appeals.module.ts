import { Module } from '@nestjs/common';
import { AppealsService } from './appeals.service';
import { AppealsController } from './appeals.controller';

@Module({
  controllers: [AppealsController],
  providers: [AppealsService]
})
export class AppealsModule {}
