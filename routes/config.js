import {commander} from "./commanderRoute.js"
import {routSoldier} from "./soldierRoute.js"

export async function configRout(app) {
    app.use("/commander",commander)
    app.use("/soldier",routSoldier)
    app.use("/",(req, res)=>{
        res.status(400).json({msg:"the url is not find"})
    })
}