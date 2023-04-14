import { Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { UpdateAuthDto } from "./dto/update-auth.dto";
import { WRONG_USERNAME_OR_PASSWORD_ERROR_MESSAGE } from "../utils/errorConstants";
import { UsersService } from "../users/users.service";
import { HashService } from "../hash/hash.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private hashService: HashService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(username: string, providedPassword: string) {
    const user = await this.usersService.findOneForAuthOrFail(username);
    const match = await this.hashService.compare(
      providedPassword,
      user.password,
    );
    if (!match)
      throw new UnauthorizedException(WRONG_USERNAME_OR_PASSWORD_ERROR_MESSAGE);
    return user;
  }

  async signin(userId: number) {
    const { accessToken, refreshToken } = await this.issueTokens(userId);
    await this.usersService.updateUserRefreshToken(userId, refreshToken);
    const user = await this.usersService.findOneByIdOrFail(userId);
    return { ...user, accessToken, refreshToken };
  }

  private async issueTokens(userId: number) {
    const payload = { id: userId };
    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get("secret"),
      expiresIn: "1h",
    });
    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get("refreshSecret"),
      expiresIn: "7d",
    });
    return { accessToken, refreshToken };
  }

  create(createAuthDto: CreateAuthDto) {
    return "This action adds a new auth";
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
