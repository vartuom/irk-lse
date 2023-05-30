import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const getDbConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  return {
    type: "postgres",
    host: configService.get("database.host"),
    port: configService.get("database.port"),
    username: configService.get("database.username"),
    password: configService.get("database.password"),
    database: configService.get("database.name"),
    synchronize: configService.get("database.synchronize"),
  };
};
