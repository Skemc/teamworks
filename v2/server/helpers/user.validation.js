import Joi  from "@hapi/joi";

 class userValidations {
     static validateSignup = (body) => {
        const schema = Joi.object({
           firstName: Joi.string().regex(/^\S[A-Za-z ]{2,}$/).required(),
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
     
     static validateSignin = (body) => {
         const schema = Joi.object({
             email: Joi.string().regex(/^\S+@[\w\-]+\.[A-Za-z ]{2,}$/).required(),
             password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/).required(),
         });

         return schema.validate(body);
     }
 }



export default userValidations ;
