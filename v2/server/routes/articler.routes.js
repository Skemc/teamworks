import express from 'express';
import articleController from '../controllers/article.controller';
import verifyUser from '../middleware/auth';

const router = express.Router();

router.get('/',function (req,res) {return res.send('Welcome To Teamworks');});
router.post('/articles', verifyUser, articleController.createArticle);
router.patch('/articles/:articleId', verifyUser, articleController.editArticle);
router.delete('/articles/:articleId', verifyUser, articleController.deleteArticle);

export default router;