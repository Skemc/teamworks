const realToken= 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlcmljNkBnbWFpbC5jb20iLCJpc2FkbWluIjpmYWxzZSwiaWF0IjoxNTY5OTY0OTkzfQ.NdgiZycbMVgp7NKADgaUJMwJhXOl7wFeLSCb_RLitkg';

const invalidToken =
    'hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlcmljNkBnbWFpbC5jb20iLCJpc2FkbWluIjpmYWxzZSwiaWF0IjoxNTY5OTY0OTkzfQ.NdgiZycbMVgp7NKADgaUJMwJhXOl7wFeLSCb_RLitkg';
const wrongToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJlcmljYTAwQGdtYWlsLmNvbSIsImlhdCI6MTU3MDcwNzM4M30.vlG1uhH3MShFOx7p0b7eVcZs7Bi1yvBmBtXF0bbpAYw';

const articleMock= [realToken,invalidToken, wrongToken];
export default articleMock;