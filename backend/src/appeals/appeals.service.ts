import { Injectable } from "@nestjs/common";
import { CreateAppealDto } from "./dto/create-appeal.dto";
import { UpdateAppealDto } from "./dto/update-appeal.dto";

@Injectable()
export class AppealsService {
  create(createAppealDto: CreateAppealDto) {
    return "This action adds a new appeal";
  }

  findAll() {
    return `This action returns all appeals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appeal`;
  }

  update(id: number, updateAppealDto: UpdateAppealDto) {
    return `This action updates a #${id} appeal`;
  }

  remove(id: number) {
    return `This action removes a #${id} appeal`;
  }
}
