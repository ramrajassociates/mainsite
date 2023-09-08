const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    // host: process.env.SMTP_SERVER,
    // port: process.env.SMTP_SERVER,
    // secure: true,
    service:'hotmail',
    auth: {
      
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASS
    }
});
  
const Template = (name, email, service, message) => {
    return `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
        <h1 style="color: #333;">New User Recorded</h1>
        <table style="border-collapse: collapse; width: 100%; max-width: 500px; margin: 20px auto; background-color: #fff; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Name</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Email</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Service</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${service}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Message</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${message}</td>
          </tr>
        </table>
      </div>
    `;
  };
  
// async..await is not allowed in global scope, must use a wrapper
async function main(toemail,template) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Ramraj Associatets" <harshitlove28@outlook.com>', // sender address
      to: toemail, // list of receivers
      subject: "Contact Us Request", // Subject line
    //   text: "Hello world?", // plain text body
      html: template, // html body
    });
  
  }
export default function handler(req, res) {
    console.log(
        req.body.name,
        req.body.email,
        req.body.service,
        req.body.message
    )
    let temp = Template(req.body.name, req.body.email, req.body.service, req.body.message)
    main(req.body.email,temp).catch(console.error);

    res.status(200).json({ Message: 'Response Recorded' })
  }
  

  