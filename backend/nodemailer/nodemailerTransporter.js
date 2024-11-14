const express = require("express");
const app = express();
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: "grupo2pi1a5@gmail.com",
    pass: "djkt axge nvgo rjcr",
  },
});


module.exports = transporter;