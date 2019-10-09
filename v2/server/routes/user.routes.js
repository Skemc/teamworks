import express from 'express';
import UserController from '../controllers/user.controller';
import userValidations from '../helpers/user.validation';

const validateSignup = userValidations;

const router = express.Router();

router.post('/signup', UserController.signup);


export default router;