import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { HashModule } from "../hash/hash.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [HashModule, ConfigModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
