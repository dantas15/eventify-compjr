import m from 'multer';
import { slugify } from '@/utils/slugify';

const storage = m.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/images');
  },
  filename: (req, file, cb) => {
    const [filename, extension] = file.originalname.split('.');
    cb(null, `${slugify(filename)}.${extension}`);
  }
});

const multerMiddleware = m({ storage });
export { multerMiddleware };
