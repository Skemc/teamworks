import Joi from '@hapi/joi';


class articleValidation {
    static validateArticle = (body) => {
        const schema = Joi.object({
            article: Joi.string().regex(/^[a-zA-Z0-9_ ]+[\W\S]*$/).required(),
            title: Joi.string().regex(/^[a-zA-Z0-9_ ]{1,}$/).required(),
        });

        return schema.validate(body);
    }
}

export default articleValidation;