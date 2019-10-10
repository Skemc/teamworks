import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/user.routes';
import articleRouter from './routes/articler.routes'


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/api/v2/auth', userRouter);
app.use('/api/v2', articleRouter);


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('done');
    
});

export default app;


