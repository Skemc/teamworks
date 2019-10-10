import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";
import tokens from '../tests/articleMockData';
import mock from '../tests/mockData'

chai.use(chaiHttp);
chai.should();


describe("articles tests", () => {

  it("User should be able to create article when data are valid ", (done) => {
    chai.request(app).post("/api/v2/articles")
    .set('auth', tokens[0])
    .send(mock.articles)
    .end((err, res) => {            
      res.should.have.status(201);
      res.body.should.be.an("object");
      done();
    })
    setTimeout(done, 2000);
  });
  
  it("User should not be able to create article when token is invalid ", (done) => {
    chai.request(app).post("/api/v2/articles")
    .set('auth', tokens[1])
    .send(mock.articles).end((err, res) => {      
      res.should.have.status(401);
      res.body.should.be.an("object");
      done();
    });
  });
  it("User should not be able to create article when already created", (done) => {
    chai.request(app).post("/api/v2/articles")
    .set('auth', tokens[0])
    .send(mock.articles).end((err, res) => {
      res.should.have.status(409);
      res.body.should.be.an("object");
      done();
    });
  });

  it("User should not be able to create article when no token ", (done) => {
    chai.request(app).post("/api/v2/articles")
    .set('auth', '')
    .send(mock.articles).end((err, res) => {
      res.should.have.status(401);
      res.body.should.be.an("object");
      done();
    });
  });
 
});

