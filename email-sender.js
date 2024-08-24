const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your.email@gmail.com', // Replace with your email
        pass: 'yourpassword' // Replace with your email password or app password
    }
});

let mailOptions = {
    from: 'your.email@gmail.com', // Replace with your email
    to: 'your.email@gmail.com', // Replace with your email
    subject: 'Test Email',
    text: 'Hello, this is a test email from Node.js!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
