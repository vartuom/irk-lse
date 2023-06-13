import { Injectable, UnauthorizedException } from "@nestjs/common";
import { WRONG_USERNAME_OR_PASSWORD_ERROR_MESSAGE } from "../utils/errorConstants";
import { UsersService } from "../users/users.service";
import { HashService } from "../hash/hash.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { IRefreshTokens, ISigninTokens } from "./types/types";

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

  async signin(userId: number): Promise<ISigninTokens> {
    const [accessToken, refreshToken] = await Promise.all([
      this.issueAccessToken(userId),
      this.issueRefreshToken(userId),
    ]);
    await this.usersService.updateUserRefreshToken(userId, refreshToken);
    const user = await this.usersService.findOneByIdOrFail(userId);
    return { user, accessToken, refreshToken };
  }

  async refreshAccessToken(userId: number): Promise<IRefreshTokens> {
    const accessToken = await this.issueAccessToken(userId);
    return { accessToken };
  }

  private async issueAccessToken(userId: number) {
    const payload = { id: userId };
    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get("secret"),
      expiresIn: "1m",
    });
    return accessToken;
  }

  private async issueRefreshToken(userId: number) {
    const payload = { id: userId };
    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get("refreshSecret"),
      expiresIn: "7d",
    });
    return refreshToken;
  }
}
