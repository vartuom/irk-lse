import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { Injectable } from "@nestjs/common";
import { UsersService } from "../../users/users.service";
import { ConfigService } from "@nestjs/config";
import { Request } from "express";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService: UsersService,
    private configService: ConfigService,
  ) {
    super({
      secretOrKey: configService.get("jwt.secret"), //
      ignoreExpiration: false,
      jwtFromRequest: (request: Request) => {
        let token = null;
        if (request && request.cookies) {
          token = request.cookies["accessToken"];
          console.log(token);
        }
        return token;
      },
    });
  }

  async validate({ id }: { id: number }) {
    const user = await this.userService.findOneByIdOrFail(id);
    return user;
  }
}
