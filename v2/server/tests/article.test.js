import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";
import tokens from '../tests/articleMockData';
import mock from '../tests/mockData'

chai.use(chaiHttp);
chai.should();

const editDummy = {
  title: 'igtnvfjnk',
  article: 'hgsdhdkm'
}
const editDummy2 = {
  title: 'igjxcvnk',
  article: 'nkbjvjhm'
}

describe("create articles tests", () => {

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

describe('edit article tests', () => {
  it("User should be able to edit article", (done) => {
    chai.request(app).patch(`/api/v2/articles/${1}`)
    .set('auth', tokens[0])
    .send(mock.editArticle).end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.an("object");
      done();
    });
  });

  it("User should not be able to edit article when article already edited", (done) => {
    chai.request(app).patch(`/api/v2/articles/${1}`)
    .set('auth',tokens[0])
    .send(mock.editArticle).end((err, res) => {
      res.should.have.status(409);
      res.body.should.be.an("object");
      done();
    });
  });

  it("User should not be able to edit article when article is not yours", (done) => {
    chai.request(app).patch(`/api/v2/articles/${1}`)
    .set('auth', tokens[2])
    .send(mock.editArticle).end((err, res) => {
      res.should.have.status(403);
      res.body.should.be.an("object");
      done();
    });
  });
 
  it("User should not be able to edit article when not found", (done) => {
    chai.request(app).patch(`/api/v2/articles/${100000}`)
    .set('auth',tokens[0])
    .send(mock.editArticle).end((err, res) => {
      res.should.have.status(404);
      res.body.should.be.an("object");
      done();
    });
});
});
