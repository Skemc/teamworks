import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";
chai.use(chaiHttp);
chai.should();



describe("Signup tests", () => {

  it("User should be able to signup when data are valid ", (done) => {
    chai.request(app).post("/api/v1/auth/signup").send({
      firstName: 'skemnn',
      lastName: 'kfkfjf',
      email: 'fdgdfgf@gmail.com',
      password: 'Kigali111',
      address: 'Kigali',
      jobRole: 'gcxvhvc',
      department: 'hvjhcjhc',
      gender: 'male'
    }).end((err, res) => {
      res.should.have.status(201);
      res.body.should.be.an("object");
      done();
    });
  });

  it("User should not be able to signup when data are invalid gender", (done) => {
    chai.request(app).post("/api/v1/auth/signup").send({
      firstName: 'skemnn',
      lastName: 'kfkfjf',
      email: 'fdgdfgf@gmail.com',
      password: 'Kigali111',
      address: 'Kigali',
      jobRole: 'gcxvhvc',
      department: 'hvjhcjhc',
      gender: 'malejfdjd'
    }).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });

  it("User should not be able to signup when data are invalid deparrtment", (done) => {
    chai.request(app).post("/api/v1/auth/signup").send({
      firstName: 'skemnn',
      lastName: 'kfkfjf',
      email: 'fdgdfgf@gmail.com',
      password: 'Kigali111',
      address: 'Kigali',
      jobRole: 'gcxvhvc',
      department: '',
      gender: 'male'
    }).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });

  it("User should not be able to signup when data are invalid jobRole", (done) => {
    chai.request(app).post("/api/v1/auth/signup").send({
      firstName: 'skemnn',
      lastName: 'kfkfjf',
      email: 'fdgdfgf@gmail.com',
      password: 'Kigali111',
      address: 'Kigali',
      jobRole: '',
      department: 'dkdkfk',
      gender: 'male'
    }).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });

  it("User should not be able to signup when data are invalid password", (done) => {
    chai.request(app).post("/api/v1/auth/signup").send({
      firstName: 'skemnn',
      lastName: 'kfkfjf',
      email: 'fdgdfgf@gmail.com',
      password: '',
      address: 'Kigali',
      jobRole: 'gcxvhvc',
      department: '',
      gender: 'male'
    }).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });
  it("User should not be able to signup when invalid firstname", (done) => {
    chai.request(app).post("/api/v1/auth/signup").send({
      firstName: '',
      lastName: 'kfkfjf',
      email: 'fdgdfgf@gmail.com',
      password: 'Kigali111',
      address: 'Kigali',
      jobRole: 'gcxvhvc',
      department: 'hvjhcjhc',
      gender: 'male'
    }).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });
  it("User should not be able to signup when invalid lastname", (done) => {
    chai.request(app).post("/api/v1/auth/signup").send({
      firstName: 'jcdjfjv',
      lastName: '',
      email: 'fdgdfgf@gmail.com',
      password: 'Kigali111',
      address: 'Kigali',
      jobRole: 'gcxvhvc',
      department: 'hvjhcjhc',
      gender: 'male'
    }).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });

  it("User should not be able to signup when data are invalid address", (done) => {
    chai.request(app).post("/api/v1/auth/signup").send({
      firstName: 'skemnn',
      lastName: 'kfkfjf',
      email: 'fdgdfgf@gmail.com',
      password: 'Kigali111',
      address: '',
      jobRole: 'gcxvhvc',
      department: 'jdjfjfjf',
      gender: 'male'
    }).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });
  it("User should not be able to signup when invalid email", (done) => {
    chai.request(app).post("/api/v1/auth/signup").send({
      firstName: 'dsfd',
      lastName: 'hdfghf',
      email: 'sdsf@gmail',
      password: 'Kigali111',
      address: 'Kigali',
      jobRole: 'gcxvhvc',
      department: 'hvjhcjhc',
      gender: 'male'
    }).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });

  it("User should not be able to signup when user already exist", (done) => {
    chai.request(app).post("/api/v1/auth/signup").send({
        firstName: 'skemnn',
        lastName: 'kfkfjf',
        email: 'fdgdfgf@gmail.com',
        password: 'Kigali111',
        address: 'Kigali',
        jobRole: 'gcxvhvc',
        department: 'hvjhcjhc',
        gender: 'male'
    }).end((err, res) => {
      res.should.have.status(409);
      res.body.should.be.an("object");
      done();
    });
  });
});

describe('Signin tests', () => {

  it("should be able to signin", (done) => {
    chai.request(app).post("/api/v1/auth/signin").send({
      email : "eric6@gmail.com",
      password : "Rwanda000"
    }).end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.an("object");
      done();
    });
  });
  it("should not be able to signin with wrong password ", (done) => {
    chai.request(app).post("/api/v1/auth/signin").send({
      email : "eric6@gmail.com",
      password : "Rwanda0000"
    }).end((err, res) => {
      res.should.have.status(401);
      res.body.should.be.an("object");
      done();
    });
  });
  it("should not be able to signin with invalid email", (done) => {
    chai.request(app).post("/api/v1/auth/signin").send({
        email: 'eric6.com',
        password: 'Rwanda000'
    }).end((err, res) => {
      res.should.have.status(401);
      res.body.should.be.an("object");
      done();
    });
  });
  it("should not be able to signin with invalid password", (done) => {
    chai.request(app).post("/api/v1/auth/signin").send({
        email: 'fdgdfgf@gmail.com',
        password: 'Kiga'
    }).end((err, res) => {
      res.should.have.status(401);
      res.body.should.be.an("object");
      done();
    });
  });
  it("should not be able to signin with an unknown account", (done) => {
    chai.request(app).post("/api/v1/auth/signin").send({
        email: 'eric123@gmail.com',
        password: 'Rwanda000'
    }).end((err, res) => {
      res.should.have.status(401);
      res.body.should.be.an("object");
      done();
    });
  });
});