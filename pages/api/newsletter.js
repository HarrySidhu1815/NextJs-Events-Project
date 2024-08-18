function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email.includes("@") || !email) {
      res.status(422).json({ message: "Invalid email" });
    }

    console.log(email);
    res.status(201).json({ message: "Signed Up" });
  }
}

export default handler;
