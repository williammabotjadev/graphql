const express = require('express');
const app = express();
const port = 5000;

app.get('/', ()=>{
    "Index Page";
});

app.listen(port, () =>{
    console.log(`Server Running at ${port}`);
})