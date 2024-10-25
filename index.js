//including express module 
const express = require('express');
//intialize the application
const app = express();

//port variable 
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello World');
})

//start your app or server 

app.listen(port, ()=>{
    console.log("Application is started");
});