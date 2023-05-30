import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateAppealDto } from "./dto/create-appeal.dto";
import { sleep } from "../utils/utils";
import { prisma } from "../prisma";

@Injectable()
export class AppealsService {
  pageAppealAmount: number;
  constructor() {
    this.pageAppealAmount = 8;
  }

  async create(createAppealDto: CreateAppealDto) {
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

  async findOne(appealId: number) {
    const appeal = await prisma.appeals.findUnique({
      where: { id: appealId },
    });
    return appeal;
  }

  async findMany(
    processedStatus: boolean,
    page?: number,
    email?: string,
    name?: string,
  ) {
    const searchParams: any = {
      AND: { isProcessed: processedStatus },
    };
    if (email) {
      searchParams.OR.push({ email: { contains: email } });
    }
    if (name) {
      const nameParts = name.split(" ");
      if (nameParts.length > 3)
        throw new BadRequestException(
          "ФИО не может состоять из 4 частей и более",
        );
      nameParts.forEach((namePart) => {
        searchParams.OR.push({ firstName: { contains: namePart } });
        searchParams.OR.push({ middleName: { contains: namePart } });
        searchParams.OR.push({ lastName: { contains: namePart } });
      });
    }
    console.log(searchParams);
    if (false) {
      /*return await this.appealRepository.findAndCount({
          where: {
            ...findOpts,
            isProcessed: processedStatus,
          },
          skip: (page - 1) * this.pageAppealAmount,
          take: this.pageAppealAmount,
        });*/
      return null;
    } else {
      const appeals = await prisma.appeals.findMany({
        where: searchParams,
      });
      return [appeals, 1];
    }
  }
}
