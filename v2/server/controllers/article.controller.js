import users from '../models/user.model';
import articles from '../models/article.model';
import validateArticles from '../helpers/article.validations';
import executeQuery from '../config/connectDb';
import query from '../config/queries';

class ArticleController {

  static async createArticle(req, res) {
    const { error } = validateArticles.validateArticle(req.body);
    try {
      if (error) {
        throw new Error(error.details[0].message);
      }
      const loggedUser = req.user.email;
      const isUserExist = await executeQuery(query[0].isUserExist, [loggedUser]);
      const isArticleExist = await executeQuery(query[1].isArticleExist, [req.body.title, req.body.article])

      if (isUserExist.length === 0) {
        return res.status(404).send({
          status: 404,
          error: 'User not found in our system'
        });
      }
      if (isArticleExist.length !== 0) {
        return res.status(409).send({
          status: 409,
          error: 'Article already exist'
        });
      }
      const newArticle = [
        req.body.title,
        req.body.article,
        loggedUser,
        new Date()
      ];
      const createdArticle = await executeQuery(query[1].createArticle, newArticle);
      return res.status(201).send({
        status: 201,
        message: "article created successfully",
        data: createdArticle[0]
      });
    } catch (error) {
      return res.status(400).send({ status: 400, error: error.message });
    }
  }

  static async editArticle(req, res) {
    const { title, article } = req.body;
    const articleId = parseInt(req.params.articleId);
    const logged = req.user.email;
    const { error } = validateArticles.validateArticle(req.body);
    try {
      if (error) {
        throw new Error(error.details[0].message);
      }
      const isArticleExist = await executeQuery(query[1].getArticle, [articleId]);
      const isEdited = await executeQuery(query[1].isArticleExist, [req.body.title, req.body.article])

      if (isArticleExist.length === 0) {
        return res.status(404).send({
          status: 404,
          error: 'Article Not found'
        });
      }
      if (isArticleExist[0].authorid !== logged) {
        return res.status(403).send({
          status: 403,
          error: 'Article Not Yours'
        });
      }

      if (isEdited.length !== 0) {
        return res.status(409).send({
          status: 409,
          error: 'Article is Already Edited'
        });
      }
      const editedArticle = await executeQuery(query[1].editArticle, [title, article, articleId]);
      return res.status(200).send({
        status: 200,
        message: "Edited successfully",
        data: {
          id: editedArticle[0].i,
          title: editedArticle[0].title,
          article: editedArticle[0].article,
          authorid: editedArticle[0].authorid,
          editedon: editedArticle[0].createdon
        }
      });
    } catch (error) {
      return res.status(400).send({ status: 400, error: error.message })
    }
  }

  static async deleteArticle(req, res) {

    const articleId = parseInt(req.params.articleId);
    const logged = req.user.email;
    const { error } = validateArticles.validateArticle(req.body);
    try {
      if (error) {
        throw new Error(error.details[0].message);
      }
      const isArticleExist = await executeQuery(query[1].getArticle, [articleId]);

      if (isArticleExist.length === 0) {
        return res.status(404).send({
          status: 404,
          error: 'Article Not found'
        });
      }
      if (isArticleExist[0].authorid !== logged) {
        return res.status(403).send({
          status: 403,
          error: 'Article Not Yours'
        });
      }
      await executeQuery(query[1].deleteArticle, [articleId]);
      return res.status(200).send({
        status: 200,
        message: "Deleted successfully"
      });
    }
    catch (error) {
      return res.status(400).send({ status: 400, error: error.message })
    }
  }
  static async viewArticles(req, res) {

    try {
      const logged = req.user.email;
      const isEmployeeExist = await executeQuery(query[0].isUserExist, [logged]);
      const findAll = await executeQuery(query[1].getAllArticle);

      if (!isEmployeeExist[0]) {
        return res.status(401).send({
          status: 401,
          error: 'Employee Not Exist in Our System'
        });
      }
      return res.status(200).send({
        status: 200,
        message: "Articles Successfully retrieved!",
        data: findAll
      });
    } catch (error) {
      return res.status(400).send({ status: 400, error: error.message })
    }

  }
  static async viewSpecificArticle(req, res) {
    try {
      const { articleId } = req.params;
      const logged = req.user.email;
      const isEmployeeExist = await executeQuery(query[0].isUserExist, [logged]);
      const findOne = await executeQuery(query[1].getArticle, [articleId]);

      if (!isEmployeeExist[0]) {
        return res.status(401).send({
          status: 401,
          error: 'Employee Not Exist in Our System'
        });
      }
      if (!findOne[0]) {
        return res.status(404).send({
          status: 404,
          error: 'Articles Not Found'
        });
      }

      return res.status(200).send({
        status: 200,
        message: "Article Successfully retrieved!",
        data: findOne
      });
    } catch (error) {
      return res.status(400).send({ status: 400, error: error.message })
    }
  }

  static async commentOnArticle(req,res,next){
    const { articleId } = req.params;
    const logged = req.user.email;
    const { comment } = req.body;
    const isCommentExist = await executeQuery(query[2].isCommentExist, [comment, logged])
    
    const isEmployeeExist = await executeQuery(query[0].isUserExist, [logged]);
    const isArticleExist = await executeQuery(query[1].getArticle, [articleId]);

    if (!isArticleExist[0]) {
      return res.status(404).send({
        status: 404,
        error: 'Article Not Found'
      });
    }
    if (!isEmployeeExist[0]) {
      return res.status(401).send({
        status: 401,
        error: 'Employee Not Exist in Our System'
      });
    }
    if (isCommentExist[0]) {
      return res.status(409).send({
        status: 409,
        error: 'Article already commented by this User'
      });
    }
    const data = await executeQuery(query[2].createComment, [isArticleExist[0].title,isArticleExist[0].article,logged, comment ]);
    return res.status(200).send({
      status: 200,
      message: "Articles Successfully Commented!",
      data
    });
  }
}

export default ArticleController;