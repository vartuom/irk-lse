import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

import cookieParser = require("cookie-parser");

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors({ credentials: true, origin: "http://localhost:5173" });
  app.enableCors({ credentials: true, origin: "https://irlse.ru" });
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  await app.listen(3000);
}
bootstrap();
