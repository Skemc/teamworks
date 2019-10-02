import users from '../Models/user.model';
import articles from '../Models/article.model';
 
class ArticleController{
  static createArticle(req,res){
    const loggedUser = req.user.email;
    const isUserExist = users.find(user=>user.email==loggedUser);
    const isArticleExist = articles.find(article=>article.title===req.body.title && article.article===req.body.article);

    if(!isUserExist){
      return res.status(404).send({
        status: 404,
        error: 'User not found in our system'
      });
    }
    if(isArticleExist){
      return res.status(409).send({
        status: 409,
        error: 'Article already exist'
      });
    }

    const newArticle = {
      id: articles.length+1,
      title: req.body.title,
      article: req.body.article,
      createdOn: new Date()
    };
    articles.push(newArticle);
    const { ...data } = newArticle;
    return res.status(200).send({
      status: 200,
      message: "article created successfully",
      data
    });
  }
}

export default ArticleController;