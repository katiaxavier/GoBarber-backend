import { Router } from 'express';
import User from './app/models/Users';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Katia Xavier',
    email: 'katia@kurenai.com',
    password_hash: '123',
  });
  res.json(user);
});

export default routes;
