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
    @Query("isProcessed") processedStatus: string,
    @Query("page") page?: number,
    @Query("email") email?: string,
    @Query("name") name?: string,
    @Query("startDate") startDate?: number,
    @Query("endDate") endDate?: number,
    @Query("sort") sortProp?: string,
  ) {
    console.log(processedStatus);
    console.log(sortProp);
    //поправить потом
    return this.appealsService.findMany(
      processedStatus === "true",
      +page,
      sortProp,
      email,
      name,
      startDate,
      endDate,
    );
  }

  /*@UseGuards(JwtAuthGuard)*/
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() { processedStatus }: { processedStatus: boolean },
  ) {
    return this.appealsService.updateAppealStatus(+id, processedStatus);
  }

  /*@UseGuards(JwtAuthGuard)*/
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.appealsService.findOne(+id);
  }
}
