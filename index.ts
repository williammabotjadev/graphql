import express from 'express';
const app = express();
const port = 5000;

app.get('/', (req, res)=>
    res.send("Index Page")
);

app.get('/categories', (req, res)=>{
    res.send("<h1>Categories</h1>");
});

app.listen(port, () =>{
    console.log('Server Running at ' + port);
});