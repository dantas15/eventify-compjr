import { config } from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import { router } from '@/routes';
import { AppError } from '@/errors/AppError';
import { connect } from '@/db';

config();

const { NODE_ENV, PORT } = process.env;
const isProd = NODE_ENV === 'production';
const port = PORT || 3000;

(async () => {
  await connect();

  const app = express();
  app.use(express.json());

  app.use(router);

  app.use(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (err: Error, request: Request, response: Response, _next: NextFunction) => {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          message: err.message
        });
      }

      return response.status(500).json({
        status: 'Error',
        message: `Internal server error ${err.message}`
      });
    }
  );

  app.listen(port, () => {
    const appUrl = isProd
      ? 'not yet implemented :/'
      : `http://localhost:${port} 🚀`;
    console.log(`Server is running on ${appUrl}`);
  });
})();
