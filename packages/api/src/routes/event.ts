import { Router } from 'express';

import { multerMiddleware } from '@/middlewares/multer';
import { ensureAuthenticated } from '@/middlewares/ensureAuthenticated';

import { EventController } from '@/controllers/EventController';

const router = Router();

const eventsController = new EventController();
/**
 * @swagger
 * /events:
 *   get:
 *     summary: Get all events
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: Returns an array of events (or empty array)
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
 *   post:
 *     summary: Create a new event. Does not insert the image URL.
 *     tags: [Events]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Event'
 *           example:
 *             title: Evento 1
 *             description: Descricao evento 2
 *             date: '2023-06-01T09:30:00-03:00'
 *             durationInMinutes: 60
 *             location: Sala da Comp Junior
 *     responses:
 *       200:
 *         description: Returns the created event without the image URL
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       400:
 *         description: Returns a ZodError with the following validation errors
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message: string
 *     security:
 *       - bearerAuth: ['user']
 */

/**
 * @swagger
 * /events/{id}:
 *   get:
 *     summary: Get a specific event by ID
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the event
 *     responses:
 *       200:
 *         description: Returns the event with the specified ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       404:
 *         description: Event with the specified ID not found
 *   put:
 *     summary: Update a specific event by ID
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the event
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       200:
 *         description: Returns the updated event
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       404:
 *         description: Event with the specified ID not found
 *       401:
 *         description: Not authorized

 *   delete:
 *     summary: Delete a specific event by ID
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the event
 *     responses:
 *       204:
 *         description: Event deleted successfully
 *       401:
 *         description: Not authorized
 *       404:
 *         description: Event with the specified ID not found

 * /events/image/{id}:
 *   put:
 *     summary: Update the featured image of a specific event by ID
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the event
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Returns the updated event with the new featured image
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       401:
 *         description: Not authorized
 *       404:
 *         description: Event with the specified ID not found
 */

router.get('/', eventsController.all);
router.get('/:id', eventsController.get);
router.post('/', ensureAuthenticated, eventsController.create);
router.put(
  '/image/:id',
  ensureAuthenticated,
  multerMiddleware.single('image'),
  eventsController.updateFeaturedImage
);
router.put('/:id', ensureAuthenticated, eventsController.update);
router.delete('/:id', ensureAuthenticated, eventsController.delete);

export { router as eventRoutes };
