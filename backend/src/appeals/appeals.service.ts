import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateAppealDto } from "./dto/create-appeal.dto";
import { sleep } from "../utils/utils";
import { prisma } from "../prisma";
import { Prisma } from "@prisma/client";

interface AppealsWhereInputCombineOperators {
  OR?: Array<Prisma.AppealsWhereInput>;
  AND?: Array<Prisma.AppealsWhereInput>;
}

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
      findOpts = { email: Like(`${email}%`) };
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
    sortProp?: string,
    email?: string,
    name?: string,
    startDate?: number,
    endDate?: number,
  ) {
    const searchParams: AppealsWhereInputCombineOperators = {
      AND: [{ isProcessed: processedStatus }],
    };
    if (startDate && endDate) {
      searchParams.AND.push({
        createdAt: {
          //оказывается Date.toISOString для даты сформированной из строки
          // с unix форматом ("number") дает ошибку преобразования
          //нужно явное приведение к number
          gte: new Date(+startDate),
          lte: new Date(+endDate),
        },
      });
    }

    if (email) {
      searchParams.AND.push({ email: { contains: email } });
    }
    if (name) {
      let appealsORParams: Array<Prisma.AppealsWhereInput> = [];
      const nameParts = name.split(" ");
      if (nameParts.length > 3)
        throw new BadRequestException(
          "ФИО не может состоять из 4 частей и более",
        );
      nameParts.forEach((namePart) => {
        appealsORParams.push({ firstName: { contains: namePart } });
        appealsORParams.push({ middleName: { contains: namePart } });
        appealsORParams.push({ lastName: { contains: namePart } });
      });
      if (appealsORParams.length === 0) {
        appealsORParams = null;
      } else {
        searchParams.AND.push({ OR: appealsORParams });
      }
    }
    if (page) {
      const [appeals, count] = await prisma.$transaction([
        prisma.appeals.findMany({
          where: searchParams,
          skip: (page - 1) * this.pageAppealAmount,
          take: this.pageAppealAmount,
          orderBy:
            sortProp === "DATE_UPDATED"
              ? { updatedAt: "desc" }
              : { createdAt: "desc" },
        }),
        prisma.appeals.count({
          where: searchParams,
        }),
      ]);
      return [appeals, count];
    } else {
      const appeals = await prisma.appeals.findMany({
        where: searchParams,
        orderBy:
          sortProp === "DATE_UPDATED"
            ? { updatedAt: "desc" }
            : { createdAt: "desc" },
      });
      return [appeals, 1];
    }
  }
}
