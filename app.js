const { log } = require("console");
const express = require("express");
const https  = require("https");
const app = express();

app.get("/" , (req , res)=>{
    var country = "egypt";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=6d6df90c8893b0e146208a0707f1921f&units=metric`;
    https.get(url , (apiRes)=>{
        apiRes.on("data" , (data)=>{
            const weatherData = JSON.parse(data);
            res.send(`<h1>The temprature in ${weatherData.name} is ${weatherData.main.temp} celicues</h1>`);
        });
    });
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000 ... ");
});