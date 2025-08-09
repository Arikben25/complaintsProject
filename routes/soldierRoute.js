import express from "express"
import {addCompliment} from "../controllers/soldierControll.js"

const routSoldier = express.Router()

routSoldier.post("/compliment", addCompliment)

export{
    routSoldier
}