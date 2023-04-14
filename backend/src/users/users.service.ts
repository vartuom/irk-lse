import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { HashService } from "../hash/hash.service";
import {
  USER_NOT_FOUND_ERROR_MESSAGE,
  WRONG_REFRESH_TOKEN_MESSAGE,
  WRONG_USERNAME_OR_PASSWORD_ERROR_MESSAGE,
} from "../utils/errorConstants";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly hashService: HashService,
  ) {}
  create(createUserDto: CreateUserDto) {
    return "This action adds a new user";
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findOneByIdOrFail(id: number): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) throw new NotFoundException(USER_NOT_FOUND_ERROR_MESSAGE);
    return user;
  }

  async findOneForAuthOrFail(
    username: string,
  ): Promise<Pick<User, "id" | "username" | "password">> {
    const user = await this.usersRepository.findOne({
      select: ["id", "username", "password"],
      where: { username: username },
    });
    if (!user)
      throw new UnauthorizedException(WRONG_USERNAME_OR_PASSWORD_ERROR_MESSAGE);
    return user;
  }

  async getUserRefreshToken(
    id: number,
  ): Promise<Pick<User, "id" | "refreshToken">> {
    const user = await this.usersRepository.findOne({
      select: ["id", "refreshToken"],
      where: { id },
    });
    if (!user) throw new UnauthorizedException(WRONG_REFRESH_TOKEN_MESSAGE);
    return user;
  }

  async updateUserRefreshToken(
    id: number,
    refreshToken: string,
  ): Promise<Pick<User, "id" | "refreshToken">> {
    const hash = await this.hashService.create(refreshToken);
    await this.usersRepository.update(id, { refreshToken: hash });
    return undefined;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
