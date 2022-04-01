const apiRouter = require("express");
const emailRouter = apiRouter.Router();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

emailRouter.post("/email", (req, res) => {
  let messages = req.body;
  let ticket = req.body.ticket;
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

    // let transporter = nodemailer.createTransport({
    //     host: 'mail.guardianfueltech.com', // Office 365 server
    //     port: 587,     // secure SMTP
    //     secure: false, // false for TLS - as a boolean not string - but the default is false so just remove this completely
    //     auth: {
    //         user: "jgale",
    //         pass: "JG@gft2020",
    //     },
    //     tls: {
    //         ciphers: 'SSLv3'
    //     }
    // });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "guardianfueling@gmail.com",
        pass: "JG@gft2020",
      },
    });

    let info = await transporter.sendMail({
      from: "CFM App <guardianfueling@gmail.com>",
      to: messages.email,
      subject: messages.ticket,
      html: `GFT Ticket Number = ${ticket} <br> 
      CFM Ticket Number = ${messages.cfm} <br> 
      Confined Space = $${messages.confinedSpace} <br> 
      Calibration Can = $${messages.calibrationCan} <br> 
      Blower Charge = $${messages.blower} <br> 
      Heavy Truck Fee = $${messages.truckFee} <br> 
      Calibration Trailer = $${messages.calibrationTrailer} <br> 
      Hand Pump = $${messages.handPump} <br> 
      Water Trailer = $${messages.waterTrailer} <br> 
      Priority 1 = $${messages.P1} <br> 
      Misc Fees = $${messages.miscPrice} <br> 
      Laptop Fee = $${messages.laptop} <br> 
      Consumable Fee = $${messages.consumables} <br> 
      Enviroment Fee = $${messages.enviroment} <br> 
      Disposal Fee = $${messages.disposalTotal} <br> 
      Stand By Time = $${messages.standByTimeTotal} <br> 
      Project Management = $${messages.projectManagementTotal} <br> 
      Travel Total = $${messages.travelRate} <br> 
      Labor Total = $${messages.laborTotal} <br> 
      NTE = $${messages.nte} <br> 
      Parts Total = $${messages.part} <br> 
      Trip Total = $${messages.finalRate} <br> 
      UpLift Amount = $${messages.upliftAmount} <br> 
`,
    });
  }

  main().catch(console.error);
});

emailRouter.get("/", (req, res) => {
  res.send({
    message: "Emailing is under construction!",
  });
});

module.exports = emailRouter;
