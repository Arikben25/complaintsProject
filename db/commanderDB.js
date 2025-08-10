import { connect } from "./dbConnect.js";

export async function getall() {
  try {
    const db = await connect();
    const resolt = await db.collection("complaint").find().toArray()
    // const resolt =  collection.find()
    console.log(resolt);
    return resolt;
  } catch (err) {
    console.error(err);
  }
}
