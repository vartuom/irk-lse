import { Request } from "express";

export interface IRefreshTokens {
  accessToken?: string;
}

export interface ISigninTokens {
  user: any;
  accessToken: string;
  refreshToken: string;
}

export interface ExpressRequest extends Omit<Request, "cookies"> {
  cookies?: Record<string, string | undefined>;
}
