import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";
import dotenv from "dotenv";

dotenv.config();
chai.use(chaiHttp);
chai.should();

const dummies = {
  firstName: 'skemnn',
  lastName: 'kfkfjf',
  email: 'fdgdfgf@gmail.com',
  password: 'Kigali111',
  address: 'Kigali',
  jobRole: 'gcxvhvc',
  department: 'hvjhcjhc',
  gender: 'male'
}
const createdUser = {
  firstName: 'skemnn',
  lastName: 'kfkfjf',
  email: 'ercico33@gmail.com',
  password: 'Kigali111',
  address: 'Kigali',
  jobRole: 'gcxvhvc',
  department: 'hvjhcjhc',
  gender: 'male'
}
 
const password = process.env.password;

describe("Signup tests", () => {

  it("User should not be able to signup when data are invalid gender", (done) => {
    const { gender, ...data } = dummies;
    chai.request(app).post("/api/v2/auth/signup").send(data).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });

  it("User should not be able to signup when data are invalid deparrtment", (done) => {
    const { department, ...data } = dummies;
    chai.request(app).post("/api/v2/auth/signup").send(data).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });

  it("User should not be able to signup when data are invalid jobRole", (done) => {
    const { jobRole, ...data } = dummies;
    chai.request(app).post("/api/v2/auth/signup").send(data).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });

  it("User should not be able to signup when data are invalid password", (done) => {
    const { password, ...data } = dummies;
    chai.request(app).post("/api/v2/auth/signup").send(data).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });
  it("User should not be able to signup when invalid firstname", (done) => {
    const { firstName, ...data } = dummies;
    chai.request(app).post("/api/v2/auth/signup").send(data).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });
  it("User should not be able to signup when invalid lastname", (done) => {
    const { lastName, ...data } = dummies;
    chai.request(app).post("/api/v2/auth/signup").send(data).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });

  it("User should not be able to signup when data are invalid address", (done) => {
    const { address, ...data } = dummies;
    chai.request(app).post("/api/v2/auth/signup").send(data).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });
  it("User should not be able to signup when invalid email", (done) => {
    const { email, ...data } = dummies;
    chai.request(app).post("/api/v2/auth/signup").send(data).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });

});
