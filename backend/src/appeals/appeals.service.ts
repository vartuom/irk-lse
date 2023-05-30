import { Injectable } from "@nestjs/common";
import { CreateAppealDto } from "./dto/create-appeal.dto";
import { Appeal } from "./entities/appeal.entity";
import { FindOptionsWhere, Like, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { sleep } from "../utils/utils";
import { prisma } from "../prisma";

@Injectable()
export class AppealsService {
  pageAppealAmount: number;
  constructor() {
    this.pageAppealAmount = 8;
  }

  async create(createAppealDto: CreateAppealDto): Promise<Appeal> {
    const newAppeal = await prisma.appeals.create({
      data: createAppealDto,
    });
    await sleep(5000);
    return newAppeal;
  }

  /*async findAllByFilter(
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
  }*/

  async updateAppealStatus(appealId: number, processedStatus: boolean) {
    return prisma.appeals.update({
      where: { id: appealId },
      data: { isProcessed: processedStatus },
    });
  }

  async findOne(appealId: number): Promise<Appeal> {
    const appeal = await prisma.appeals.findUnique({
      where: { id: appealId },
    });
    return appeal;
  }
}
