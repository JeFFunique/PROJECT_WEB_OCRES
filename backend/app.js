


const express = require("express")







const app = express()
const cryptos = require("./routes/cryptos")
const mongoose = require("mongoose")
//middlewares

app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use("/cryptos", cryptos)
const Connection = async () => {

    try {
        await mongoose.connect("mongodb+srv://jeff:apexjeffpgm2002@cluster0.7xyinlc.mongodb.net/ProjetWeb?retryWrites=true&w=majority"), {
            
                useNewUrlParser: true,
                useFindAndModify: false,
                useUnifiedTopology: true
              
        }
        console.log("connection db on")
    }
    catch(error){
        console.log("no connection db")
    }
}


Connection()


app.listen(5006, () => {
    console.log("server running on port 5006")
})

module.exports = app




