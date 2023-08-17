const nodemailer = require("nodemailer");
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "starkovsr@gmail.com", // generated ethereal user
    pass: "tdluanekifppmfaz", // generated ethereal password
  },
});

app.post('/sendMessage', async (req, res) => {
  const { message, contacts, name } = req.body

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻"', // sender address
    to: "starkovsr@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    // text: "Hello world?", // plain text body
    html: `<b>name: ${name}</b>`, // html body
  });
})

app.listen(3010, () => {
  console.log(`Example app listening on port 3010`)
})
