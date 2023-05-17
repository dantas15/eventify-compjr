import { Router } from 'express';
import { multerMiddleware } from '@/middlewares/multer';

import { EventController } from '@/controllers/EventController';
import { FileController } from '@/controllers/FileController';
import { GoogleController } from './controllers/GoogleController';

const router = Router();

const eventsController = new EventController();
const filesController = new FileController();
const googleController = new GoogleController();

router.get('/', async (req, res) => {
  return res.json({ message: 'Hello World' });
});

router.get('/events', eventsController.all);
router.get('/events/:id', eventsController.get);
router.post('/events', eventsController.create);
router.put(
  '/events/image/:id',
  multerMiddleware.single('image'),
  eventsController.updateFeaturedImage
);
router.put('/events/:id', eventsController.update);
router.delete('/events/:id', eventsController.delete);

router.get('/image/:filename', filesController.getImageFromFilename);

router.get('/auth/google/callback', (req, res) =>
  res.json({ msg: 'Callback received!' })
);
router.get('/auth/google/url', googleController.getUrl);
router.get('/auth/google', googleController.auth);
export { router };
