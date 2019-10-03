import express from 'express';
import articleController from '../Controllers/article.controller';
import verifyUser from '../Middleware/auth';

const router = express.Router();

router.post('/articles', verifyUser, articleController.createArticle);


export default router;