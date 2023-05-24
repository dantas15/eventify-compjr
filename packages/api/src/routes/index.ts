import { Router, Request, Response, NextFunction } from 'express';

import { AppError } from '@/errors/AppError';
import { swaggerRoutes } from '@/routes/swagger';
import { eventRoutes } from '@/routes/event';
import { userRoutes } from '@/routes/user';
import { fileRoutes } from '@/routes/file';
import { googleRoutes } from '@/routes/google';

const router = Router();

router.get('/', (request, response) => {
  return response.json({
    message: 'access /docs to see the documentation'
  });
});

router.use(swaggerRoutes);
router.use('/events', eventRoutes);
router.use('/users', userRoutes);
router.use('/files', fileRoutes);
router.use(googleRoutes);

router.use(
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

export { router };
