import { Injectable } from "@nestjs/common";
import { CreateAppealDto } from "./dto/create-appeal.dto";
import { Appeal } from "./entities/appeal.entity";
import { FindOptionsWhere, Like, Repository } from "typeorm";
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

  async findAllByFilter(
    processedStatus: boolean,
    page?: number,
    email?: string,
    name?: string,
  ) {
    let findOpts: FindOptionsWhere<Appeal>;
    if (email) {
      findOpts = { email: Like(email) };
    }
    console.log({ ...findOpts, isProcessed: processedStatus });
    //3 поля ищутся как and, по идее их нужно объединять через or
    if (name) {
      const [firstName, middleName, lastName] = name.split(" ");
      if (firstName) {
        findOpts = { ...findOpts, firstName: Like(firstName) };
      }
      if (middleName) {
        findOpts = { ...findOpts, middleName: Like(middleName) };
      }
      if (lastName) {
        findOpts = { ...findOpts, lastName: Like(lastName) };
      }
    }
    if (page) {
      return await this.appealRepository.findAndCount({
        where: {
          ...findOpts,
          isProcessed: processedStatus,
        },
        skip: (page - 1) * this.pageAppealAmount,
        take: this.pageAppealAmount,
      });
    } else {
      return await this.appealRepository.findAndCount({
        where: {
          ...findOpts,
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
