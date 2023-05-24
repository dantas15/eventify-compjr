import { Router } from 'express';
import { FileController } from '@/controllers/FileController';

const router = Router();
const filesController = new FileController();

/**
 * @swagger
 * /files/image/{filename}:
 *   get:
 *     summary: Get an image by filename
 *     tags: [Images]
 *     parameters:
 *       - in: path
 *         name: filename
 *         schema:
 *           type: string
 *         required: true
 *         description: Filename of the image
 *     responses:
 *       200:
 *         description: Returns the image file
 *         content:
 *           image/*:
 *             schema:
 *               type: string
 *               format: binary
 *       404:
 *         description: Image with the specified filename not found
 */
router.get('/files/image/:filename', filesController.getImageFromFilename);

export { router as fileRoutes };
