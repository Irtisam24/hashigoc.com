import { NextApiRequest, NextApiResponse } from "next";

import nodemailer from "nodemailer";

interface reqData {
  yourName: string;
  telePhone: number;
  yourMessage: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { yourName, telePhone, yourMessage }: reqData = req.body;
    try {
      let transporter = nodemailer.createTransport({
        host: "shrmarketing360.com",
        post: 465,
        secure: true,
        auth: {
          user: "irtasam@shrmarketing360.com",
          pass: "game1992",
        },
      });
      let info = await transporter.sendMail({
        from: '"Hashi Goc Contact Us Request" <irtasam@shrmarketing360.com>', // sender address
        to: "info@hashigoc.com", // list of receivers
        subject: "Contact Us Request From Hashi Goc", // Subject line
        text: `<h2>Contact Us</h2>
        <hr></hr>
        <h4>Full Name: </h4> <p>${yourName}</p>
        <hr></hr>
        <h4>Phone Number: </h4> <p>${telePhone}</p>
        <hr></hr>
        <h4>Your Message: </h4> <p>${yourMessage}</p>
        <hr></hr>`, // plain text body
        html: `<h2>Contact Us</h2>
        <hr></hr>
        <h4>Full Name: </h4> <p>${yourName}</p>
        <hr></hr>
        <h4>Phone Number: </h4> <p>${telePhone}</p>
        <hr></hr>
        <h4>Your Message: </h4> <p>${yourMessage}</p>
        <hr></hr>`, // html body
      });
      if (info.messageId) {
        return res.status(200).send("Thank you for reaching out to us!");
      } else {
        return res
          .status(401)
          .send("Something went wrong please try again later!");
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    return res.status(404).send("Requested Method is not supported.");
  }
};
