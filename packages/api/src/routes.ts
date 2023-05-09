import { Router } from 'express';
import User from './models/User';

const router = Router();

router.get('/', async (req, res) => {
  const userData = await User.findOne({
    email: 'gustavo.dantas@compjunior.com.br'
  });

  if (!userData) {
    const user = new User({
      name: 'gustavo',
      email: 'gustavo.dantas@compjunior.com.br'
    });
    console.log('oit');
    user.save();
    return res.json(user);
  }
  return res.json(userData);
});

export { router };
