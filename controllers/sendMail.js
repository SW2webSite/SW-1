//jshint esversion:6
const nodemailer = require("nodemailer");

module.exports = function (req, res) {
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: "moazyusuf1998@gmail.com",
      pass: "yourpassword"
    }
  });
  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: process.env.GMAIL_USER,
    subject: req.body.subject,
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  };
  smtpTrans.sendMail(mailOpts, function(error, info){
  if (error) {
    console.log(error);
    req.flash('failure',"Something went wrong while sending Email, Please try again !");
    return res.redirect('/contact-us');
  } else {
    req.flash('success',"You've Successfully Sent an Email !");
    return res.redirect('/contact-us');
  }
});
};
