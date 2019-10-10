import users from '../models/user.model';
import articles from '../models/article.model';
import validateArticles from '../helpers/article.validations';
import executeQuery from '../config/connectDb';
import query from '../config/queries';

class ArticleController{
  
  static async createArticle(req,res){
    const { error } = validateArticles.validateArticle(req.body);
    try {
        if (error){
            throw new Error ( error.details[0].message );
           }
           const loggedUser = req.user.email;
           const isUserExist = await executeQuery(query[0].isUserExist, [loggedUser]);
           const isArticleExist = await executeQuery(query[1].isArticleExist, [req.body.title, req.body.article])
       
           if(isUserExist.length === 0){
             return res.status(404).send({
               status: 404,
               error: 'User not found in our system'
             });
           }
           if(isArticleExist.length !== 0){
             return res.status(409).send({
               status: 409,
               error: 'Article already exist'
             });
           }
           const newArticle = [
             req.body.title,
             req.body.article,
             new Date()
          ];
           const createdArticle = await executeQuery(query[1].createArticle, newArticle);
           const { ...data } = createdArticle;
           return res.status(201).send({
             status: 201,
             message: "article created successfully",
             data : {
                 data
             }
           });
         }catch (error) {
            return res.status(400).send({ status: 400, error: error.message });
        } 
    }  
}

export default ArticleController;