import users from '../Models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

class UserController {
    static signup(req, res) {
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
}

export default UserController;