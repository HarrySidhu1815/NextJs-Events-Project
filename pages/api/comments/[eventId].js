import { connectDatabase, getDocument, insertDocument } from "../../../helpers/db-helper";

async function handler(req, res) {
  const eventId = req.query.eventId;

  let client
    try {
      client = await connectDatabase()
    } catch (error) {
      res.status(500).json({message: 'Failed to connect to database'})
    }

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      !text ||
      name.trim() === "" ||
      text.trim() === ""
    ) {
      res.status(422).json({message: 'Invalid data'})
      return
    }

    const newComment = {
      email,
      text,
      name,
      eventId
    }

    let result
    try {
      result = await insertDocument(client, 'comments', newComment)
      newComment._id = result.insertedId
      res.status(201).json({message: 'Comment Added', comment: newComment})
    } catch (error) {
      res.status(500).json({message: 'Failed to add the comment'})
    }
    client.close()
    return
  }

  if (req.method === "GET") {
    
    try {
      const comments = await getDocument(client, 'comments', {_id: -1}, {eventId: eventId})
      res.status(200).json({comments: comments})
    } catch (error) {
      res.status(500).json({message: 'Failed to fetch the comments'})
    }

    client.close()
  }
}

export default handler;
