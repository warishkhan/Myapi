require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
const products_routes = require("./routes/products")

app.get('/',(req,res)=>{
    res.status(200).send("hello i m the best")
})

// database 

const conectDB = require("./db/conect")

// Our routes

app.use("/api/products",products_routes)


const start = async() =>{
    try {
        await conectDB(process.env.DATABASE)
        app.listen(PORT,()=>{
            console.log(`server is runnimg on port ${PORT}`);
        });
    } catch (error) {
       console.log(error); 
    }
}

start();