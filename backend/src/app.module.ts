import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { AppealsModule } from "./appeals/appeals.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import config from "./config/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { getDbConfig } from "./config/dbConfigFactory";

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getDbConfig,
    }),
    AuthModule,
    UsersModule,
    AppealsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
