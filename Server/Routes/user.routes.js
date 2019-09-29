import express from 'express';
import userController from '../Controllers/user.controller';
import userValidation from '../Helper/user.validation';

const { validateSignup } = userValidation;

const router = express.Router();

router.post('/signup', validateSignup, userController.signup);

export default router;