const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const { loginTemplate } = require("../templates/login");

const transporter = nodemailer.createTransport({
  service: process.env.MAILER_SERVICE_PROVIDER || 'gmail',
  auth: {
    user: process.env.MAILER_EMAIL_ID,
    pass: process.env.MAILER_PASSWORD,
  },
});

router.post("/login", async (req, res) => {
  const { email } = req.body;

  const token = jwt.sign({ email }, process.env.JWTSECRET, {
    expiresIn: "2 days",
  });

  const html = loginTemplate({
    url: `${process.env.FRONT_URL}?accessToken=${token}`,
  });
  
  const mailOptions = {
    from: process.env.MAILER_EMAIL_ID,
    to: email,
    subject: "Bienvenido a Hackithon Asobal App, sigue los pasos para iniciar sesión",
    html: html,
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ status: "error", error: "something went wrong" });
    } else {
      return res.status(202).json();
    }
  });
});



module.exports = router;
