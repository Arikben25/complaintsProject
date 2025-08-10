import {router} from "./commanderRoute.js"
import {routSoldier} from "./soldierRoute.js"
import { config } from "dotenv"
config()

export async function configRout(app) {
    app.use("/commander",checkUser ,router)
    app.use("/soldier" ,routSoldier)
    app.use("/",(req, res)=>{
        res.status(400).json({msg:"the url is not find"})
    })
}

function checkUser(req, res ,next){
    if(!req.body.password){
        res.send("password!!")
    }
    const {password} = req.body
    if(password != process.env.COMMANDER_PASSWORD){
        res.send("the password is not good")
        return
    }
    next()
}