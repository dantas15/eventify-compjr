import { Router } from 'express';
import { EventController } from '@/controllers/EventController';

const router = Router();

const eventsController = new EventController();

router.get('/', async (req, res) => {
  return res.json({ message: 'Hello World' });
});

router.use('/events', () => {
  router.get('/', eventsController.all);
  router.post('/', eventsController.create);
  router.put('/:id', eventsController.update);
  router.delete('/:id', eventsController.delete);
});

export { router };
