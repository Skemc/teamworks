import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/user.routes';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/api/v2/auth', userRouter);


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`connected on ${port}`);
});

export default app;


