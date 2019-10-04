import express from 'express';
import UserController from '../Controllers/user.controller';
import userValidations from '../Helper/user.validation';

const { validateSignup, validateSignin } = userValidations;

const router = express.Router();

router.post('/signup', UserController.signup);
router.post('/signin', UserController.signin);

export default router;