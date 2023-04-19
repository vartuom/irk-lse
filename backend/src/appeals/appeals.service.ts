import { Injectable } from "@nestjs/common";
import { CreateAppealDto } from "./dto/create-appeal.dto";
import { UpdateAppealDto } from "./dto/update-appeal.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Appeal } from "./entities/appeal.entity";
import { Repository } from "typeorm";

@Injectable()
export class AppealsService {
  constructor(
    @InjectRepository(Appeal)
    private appealRepository: Repository<Appeal>,
  ) {}

  async create(createAppealDto: CreateAppealDto): Promise<void> {
    await this.appealRepository.save(createAppealDto);
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
