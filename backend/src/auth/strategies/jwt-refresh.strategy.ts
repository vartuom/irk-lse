import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../../users/users.service";
import { ConfigService } from "@nestjs/config";
import { User } from "../../users/entities/user.entity";
import { Request } from "express";
import { HashService } from "../../hash/hash.service";
import { WRONG_REFRESH_TOKEN_MESSAGE } from "../../utils/errorConstants";

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  "jwt-refresh-token",
) {
  constructor(
    private readonly userService: UsersService,
    private readonly configService: ConfigService,
    private readonly hashService: HashService,
  ) {
    super({
      secretOrKey: configService.get("jwt.secret"),
      ignoreExpiration: false,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      passReqToCallback: true,
    });
  }

  async validate(request: Request, payload: Pick<User, "id">) {
    const user = await this.userService.getUserRefreshToken(payload.id);
    const refreshToken = request.get("Authorization").replace("Bearer ", "");
    const match = await this.hashService.compare(
      refreshToken,
      user.refreshToken,
    );
    if (!match) throw new UnauthorizedException(WRONG_REFRESH_TOKEN_MESSAGE);
    return { ...payload, refreshToken };
  }
}
