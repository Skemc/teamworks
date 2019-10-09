import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/user.routes';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/api/v2/auth', userRouter);
app.use('**', (req,res) => {
    return res.status(405).send({ status: 405, error: 'URL does not exist'})
});
app.use((req,res) => {
    return res.status(500).send({ status: 500, error: 'Oops, something went wrong!'});
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{    
});

export default app;


