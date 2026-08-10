const express = require('express');
const app = express();

const PORT = 3000;

app.get('/',(req,res)=>{
    res.send('This is demo program for express js');
});

app.get('/about',(req,res)=>{
    res.json({
        active: true,
        version:"5.2.0",
        message:"This is Js server"
    });
});

app.listen(PORT,() => { 
    console.log(`Success! Server is running at http://localhost:3000`);
    console.log(`Press ctrl+c to stop the server.`);
});