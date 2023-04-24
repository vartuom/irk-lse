import { Injectable } from "@nestjs/common";
import { CreateAppealDto } from "./dto/create-appeal.dto";
import { UpdateAppealDto } from "./dto/update-appeal.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Appeal } from "./entities/appeal.entity";
import { Repository } from "typeorm";
import { sleep } from "../utils/utils";

@Injectable()
export class AppealsService {
  constructor(
    @InjectRepository(Appeal)
    private readonly appealsRepository: Repository<Appeal>,
  ) {}
  async create(createAppealDto: CreateAppealDto) {
    const newAppeal = this.appealsRepository.create(createAppealDto);
    await sleep(5000);
    return await this.appealsRepository.save(newAppeal);
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
