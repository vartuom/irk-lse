import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  UseInterceptors,
  ClassSerializerInterceptor,
  Response,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UpdateAuthDto } from "./dto/update-auth.dto";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { plainToClass } from "class-transformer";
import { UsersService } from "src/users/users.service";
import { Response as ExpressResponse, response } from "express";
import { JwtRefreshGuard } from "./guards/jwt-refresh.guard";
import { sleep } from "../utils/utils";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post("signin")
  async signin(
    @Request() { user },
    @Response({ passthrough: true }) response: ExpressResponse,
  ) {
    const authData = await this.authService.signin(user.id);
    response.cookie("refreshToken", authData.refreshToken, {
      httpOnly: true,
      sameSite: "strict",
    });
    await sleep(5000);
    return { user: authData.user, accessToken: authData.accessToken };
  }

  @UseGuards(JwtAuthGuard)
  @Post("jwt")
  jwtTest(@Request() { user }) {
    return { user };
  }

  @UseGuards(JwtRefreshGuard)
  @Post("refresh")
  async refresh(@Request() { user }) {
    const accessToken = await this.authService.refreshAccessToken(user.id);
    return { accessToken };
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post("register")
  async registerUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);
    return user;
    //return plainToClass(User, user);
  }

  @UseGuards(JwtAuthGuard)
  @Post("logout")
  async logout(@Response({ passthrough: true }) response: ExpressResponse) {
    response.clearCookie("refreshToken");
    return;
  }
  @UseGuards(JwtAuthGuard)
  @Get("user")
  async user(@Request() { user }) {
    return user;
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.authService.remove(+id);
  }
}
