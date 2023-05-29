import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { Injectable } from "@nestjs/common";
import { UsersService } from "../../users/users.service";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService: UsersService,
    private configService: ConfigService,
  ) {
    super({
      secretOrKey: configService.get("jwt.secret"), //
      ignoreExpiration: false,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate({ id }: { id: number }) {
    const user = await this.userService.findOneByIdOrFail(id);
    return user;
  }
}
