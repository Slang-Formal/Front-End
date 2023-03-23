// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // get data submitted by user
  const body = req.body;

  // optionally log the body
  console.log('body: ', body);

  // check if the data coming in is valid
  if (!body.sentence) {
    return res.status(400).json({ data: "Sentence was not found" });
  }

  res.status(200).json({ region: body.sentence });
}
