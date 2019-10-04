import express from 'express';
import articleController from '../Controllers/article.controller';
import verifyUser from '../Middleware/auth';

const router = express.Router();

router.post('/articles', verifyUser, articleController.createArticle);
router.patch('/articles/:articleId', verifyUser, articleController.editArticle);
router.delete('/articles/:articleId', verifyUser, articleController.deleteArticle);
router.get('/articles', verifyUser, articleController.viewArticles);
router.get('/articles/:articleId', verifyUser, articleController.viewSpecificArticle);

export default router;