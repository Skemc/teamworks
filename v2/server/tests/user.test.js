import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";
import dotenv from "dotenv";
import mock from './mockData.js'

dotenv.config();
chai.use(chaiHttp);
chai.should();


const password = process.env.password;

describe("Signup tests", () => {
  
  it("User should be able to signup when data are valid ", (done) => {
    chai.request(app).post("/api/v2/auh/signup").send(mock.signups).end((err, res) => {
      res.should.have.status(405);  
         
      res.body.should.be.an("object");
      done();
    });
  });
  it("User should be able to signup when data are valid ", (done) => {
    chai.request(app).post("/api/v2/auth/signup").send(mock.signups).end((err, res) => {
      res.should.have.status(201);  
      res.body.should.be.an("object");
      done();
    });
  });
  it("User should not be able to signup when data are invalid gender", (done) => {
    const { gender, ...data } = mock.signups;
    chai.request(app).post("/api/v2/auth/signup").send(data).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });

  it("User should not be able to signup when data are invalid deparrtment", (done) => {
    const { department, ...data } = mock.signups;
    chai.request(app).post("/api/v2/auth/signup").send(data).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });

  it("User should not be able to signup when data are invalid jobRole", (done) => {
    const { jobRole, ...data } = mock.signups;
    chai.request(app).post("/api/v2/auth/signup").send(data).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });

  it("User should not be able to signup when data are invalid password", (done) => {
    const { password, ...data } = mock.signups;
    chai.request(app).post("/api/v2/auth/signup").send(data).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });
  it("User should not be able to signup when invalid firstname", (done) => {
    const { firstName, ...data } = mock.signups;
    chai.request(app).post("/api/v2/auth/signup").send(data).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });
  it("User should not be able to signup when invalid lastname", (done) => {
    const { lastName, ...data } = mock.signups;
    chai.request(app).post("/api/v2/auth/signup").send(data).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });

  it("User should not be able to signup when data are invalid address", (done) => {
    const { address, ...data } = mock.signups;
    chai.request(app).post("/api/v2/auth/signup").send(data).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });
  it("User should not be able to signup when invalid email", (done) => {
    const { email, ...data } = mock.signups;
    chai.request(app).post("/api/v2/auth/signup").send(data).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });

  it("User should not be able to signup when user already exist", (done) => {
    chai.request(app).post("/api/v2/auth/signup").send(mock.signups).end((err, res) => {
      res.should.have.status(409);
      res.body.should.be.an("object");
      done();
    });
  });
});

describe('Signin tests', () => {

  it("should be able to signin", (done) => {
    chai.request(app).post("/api/v2/auth/signin").send(mock.signins).end((err, res) => {
      res.should.have.status(200);      
      res.body.should.be.an("object");
      done();
    });
  });
  it("should not be able to signin with wrong password ", (done) => {
    chai.request(app).post("/api/v2/auth/signin").send({
      email: mock.signins.email,
      password : "Thvbjnklnkljbhj11"
    }).end((err, res) => {
      res.should.have.status(401);
      res.body.should.be.an("object");
      done();
    });
  });
  it("should not be able to signin with invalid email", (done) => {
    const { email, ...data} = mock.signins;
    chai.request(app).post("/api/v2/auth/signin").send(data).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });
  it("should not be able to signin with invalid password", (done) => {
    const { password, ...data} = mock.signins;
    chai.request(app).post("/api/v2/auth/signin").send(data).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });
  it("should not be able to signin with an unknown account", (done) => {
    chai.request(app).post("/api/v2/auth/signin").send({
        email: 'eric123@gmail.com',
        password
    }).end((err, res) => {
      res.should.have.status(401);
      res.body.should.be.an("object");
      done();
    });
  });
});
