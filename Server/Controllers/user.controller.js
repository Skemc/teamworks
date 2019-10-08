import users from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import queries from '../config/queries';
import executeQuery from "../config/connectDb";
import userValidations from '../helpers/user.validation';

dotenv.config();

class UserController {
    static async signup(req, res) {
        try{
        const { error } = userValidations.validateSignup(req.body);
        if (error){
            return res.status(400).send({ status: 400, error: error.details[0].message });
        }
        const { firstName, lastName, email, address, gender, jobRole, department } = req.body;
        const isUserExist = await executeQuery(queries[0].isUserExist, [email]);
        if (isUserExist[0]) {
            return res.status(409).send({
                status: 409,
                message: "user already exist"
            })
        }
        const password = bcrypt.hashSync(req.body.password, 10);

        const newUser = [
            firstName,
            lastName,
            email,
            password,
            gender,
            address,
            jobRole,
            department,
        ]
        
        const createdUser = await executeQuery(queries[0].createUser, newUser);
        
        res.status(201).send({
            status: 201,
            message: "User created successfully",
            data: {
                id: createdUser[0].id,
                firstName: createdUser[0].firstname,
                lastName: createdUser[0].lastname,
                email: createdUser[0].email,
                gender: createdUser[0].gender,
                address: createdUser[0].address,
                jobrole: createdUser[0].jobrole,
                department: createdUser[0].department                
            }
        })
      }
      catch(err) {
          return res.status(500).send({ status: 500, error: err.message})
      }
    }
}

export default UserController;