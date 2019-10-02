const article = /^[a-zA-Z0-9_ ]+[\W\S]*$/;
const title =  /^[a-zA-Z]{1,}$/;


class articleValidation {
    static validateArticle(req, res, next) {
        try {
            if (!(req.body.title) || !title.test(req.body.title)) throw new Error("Invalid title");
            if (!(req.body.article) || !article.test(req.body.article)) throw new Error("Invalid article");
            next();

        } catch (error) {
            return res.status(400).send({ status: 400, error: error.message});
        }
    }
}
export default articleValidation