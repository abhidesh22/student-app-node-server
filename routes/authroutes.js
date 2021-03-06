// Define the authentication routes

import { Router } from 'express';
import { register, loginUser } from '../controllers/auth-controller';

const router = Router();

router.route('/register').post(register);
router.route('/login').post(loginUser);

export default router;