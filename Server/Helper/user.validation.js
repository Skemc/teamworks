const names = /^[a-zA-Z]{2,}$/
const email = /^\S+@[\w\-]+\.[A-Za-z ]{2,}$/;
const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

class userValidation {
    static validateSignup(req, res, next) {
        try {


            if (!(req.body.firstName) || !names.test(req.body.firstName)) throw new Error("Invalid firstName");
            if (!(req.body.lastName) || !names.test(req.body.lastName)) throw new Error("Invalid lastName");
            if (!(req.body.password) || !password.test(req.body.password)) throw new Error("Invalid password");
            if (!(req.body.address) || !names.test(req.body.address)) throw new Error("Invalid address");
            if (!(req.body.jobRole) || !names.test(req.body.jobRole)) throw new Error("Invalid jobrole");
            if (!(req.body.department) || !names.test(req.body.department)) throw new Error("Invalid department");
            if (!(req.body.email) || !email.test(req.body.email)) throw new Error("Invalid email");
            if (!(req.body.gender) || ((req.body.gender)!=="male" && (req.body.gender)!=="female")) throw new Error("Invalid gender");

            next();

        } catch (err) {
            return res.status(400).send({ status: 400, error: err.message });
        }
    }
    static validateSignin(req, res, next) {
        try {
            if (!(req.body.email) || !email.test(req.body.email)) throw new Error("Invalid email");
            if (!(req.body.password) || !password.test(req.body.password)) throw new Error("Invalid password");
            next();

        } catch (error) {
            return res.status(401).send({ status: 401, error: error.message});
        }
    }
}
export default userValidation;