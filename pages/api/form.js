const axios = require("axios");
export default function handler(req, res) {
  const body = {
    data: {
      name: req.body.name,
      email: req.body.email,
      service: req.body.service,
      message: req.body.message,
      phone: req.body.contact_no,
    },
  };
  console.log(
    req.body.name,
    req.body.email,
    req.body.service,
    req.body.message,
    req.body.contact_no
  );
  // send the data to backend
  const config = {
    headers: { Authorization: `Bearer ${process.env.CONTACT_FORM_TOKEN}` },
  };
  axios
    .post(`${process.env.NEXT_PUBLIC_ADMIN_URL}/api/contactforms`, body, config)
    .then((res) => {
      // console.log('Response from backend', res.data);
    });
  res.status(200).json({ Message: "Response Recorded" });
}
