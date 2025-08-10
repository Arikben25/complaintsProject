import {getall} from "../db/commanderDB.js"

export async function getAllCompliment(req, res) {
    console.log(req.body);
    try{
        const resolt = await getall()
        if(!resolt){
            res.status(500).json({msg:"There is a problem with the data, try leter."})
            return
        }        
        res.json({msg:resolt})
    }catch(err){
        console.log(`err is`,err);
        res.status(500).json({msg:"There is a problem with the server, try leter."})
    }
}