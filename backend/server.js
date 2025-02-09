const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Set up the email transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // or any other service like Outlook, SendGrid
  auth: {
    user: "dayanihewawasam@gmail.com", // your email
    pass: "20020101", // your email password or an app-specific password
  },
});

// POST route to handle the form submission
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "dayanihewawasam@gmail.com", // Your email to receive the message
    subject: `Message from ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      return res.status(200).send("Email sent successfully");
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
