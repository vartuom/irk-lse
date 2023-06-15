import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { HashService } from "../hash/hash.service";
import {
  USER_NOT_FOUND_ERROR_MESSAGE,
  WRONG_REFRESH_TOKEN_MESSAGE,
  WRONG_USERNAME_OR_PASSWORD_ERROR_MESSAGE,
} from "../utils/errorConstants";
import { prisma } from "../prisma";

@Injectable()
export class UsersService {
  constructor(private readonly hashService: HashService) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await this.hashService.create(
      createUserDto.password,
    );
    return prisma.users.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findOneByIdOrFail(userId: number) {
    const user = await prisma.users.findUnique({
      where: { id: userId },
    });
    if (!user) throw new NotFoundException(USER_NOT_FOUND_ERROR_MESSAGE);
    return user;
  }

  async findOneForAuthOrFail(username: string) {
    const user = await prisma.users.findUnique({
      where: { username: username },
    });
    if (!user)
      throw new UnauthorizedException(WRONG_USERNAME_OR_PASSWORD_ERROR_MESSAGE);
    return user;
  }

  async getUserRefreshToken(userId: number) {
    const user = await prisma.users.findUnique({
      select: {
        id: true,
        refreshToken: true,
      },
      where: { id: userId },
    });
    if (!user) throw new UnauthorizedException(WRONG_REFRESH_TOKEN_MESSAGE);
    return user;
  }

  async updateUserRefreshToken(userId: number, refreshToken: string) {
    const hash = await this.hashService.create(refreshToken);
    await prisma.users.update({
      where: { id: userId },
      data: {
        refreshToken: hash,
      },
    });
    return undefined;
  }
}
