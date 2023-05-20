import { JwtPayload } from '@/config/jwt';

declare namespace Express {
  export interface Request {
    userData: JwtPayload;
  }
}
