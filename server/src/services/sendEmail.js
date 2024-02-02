import nodemailer from 'nodemailer';
import { emailTemplate } from './emailTemplate.js';

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "alielgohary35@gmail.com", 
      pass: "lmos dveg fefw sgnd",
    },
  }); 

  async function sendEmail(email ,url) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '<alielgohary35@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: emailTemplate(url), // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    //
    // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
    //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
    //       <https://github.com/forwardemail/preview-email>
    //
  }

  export default sendEmail;