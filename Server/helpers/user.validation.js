import Joi  from "@hapi/joi";
const names = /^[a-zA-Z]{2,}$/
const email = /^\S+@[\w\-]+\.[A-Za-z ]{2,}$/;
const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;


 class userValidations {
     static validateSignup = (body) => {
        const schema = Joi.object({
           firstName: Joi.string().required(),
           lastName: Joi.string().required(),
           email: Joi.string().regex(/^\S+@[\w\-]+\.[A-Za-z ]{2,}$/).required(),
           gender: Joi.string().valid('male','female').required(),
           password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/).required(),
           address: Joi.string().required(),
           jobRole: Joi.string().required(),
           department: Joi.string().required(),
        });

        return schema.validate(body);
     }
     
 }

export default userValidations ;
