import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Query,
  ValidationPipe,
} from "@nestjs/common";
import { AppealsService } from "./appeals.service";
import { CreateAppealDto } from "./dto/create-appeal.dto";
import { UpdateAppealDto } from "./dto/update-appeal.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { UpdateProcessedStatusDto } from "./dto/update-processed-status.dto";
import { AppealFilterQueryDto } from "./dto/appeals-filter-query.dto";

@Controller("appeals")
export class AppealsController {
  constructor(private readonly appealsService: AppealsService) {}

  @Post("create")
  create(
    @Body(new ValidationPipe({ transform: true }))
    createAppealDto: CreateAppealDto,
  ) {
    return this.appealsService.create(createAppealDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAllByFilter(
    @Query(new ValidationPipe({ transform: true }))
    appealFilterQueryDto: AppealFilterQueryDto,
  ) {
    //поправить потом
    console.log(appealFilterQueryDto);
    return this.appealsService.findMany(appealFilterQueryDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateProcessedStatusDto: UpdateProcessedStatusDto,
  ) {
    return this.appealsService.updateAppealStatus(
      +id,
      updateProcessedStatusDto,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.appealsService.findOne(+id);
  }
}
