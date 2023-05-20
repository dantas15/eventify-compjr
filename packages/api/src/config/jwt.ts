import { config } from 'dotenv';

config();

type Payload = {
  googleId: string;
  userId: string;
};

const secret = process.env.JWT_SECRET ?? 'test';
const expiresIn = process.env.JWT_EXPIRES_IN ?? '1d';

export { secret, expiresIn, Payload as JwtPayload };
