import users from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import userValidations from '../helpers/user.validation';

dotenv.config();

class UserController {
    static signup(req, res) {
        const { error } = userValidations.validateSignup(req.body);
        if (error){
            return res.status(400).send({ status: 400, error: error.details[0].message });
        }
        const isUserExist = users.find(user => user.email === req.body.email);
        if (isUserExist) {
            return res.status(409).send({
                status: 409,
                message: "user already exist"
            })
        }
        const { firstName, lastName, email, address, gender, jobRole, department } = req.body;
        const password = bcrypt.hashSync(req.body.password, 10);

        const newUser = {
            id: users.length + 1,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            gender: gender,
            address: address,
            jobRole: jobRole,
            department: department,
            isAdmin: false
        }
        const token = jwt.sign({
            id: newUser.id,
            email: newUser.email,
            isadmin: newUser.isAdmin
        }, process.env.secretKey);

        users.push(newUser);
        res.status(201).send({
            status: 201,
            message: "User created successfully",
            data: token
        })
    }
    static signin(req, res) {
        const { error } = userValidations.validateSignin(req.body)
        if (error){
            return res.status(400).send({ status: 400, error: error.details[0].message });
        }
        const isUserExist = users.find(user => user.email === req.body.email);
        if (!isUserExist) {
            return res.status(401).send({
                status: 401,
                message: "user dont exist"
            });
        } else {
            const isPassword = bcrypt.compareSync(req.body.password, isUserExist.password);
            if(isPassword) {
                const token = jwt.sign({
                    id: isUserExist.id,
                    email: isUserExist.email,
                    isadmin: isUserExist.isAdmin
                }, process.env.secretKey);
    
                res.status(200).send({
                    status: 200,
                    message: "User is successfully logged in",
                    data: token
                });
            } 
             else return res.status(401).send({
                status: 401,
                message: "Incorrect password"
            });
        }
    }
}

export default UserController;