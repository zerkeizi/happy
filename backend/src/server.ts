import express from 'express';

const app = express();

app.use(express.json())

app.get('/users', (req, res) => {

    console.log(req.query);
    console.log(req.params);
    console.log(req.body);

    return res.json({ message: 'hello world'});
})

app.listen(3333);