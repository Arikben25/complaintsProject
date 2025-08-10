import express from "express"
import {getAllCompliment} from "../controllers/commanderControll.js"

const router = express.Router()

router.post("/getAll", getAllCompliment)

export{
    router
}