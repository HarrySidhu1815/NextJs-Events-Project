function handler(req, res) {
  const eventId = req.query.eventId;

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
      id: new Date.toISOString(),
      email,
      text,
      name
    }

    console.log(newComment)
    res.status(201).json({message: 'Comment Added', comment: newComment})
  }

  if (req.method === "GET") {
    const dummyList = [
      {id: 'c1', name: 'Harry', text: 'First Comment'},
      {id: 'c2', name: 'Akash', text: 'Second Comment'},
    ]

    res.status(201).json({comments: dummyList})
  }
}

export default handler;
