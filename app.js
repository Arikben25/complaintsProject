import express from "express"
import dotenv from "dotenv"
import {configRout} from "./routes/config.js"
dotenv.config()
const PORT = process.env.PORT

const app = express()
app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));

configRout(app)

app.use("/",(req, res )=>{
    res.send("hi from yuor server")
})

app.listen(PORT,()=>{
    console.log(`the server is up on port ${PORT}` )
})