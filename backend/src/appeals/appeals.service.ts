import { Injectable } from "@nestjs/common";
import { CreateAppealDto } from "./dto/create-appeal.dto";
import { Appeal } from "./entities/appeal.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { sleep } from "../utils/utils";

@Injectable()
export class AppealsService {
  pageAppealAmount: number;
  constructor(
    @InjectRepository(Appeal)
    private readonly appealRepository: Repository<Appeal>,
  ) {
    this.pageAppealAmount = 8;
  }

  async create(createAppealDto: CreateAppealDto): Promise<Appeal> {
    const newAppeal = this.appealRepository.create(createAppealDto);
    await sleep(5000);
    return await this.appealRepository.save(newAppeal);
  }

  async findAllByAppealProcesStatus(processedStatus: boolean, page?: number) {
    if (page) {
      return await this.appealRepository.findAndCount({
        where: {
          isProcessed: processedStatus,
        },
        skip: (page - 1) * this.pageAppealAmount,
        take: this.pageAppealAmount,
      });
    } else {
      return await this.appealRepository.findAndCount({
        where: {
          isProcessed: processedStatus,
        },
      });
    }
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
