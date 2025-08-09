import {connect} from "./dbConnect.js"


export async function insertComplaint(obj) {
    try{
        const db = await connect();
        const complaint = db.collection("complaint")
        const resolt = await complaint.insertOne(obj)
        console.log(`insert id:` , resolt.insertedId);
        return resolt.insertedId
    }catch(err){
        console.log(`big mistace`,err);
    }
}