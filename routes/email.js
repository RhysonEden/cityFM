const apiRouter = require("express");
const emailRouter = apiRouter.Router();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

// const app = apiRouter();

// app.engine("handlebars", exphbs());
// app.set("view engine", "handlebars");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

emailRouter.post("/email", (req, res) => {
  let messages = req.body;
  let ticket = req.body.ticket
  async function main() {
    // create reusable transporter object using the default SMTP transport
    // let transporter = nodemailer.createTransport({
    //   host: "mail.att.net",
    //   port: 587,
    //   secure: false, // true for 465, false for other ports
    //   auth: {
    //     user: "thegales32244@att.net", // generated ethereal user
    //     pass: "kaelyn09", // generated ethereal password
    //   },
    // });

//    let transporter = nodemailer.createTransport({
//         host: "mail.guardianfueltech.com",
//         port: 465,
//         secure: true,
//         auth: {
//           user: "jgale",
//           pass: "JG@gft2020",
//         },
//       });

let transporter = nodemailer.createTransport({
    host: 'mail.guardianfueltech.com', // Office 365 server
    port: 587,     // secure SMTP
    secure: false, // false for TLS - as a boolean not string - but the default is false so just remove this completely
    auth: {
        user: "jgale",
        pass: "JG@gft2020",
    },
    tls: {
        ciphers: 'SSLv3'
    }
});

    // const transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //       user: 'guardianfueling@gmail.com',
    //       pass: 'GCGFT2020' 
    //     }
    //   });

    let info = await transporter.sendMail({
      from: "CFM Calculator",
      to: messages.email, 
      subject: messages.ticket,
      html: `Ticket Number = ${ticket} <br> Base Trip Fee = $${req.body.baseFee} <br> Misc Fee = $${req.body.miscPrice} <br> Priority 1 Fee = ${req.body.P1} <br> Labor Total = $${req.body.laborTotal} <br> Travel Total = $${req.body.travelTotal} <br> Parts Total = $${req.body.part} <br> Consumables Total = $${req.body.consumables} <br> Laptop Fee = $${req.body.laptop} <br> Enviromental Fee = $${req.body.enviroment} <br> Final Total = $${req.body.finalRate} `,
    });

    console.log("Message sent: %s", info.messageId);

  }

  main().catch(console.error);
  console.log(req.body);
});

emailRouter.get("/", (req, res) => {
  res.send({
    message: "Emailing is under construction!",
  });
});

module.exports = emailRouter;
