require("dotenv").config();
const conectDB = require("./db/conect");
const Product = require("./models/schema");

const ProductJson = require("./products.json");

const start = async () =>{
    try {
        await conectDB(process.env.DATABASE);
        await Product.deleteMany();
        await Product.create(ProductJson)
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}

start();