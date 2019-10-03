import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";
chai.use(chaiHttp);
chai.should();

const dummies = {
    title: 'fjdbf',
     article: 'jbfdd'
}
const editDummy = {
  title: 'igtnvfjnk',
  article: 'hgsdhdkm'
}
const editDummy2 = {
  title: 'igjxcvnk',
  article: 'nkbjvjhm'
}
describe("articles tests", () => {

  it("User should be able to create article when data are valid ", (done) => {
    chai.request(app).post("/api/v1/articles")
    .set('auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlcmljNkBnbWFpbC5jb20iLCJpc2FkbWluIjpmYWxzZSwiaWF0IjoxNTY5OTY0OTkzfQ.NdgiZycbMVgp7NKADgaUJMwJhXOl7wFeLSCb_RLitkg')
    .send(dummies)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.an("object");
      done();
    })
    setTimeout(done, 2000);
  });

  it("User should not be able to create article when token is invalid ", (done) => {
    chai.request(app).post("/api/v1/articles")
    .set('auth', 'eyJhbMSwiZW1haWwiOiJlcmljNkBnbWFpbC5jb20iLCJpc2FkbWluIjpmYWxzZSwiaWF0IjoxNTY5OTY0OTkzfQ.NdgiZycbMVgp7NKADgaUJMwJhXOl7wFeLSCb_RLitkg')
    .send(dummies).end((err, res) => {
      res.should.have.status(401);
      res.body.should.be.an("object");
      done();
    });
  });
  it("User should not be able to create article when user not exist", (done) => {
    chai.request(app).post("/api/v1/articles")
    .set('auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJlQGdtYWlsLmNvbSIsImlzYWRtaW4iOmZhbHNlLCJpYXQiOjE1Njk5NjY3MTV9.NshLcJev7_69Ua0tWB24Gk6epSIIDevnGRYjt-ZS0dU')
    .send(dummies).end((err, res) => {
      res.should.have.status(404);
      res.body.should.be.an("object");
      done();
    });
  });
  it("User should not be able to create article when already created", (done) => {
    chai.request(app).post("/api/v1/articles")
    .set('auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlcmljNkBnbWFpbC5jb20iLCJpc2FkbWluIjpmYWxzZSwiaWF0IjoxNTY5OTY0OTkzfQ.NdgiZycbMVgp7NKADgaUJMwJhXOl7wFeLSCb_RLitkg')
    .send(dummies).end((err, res) => {
      res.should.have.status(409);
      res.body.should.be.an("object");
      done();
    });
  });

  it("User should not be able to create article when no token ", (done) => {
    chai.request(app).post("/api/v1/articles")
    .set('auth', '')
    .send(dummies).end((err, res) => {
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

  it("User should be able to edit article", (done) => {
    chai.request(app).patch(`/api/v1/articles/${1}`)
    .set('auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlcmljNkBnbWFpbC5jb20iLCJpc2FkbWluIjpmYWxzZSwiaWF0IjoxNTY5OTY0OTkzfQ.NdgiZycbMVgp7NKADgaUJMwJhXOl7wFeLSCb_RLitkg')
    .send(editDummy).end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.an("object");
      done();
    });
  });

  it("User should not be able to edit article when article already edited", (done) => {
    chai.request(app).patch(`/api/v1/articles/${1}`)
    .set('auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlcmljNkBnbWFpbC5jb20iLCJpc2FkbWluIjpmYWxzZSwiaWF0IjoxNTY5OTY0OTkzfQ.NdgiZycbMVgp7NKADgaUJMwJhXOl7wFeLSCb_RLitkg')
    .send(editDummy).end((err, res) => {
      res.should.have.status(409);
      res.body.should.be.an("object");
      done();
    });
  });

  it("User should not be able to edit article when article is not yours", (done) => {
    chai.request(app).patch(`/api/v1/articles/${2}`)
    .set('auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlcmljNkBnbWFpbC5jb20iLCJpc2FkbWluIjpmYWxzZSwiaWF0IjoxNTY5OTY0OTkzfQ.NdgiZycbMVgp7NKADgaUJMwJhXOl7wFeLSCb_RLitkg')
    .send(editDummy2).end((err, res) => {
      res.should.have.status(403);
      res.body.should.be.an("object");
      done();
    });
  });
 
  it("User should not be able to edit article when not found", (done) => {
    chai.request(app).patch(`/api/v1/articles/${100000}`)
    .set('auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlcmljNkBnbWFpbC5jb20iLCJpc2FkbWluIjpmYWxzZSwiaWF0IjoxNTY5OTY0OTkzfQ.NdgiZycbMVgp7NKADgaUJMwJhXOl7wFeLSCb_RLitkg')
    .send(editDummy).end((err, res) => {
      res.should.have.status(404);
      res.body.should.be.an("object");
      done();
    });
  });
  it("User should be able to delete article", (done) => {
    chai.request(app).delete(`/api/v1/articles/${1}`)
    .set('auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlcmljNkBnbWFpbC5jb20iLCJpc2FkbWluIjpmYWxzZSwiaWF0IjoxNTY5OTY0OTkzfQ.NdgiZycbMVgp7NKADgaUJMwJhXOl7wFeLSCb_RLitkg')
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.an("object");
      done();
    });
  });
  it("User should not be able to delete article when article not yours", (done) => {
    chai.request(app).delete(`/api/v1/articles/${2}`)
    .set('auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlcmljNkBnbWFpbC5jb20iLCJpc2FkbWluIjpmYWxzZSwiaWF0IjoxNTY5OTY0OTkzfQ.NdgiZycbMVgp7NKADgaUJMwJhXOl7wFeLSCb_RLitkg')
    .end((err, res) => {
      res.should.have.status(403);
      res.body.should.be.an("object");
      done();
    });
  });
  it("User should not be able to delete article when not found", (done) => {
    chai.request(app).delete(`/api/v1/articles/${100000}`)
    .set('auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlcmljNkBnbWFpbC5jb20iLCJpc2FkbWluIjpmYWxzZSwiaWF0IjoxNTY5OTY0OTkzfQ.NdgiZycbMVgp7NKADgaUJMwJhXOl7wFeLSCb_RLitkg')
    .end((err, res) => {
      res.should.have.status(404);
      res.body.should.be.an("object");
      done();
    });
  });
  it("User should be able to view all article", (done) => {
    chai.request(app).get(`/api/v1/articles`)
    .set('auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlcmljNkBnbWFpbC5jb20iLCJpc2FkbWluIjpmYWxzZSwiaWF0IjoxNTY5OTY0OTkzfQ.NdgiZycbMVgp7NKADgaUJMwJhXOl7wFeLSCb_RLitkg')
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.an("object");
      done();
    });
  });
  it("User should not be able to view all articles when user not registered" , (done) => {
    chai.request(app).get(`/api/v1/articles`)
    .set('auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJoaEBnbWFpbC5jb20iLCJpc2FkbWluIjpmYWxzZSwiaWF0IjoxNTcwMTI4OTI4fQ.vdCwqW7O1BobuwtQa88m7S1D3wFK_50PfA5ft0lzXr8')
    .end((err, res) => {
      res.should.have.status(401);
      res.body.should.be.an("object");
      done();
    });
  });
  it("User should be able to view article", (done) => {
    chai.request(app).get(`/api/v1/articles/${1}`)
    .set('auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlcmljNkBnbWFpbC5jb20iLCJpc2FkbWluIjpmYWxzZSwiaWF0IjoxNTY5OTY0OTkzfQ.NdgiZycbMVgp7NKADgaUJMwJhXOl7wFeLSCb_RLitkg')
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.an("object");
      done();
    });
  });
  it("User should not be able to view article when not found", (done) => {
    chai.request(app).get(`/api/v1/articles/${1000}`)
    .set('auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlcmljNkBnbWFpbC5jb20iLCJpc2FkbWluIjpmYWxzZSwiaWF0IjoxNTY5OTY0OTkzfQ.NdgiZycbMVgp7NKADgaUJMwJhXOl7wFeLSCb_RLitkg')
    .end((err, res) => {
      res.should.have.status(404);
      res.body.should.be.an("object");
      done();
    });
  });

  
});