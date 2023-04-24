import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ValidationPipe,
  Query,
} from "@nestjs/common";
import { AppealsService } from "./appeals.service";
import { CreateAppealDto } from "./dto/create-appeal.dto";
import { UpdateAppealDto } from "./dto/update-appeal.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

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

  /*@UseGuards(JwtAuthGuard)*/
  @Get()
  findAllByAppealStatus(@Query("processedStatus") processedStatus: boolean) {
    return this.appealsService.findAllByAppealProcesStatus(processedStatus);
  }

  /*@UseGuards(JwtAuthGuard)*/
  @Patch(":id")
  update(
    @Param("id") id: number,
    @Body() { processedStatus }: { processedStatus: boolean },
  ) {
    return this.appealsService.updateAppealStatus(id, processedStatus);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.appealsService.findOne(+id);
  }
}
