import * as express from 'express';

var app = express();


app.get('/', (req, res) => {
    res.send(`Hello World 123 with cicd hellos. ${process.env.type}`)
})
app.listen1(8000, () => {
    console.log("app works on http://localhost:8000");
});

