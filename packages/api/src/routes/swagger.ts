import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerSpec from '@/swaggerConfig';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     InternalServerError:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *     AppError:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Error message
 *         code:
 *           type: integer
 *           format: int32
 *       description: Error code
 *     Event:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         date:
 *           type: string
 *           description: Date following ISO 8601 format
 *         durationInMinutes:
 *           type: number
 *         location:
 *           type: string
 *         image:
 *           type: string
 *           description: URL of the event image
 *         userId:
 *           type: string
 *           description: Id of the user that created the event (automatically added by the API)
 *       required:
 *         - title
 *         - date
 *         - userId
 */

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export { router as swaggerRoutes };
