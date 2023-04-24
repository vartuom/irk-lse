import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from "@nestjs/common";
import { AppealsService } from "./appeals.service";
import { CreateAppealDto } from "./dto/create-appeal.dto";
import { UpdateAppealDto } from "./dto/update-appeal.dto";

@Controller("appeals")
export class AppealsController {
  constructor(private readonly appealsService: AppealsService) {}

  @Post()
  create(@Body() createAppealDto: CreateAppealDto) {
    return this.appealsService.create(createAppealDto);
  }

  @Get()
  findAll() {
    return this.appealsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.appealsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAppealDto: UpdateAppealDto) {
    return this.appealsService.update(+id, updateAppealDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.appealsService.remove(+id);
  }
}
