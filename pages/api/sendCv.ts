import { NextApiRequest, NextApiResponse } from "next";

import Axios from "axios";
import nodemailer from "nodemailer";

import formidable from "formidable";

interface reqData {
  token: string;
  fullName: string;
  email: string;
  phoneNumber: number;
  subject: string;
  jobType: string;
  yourMessage: string;
  cv: string;
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();
    // form.uploadDir = "./public/assets/cvs";
    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
      const {
        token,
        fullName,
        phoneNumber,
        yourMessage,
        email,
        jobType,
        subject,
      }: reqData = fields;
      const { cv } = files;
      console.log(cv);

      try {
        const verifyToken = await Axios.post(
          `https://www.google.com/recaptcha/api/siteverify?secret=6Lfo238aAAAAAIWN1zLeyM5g1JDMDSHDI3f_27Df&response=${token}`
        );

        if (verifyToken.data.success) {
          let transporter = nodemailer.createTransport({
            host: "shrmarketing360.com",
            post: 465,
            secure: true,
            dkim: {
              domainName: "default._domainkey.hashigoc.com.",
              keySelector: "2017",
              privateKey: `-----BEGIN RSA PRIVATE KEY-----
                MIIEowIBAAKCAQEAzvrypU1kD/KhYXne8YwKD+mzZYv/VwSBYROdMq7FLTPRPSha
                IlIBQp3+jFvyIuh03cxtCWDDotn/z1q1xk9Z1DHFHEqDezyhGwQ1oU3/wUCxThvM
                YqBdUPe09G55bB2FziwTt5OEN0x2LVJ+jimseY3uvIrLfeCh8+XrUVjpej7Dzwl1
                78yo2dQkjpR6usifGfFe3tu2sbds+bKcDxzXFwRdX5XTth3L4d06gSVvXUsjP5AT
                WeJCKYgnKrRMuWKgr4RcwKAinFTjB6lwQWyF+6n70LbOTu6kev4VPHb8/J/NNGCU
                69eyq8xVGD0K0aiIvzuJqmjywolVpnxWoKiMhQIDAQABAoIBAGXS/OYngY967LuY
                if5Ix3Z2oSPW0KINfFy2moIhiq0nLcupe1YhA6+zLFP+s8tKkpu/AvE3ImeOWZO3
                628JAIcsiOzXF4HcHOG+m2ekiKqY2eE0OcNXYzD++424f5GZoIcCFh0cvFG8EvNO
                /yWPCOOv2H/2xA9EIEhtluupEwtozIkRfL9G+FXrHbZB336ogxBGtXCOzPJJPBhh
                NfmyXlGsRLoSbI0e6ZYZ5zErzgkNOLzCu1SFzSiEi/B3moqatNp/uPsDnxou0FJN
                em4tzf4PZz2Y/T4SNLOUuWu7pju9UBAKNQyUqPcwPmH+QQ/VFEVVBKscjtkVxrDE
                Qx2AEO0CgYEA8ZqcthLkbM5GlUWfvYJLtPnbJZ2ca4//YeHsP3QqeXBsElAPMxeV
                5Zhmlh3SEDqLX52ksOvULSWD0pS7/CyrKu7Qu6ICu76f5pH9Yh5c5miD1AdUMSey
                X8kDiKOQUOAfguzbjvye0G4BwmPMJ6pVRCHGP8yp2TxsQyGfVXV5QoMCgYEA21Ax
                BlWFY9uxnHRukU6gC1EqwFbh448eGH+9zKRooo40tDvc3nH9l27HS967d0yFOw+q
                Sj31zbG8Jn4rPC5wz/e5Ak9Km8Hcgiv09NGBX4/d2X0DuMjg4unRmgEv5aioPy8i
                FGMmxI/mNVeTRJhWRsucvEaIEQXTpKVpGjbGplcCgYEA8Rs0rNbpslOgSLM0mLCA
                0NhPhJhnU0heudX2J9TL1mkE0LmokXpGEtwl9EVKLvvdvsvZYN3X3j4D8ZCQkTYa
                kzvEfptNUwMHG9gxH0vhteYzONMfh/Zvofs+VYu1J6CikcvByE3+R06g3tctE6B+
                ewGhkGW0UqBkAhJ5qZUUL/UCgYBdZeta7TTfcAJVxOgJjdhuuWRhgR62EI8ak9w6
                uJGvGKytTQkk2prK0OyjDPn9NmNO4b792yFBNj4Qjo7PFGAK0U7DAw2dA5RrA1lQ
                oaBdGCG8q5bYLQRI3pba5UKGparxLZtv30H1V+sMMH2RKucjQzc+nzL3POoDJkZ6
                WXWEBQKBgF5m1HYbMaukpyWoQrqXsObyrDIRFOVzngBRLO7yi3OfIZINqzbolW6M
                wLcAbhELDgnt4ed7F8p/y89VjTWLVWDqzafgMSZVAmRjYiYydjAK52NBHanJRTrw
                h0bZc+VlmuI8iXpM7hIg7b/qdmk2ClImT+KHcy+5Qw6H2gGaxZxl
                -----END RSA PRIVATE KEY-----
                `,
            },
            auth: {
              user: "info@hashigoc.com",
              pass: "game1992",
            },
          });
          try {
            let info = await transporter.sendMail({
              from: '"Hashi Goc Job Application" <info@hashigoc.com>', // sender address
              to: "irtisam.d@gmail.com", // list of receivers
              subject: "Job Application From Hashi Goc", // Subject line
              text: `<h2>Job Application</h2>
              <br></br>
              <h4>Subject: </h4> <p>${subject}</p>
              <br></br>
              <h4>Full Name: </h4> <p>${fullName}</p>
              <br></br>
              <h4>Email: </h4> <p>${email}</p>
              <br></br>
              <h4>Phone Number: </h4> <p>${phoneNumber}</p>
              <br></br>
              <h4>Job Title: </h4> <p>${jobType}</p>
              <br></br>
              <h4>Your Message: </h4> <p>${yourMessage}</p>
              <br></br>`, // plain text body
              attachments: [
                {
                  filename: cv.name,
                  path: cv.path,
                },
              ],
              html: `<h2>Job Application</h2>
              <hr></hr>
              <h4>Subject: </h4> <p>${subject}</p>
              <hr></hr>
              <h4>Full Name: </h4> <p>${fullName}</p>
              <hr></hr>
              <h4>Email: </h4> <p>${email}</p>
              <hr></hr>
              <h4>Phone Number: </h4> <p>${phoneNumber}</p>
              <hr></hr>
              <h4>Job Title: </h4> <p>${jobType}</p>
              <hr></hr>
              <h4>Your Message: </h4> <p>${yourMessage}</p>
              <hr></hr>`, // html body
            });
            if (info.messageId) {
              console.log(info);
              return res.status(200).send("Thank you for reaching out to us!");
            } else {
              return res
                .status(401)
                .send("Something went wrong please try again later!");
            }
          } catch (error) {
            console.log(error);
            return res
              .status(401)
              .send("Something went wrong please try again later!");
          }
        } else {
          return res
            .status(401)
            .send("Invalid Captcha please try again later!");
        }
      } catch (error) {
        console.log(error);
      }
    });
  } else {
    return res.status(404).send("Requested Method is not supported.");
  }
};
