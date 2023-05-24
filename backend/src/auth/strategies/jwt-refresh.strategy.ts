import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { UsersService } from "../../users/users.service";
import { User } from "../../users/entities/user.entity";
import { HashService } from "../../hash/hash.service";
import { WRONG_REFRESH_TOKEN_MESSAGE } from "../../utils/errorConstants";
import { ExpressRequest } from "../types/types";

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
      jwtFromRequest: (request: ExpressRequest) => {
        let token = null;
        if (request && request.cookies && request.cookies["refreshToken"]) {
          token = request.cookies["refreshToken"];
          //console.log(token); //TO DO TO DEBUG
        }
        return token;
      },
      passReqToCallback: true,
    });
  }

  async validate(request: ExpressRequest, payload: Pick<User, "id">) {
    const user = await this.userService.getUserRefreshToken(payload.id);
    const refreshToken = request.cookies["refreshToken"];
    const match = await this.hashService.compare(
      refreshToken,
      user.refreshToken,
    );
    if (!match) throw new UnauthorizedException(WRONG_REFRESH_TOKEN_MESSAGE);
    return { ...payload };
  }
}
