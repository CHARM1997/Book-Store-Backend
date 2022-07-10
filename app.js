const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const app = express();

//Middliwares 
/*app.use("/", (req, res, next)=>{
    res.send("This is our starting app")
})*/
app.use(express.json());
app.use("/books",router)//localhost:5000/books  

mongoose.connect("mongodb+srv://admin:ultimate10@cluster0.kj8cvtx.mongodb.net/bookStore?retryWrites=true&w=majority"
).then(()=>console.log("Connect to the Database"))
 .then(() => {app.listen(5000)
})
.catch((err)=>console.log(err));