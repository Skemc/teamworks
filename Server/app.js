import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './Routes/user.routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/api/v1/auth', userRouter);


const port = process.env.PORT || 2000;

app.listen(port, ()=>{
    console.log(`connected on ${port}`);
});

export default app;


