import { config } from 'dotenv';

config();

const secret = process.env.JWT_SECRET ?? 'test';
const expiresIn = process.env.JWT_EXPIRES_IN ?? '1d';

export { secret, expiresIn };
