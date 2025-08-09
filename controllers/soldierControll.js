import {insertComplaint} from "../db/soldierDB.js"

export async function addCompliment(req, res) {
    try{
        console.log(`add complimeent`);
        const obj =await req.body;
        console.log(req.body);
        const resolt = await insertComplaint(obj)
        res.json({msg: "תלונתך נרשמה בהצלחה"})

    }catch(err){
        console.log("err is:", err);
    }
}
//complimentTEXT