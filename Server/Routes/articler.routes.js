import express from 'express';
import articleController from '../Controllers/article.controller';
import validateArticles from '../Helper/article.validations';
import verifyUser from '../Middleware/auth';

const router = express.Router();

const { validateArticle } = validateArticles;
router.post('/articles', validateArticle, verifyUser, articleController.createArticle);


export default router;