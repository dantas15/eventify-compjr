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
 *   delete:
 *     summary: Delete an image by filename
 *     tags: [Files]
 *     parameters:
 *       - in: path
 *         name: filename
 *         schema:
 *           type: string
 *         required: true
 *         description: Filename of the image to be deleted
 *     responses:
 *       200:
 *         description: Image deleted successfully
 *       404:
 *         description: Image with the specified filename not found
 */
router.get('/files/image/:filename', filesController.getImageFromFilename);
router.delete(
  '/files/image/:filename',
  filesController.deleteImageFromFilename
);

export { router as fileRoutes };
