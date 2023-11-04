// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log('webhook received', req.body)
  if (req.body.entry.URL) {

      res.revalidate(`${req.body.entry.URL }`);
  }
  res.json({message:"success"})
    
  }
  