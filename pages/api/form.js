
export default function handler(req, res) {
    console.log(
        req.body.name,
        req.body.email,
        req.body.service,
        req.body.message
    )
    res.status(200).json({ name: 'John Doe' })
  }
  