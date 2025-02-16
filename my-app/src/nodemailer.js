const nodemailer = require('nodemailer');

async function sendEmail() {
    //sender
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.io',
        port: 587,
        secure: false, // use SSL
        service: 'gmail',
        auth: {
            user: 'kingaref13@gmail.com',
            pass: 'phnydswxclmoygwp', 
        }
    });

    //receiver
    const info = await transporter.sendMail({
        from: 'kingaref13@gmail.com',
        to: 'rasiul.hasan@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'mail send kortesi vscode theke!!!'
    });

    console.log('Message sent: %s', info.messageId);
}

async function send() {
    await sendEmail();
}

// Call the send function to send the email
send().catch(console.error);