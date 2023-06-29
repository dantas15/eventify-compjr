import { config } from 'dotenv';
import express from 'express';
import 'express-async-errors';
import passport from 'passport';
import cors from 'cors';
import { router } from '@/routes';
import { connect } from '@/config/db';
import { googlePassportConfig } from '@/config/google';

config();

const { NODE_ENV, PORT } = process.env;
const isProd = NODE_ENV === 'production';
const port = PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
googlePassportConfig();

app.use(router);

app.listen(port, async () => {
  await connect();
  const appUrl = isProd
    ? 'not yet implemented :/'
    : `http://localhost:${port} 🚀`;
  console.log(`Server is running on ${appUrl}`);
});
