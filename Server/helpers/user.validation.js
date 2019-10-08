import Joi  from "@hapi/joi";
const email = /^\S+@[\w\-]+\.[A-Za-z ]{2,}$/;
const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;


 class userValidations {
     static validateSignup = (body) => {
        const schema = Joi.object({
           firstName: Joi.string().required(),
           lastName: Joi.string().required(),
           email: Joi.string().regex(email).required(),
           gender: Joi.string().valid('male','female').required(),
           password: Joi.string().regex(password).required(),
           address: Joi.string().required(),
           jobRole: Joi.string().required(),
           department: Joi.string().required(),
        });

        return schema.validate(body);
     }
     
 }

export default userValidations ;
