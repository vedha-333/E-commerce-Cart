const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "vedantpandilwad48@gmail.com",
    pass: "jiie whfr jtiw xbei",
  },
  b,
});

function sendMail(to, sub, msg) {
  transporter.sendMail({
    to: to,
    subject: sub,
    html: msg,
  });
}
console.log("mail sent");

sendMail(
  "pandilwad.vedant.s70kalvium.community",
  "This is  my subject",
  "This is my working"
);
module.exports = transporter;
