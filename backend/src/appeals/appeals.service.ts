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

  findAllByAppealProcesStatus(processedStatus: boolean) {
    return this.appealRepository.findBy({ isProcessed: processedStatus });
  }

  async updateAppealStatus(_id: number, processedStatus: boolean) {
    return await this.appealRepository.update(_id, {
      isProcessed: processedStatus,
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} appeal`;
  }
}
