import { Injectable } from "@nestjs/common";
import { hash, compare } from "bcrypt";

@Injectable()
export class HashService {
  async create(plainTextPassword: string) {
    return await hash(plainTextPassword, 10);
  }

  async compare(providedPassword: string, hashedPassword: string) {
    return await compare(providedPassword, hashedPassword);
  }
}
