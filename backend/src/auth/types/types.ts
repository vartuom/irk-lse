import { User } from "src/users/entities/user.entity";

export interface IRefreshTokens {
  accessToken?: string;
}

export interface ISigninTokens {
  user: Pick<User, "id" | "username">;
  accessToken: string;
  refreshToken: string;
}
