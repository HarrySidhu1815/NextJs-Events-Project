import { connectDatabase, insertDocument } from "../../helpers/db-helper";

async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email.includes("@") || !email) {
      res.status(422).json({ message: "Invalid email" });
    }

    let client

    try {
      client = await connectDatabase()
    } catch (error) {
      res.status(500).json({message: 'Failed to connect to database'})
      return
    }

    try {
      await insertDocument(client, 'newsletter', {email: email})
      res.status(201).json({ message: "Signed Up" });
    } catch (error) {
      res.status(500).json({message: 'Failed to add email to database'})
    }
    client.close()
  }
}

export default handler;
