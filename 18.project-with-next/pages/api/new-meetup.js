import { MongoClient } from "mongodb";

async function handler(req, res) {
  console.log(req.method);
  console.log("handler");

  if (req.method === "POST") {
    console.log("POST, dani");

    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://danny:test@cluster0.tlgnfdd.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
}
export default handler;
