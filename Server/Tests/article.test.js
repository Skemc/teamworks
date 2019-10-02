import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";
chai.use(chaiHttp);
chai.should();



describe("articles tests", () => {

  it("User should be able to create article when data are valid ", (done) => {
    chai.request(app).post("/api/v1/articles")
    .set('auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlcmljNkBnbWFpbC5jb20iLCJpc2FkbWluIjpmYWxzZSwiaWF0IjoxNTY5OTY0OTkzfQ.NdgiZycbMVgp7NKADgaUJMwJhXOl7wFeLSCb_RLitkg')
    .send({
     title: 'fjdbf',
     article: 'jbfdd'
    }).end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.an("object");
      done();
    });
  });

  it("User should not be able to create article when token is invalid ", (done) => {
    chai.request(app).post("/api/v1/articles")
    .set('auth', 'eyJhbMSwiZW1haWwiOiJlcmljNkBnbWFpbC5jb20iLCJpc2FkbWluIjpmYWxzZSwiaWF0IjoxNTY5OTY0OTkzfQ.NdgiZycbMVgp7NKADgaUJMwJhXOl7wFeLSCb_RLitkg')
    .send({
     title: 'fjdbf',
     article: 'jbfdd'
    }).end((err, res) => {
      res.should.have.status(401);
      res.body.should.be.an("object");
      done();
    });
  });
  it("User should not be able to create article when user not exist", (done) => {
    chai.request(app).post("/api/v1/articles")
    .set('auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJlQGdtYWlsLmNvbSIsImlzYWRtaW4iOmZhbHNlLCJpYXQiOjE1Njk5NjY3MTV9.NshLcJev7_69Ua0tWB24Gk6epSIIDevnGRYjt-ZS0dU')
    .send({
     title: 'fjdbf',
     article: 'jbfdd'
    }).end((err, res) => {
      res.should.have.status(404);
      res.body.should.be.an("object");
      done();
    });
  });
  it("User should not be able to create article when already created", (done) => {
    chai.request(app).post("/api/v1/articles")
    .set('auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlcmljNkBnbWFpbC5jb20iLCJpc2FkbWluIjpmYWxzZSwiaWF0IjoxNTY5OTY0OTkzfQ.NdgiZycbMVgp7NKADgaUJMwJhXOl7wFeLSCb_RLitkg')
    .send({
     title: 'fjdbf',
     article: 'jbfdd'
    }).end((err, res) => {
      res.should.have.status(409);
      res.body.should.be.an("object");
      done();
    });
  });

  it("User should not be able to create article when no token ", (done) => {
    chai.request(app).post("/api/v1/articles")
    .set('auth', '')
    .send({
     title: 'fjdbf',
     article: 'jbfdd'
    }).end((err, res) => {
      res.should.have.status(401);
      res.body.should.be.an("object");
      done();
    });
  });

  it("User should be able to create article when no title ", (done) => {
    chai.request(app).post("/api/v1/articles")
    .set('auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlcmljNkBnbWFpbC5jb20iLCJpc2FkbWluIjpmYWxzZSwiaWF0IjoxNTY5OTY0OTkzfQ.NdgiZycbMVgp7NKADgaUJMwJhXOl7wFeLSCb_RLitkg')
    .send({
     title: '',
     article: 'jbfdd'
    }).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });
  it("User should be able to create article when no article ", (done) => {
    chai.request(app).post("/api/v1/articles")
    .set('auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlcmljNkBnbWFpbC5jb20iLCJpc2FkbWluIjpmYWxzZSwiaWF0IjoxNTY5OTY0OTkzfQ.NdgiZycbMVgp7NKADgaUJMwJhXOl7wFeLSCb_RLitkg')
    .send({
     title: 'dfg',
     article: ''
    }).end((err, res) => {
      res.should.have.status(400);
      res.body.should.be.an("object");
      done();
    });
  });
 
});