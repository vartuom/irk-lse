import { Injectable } from "@nestjs/common";
import { CreateAppealDto } from "./dto/create-appeal.dto";
import { Appeal } from "./entities/appeal.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { sleep } from "../utils/utils";

@Injectable()
export class AppealsService {
  constructor(
    @InjectRepository(Appeal)
    private readonly appealRepository: Repository<Appeal>,
  ) {}

  async create(createAppealDto: CreateAppealDto): Promise<Appeal> {
    const newAppeal = this.appealRepository.create(createAppealDto);
    await sleep(5000);
    return await this.appealRepository.save(newAppeal);
  }

  findAllByAppealProcesStatus(processedStatus: boolean) {
    return this.appealRepository.findBy({ isProcessed: processedStatus });
  }

  async updateAppealStatus(_id: number, processedStatus: boolean) {
    return await this.appealRepository.update(_id, {
      isProcessed: processedStatus,
    });
  }

  async findOne(_id: number): Promise<Appeal> {
    const appeal = await this.appealRepository.findOneBy({ id: _id });
    return appeal;
  }
}
