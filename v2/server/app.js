import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/user.routes';
import articleRouter from './routes/articler.routes'


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
try {
    app.use('/api/v2/auth', userRouter);
    app.use('/api/v2', articleRouter);
    app.use('**', (req,res) => {
        return res.status(405).send({status: 405, error: 'You cannot use this method'})
    })

    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log('done');

    });
} catch (error) {
   res.status(500).send({ status: 500, error: error.message});
}

export default app;


