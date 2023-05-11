import { Router } from 'express';
import { multerMiddleware } from '@/middlewares/multer';

import { EventController } from '@/controllers/EventController';
import { FileController } from '@/controllers/FileController';

const router = Router();

const eventsController = new EventController();
const filesController = new FileController();

router.get('/', async (req, res) => {
  return res.json({ message: 'Hello World' });
});

router.get('/events', eventsController.all);
router.post('/events', eventsController.create);
router.put(
  '/events/image/:id',
  multerMiddleware.single('image'),
  eventsController.updateFeaturedImage
);
router.put('/events/:id', eventsController.update);
router.delete('/events/:id', eventsController.delete);

router.get('/image/:filename', filesController.getImageFromFilename);
export { router };
