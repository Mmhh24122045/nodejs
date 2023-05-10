

console.log("hello world")

//question 2

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Node!!!!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//question 3

const fs = require('fs');

fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

//question 4

var pas = require('generate-password');

var password = pas.generate({
	length: 20,
	numbers: true
});


console.log(password)

//question 5

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'https://www.w3schools.com/nodejs/nodejs_email.asp',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'https://www.w3schools.com/nodejs/nodejs_email.asp',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});