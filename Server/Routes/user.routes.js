import express from 'express';
import userController from '../Controllers/user.controller';
import userValidation from '../Helper/user.validation';

const { validateSignup, validateSignin } = userValidation;

const router = express.Router();

router.post('/signup', validateSignup, userController.signup);
router.post('/signin', validateSignin, userController.signin);

export default router;