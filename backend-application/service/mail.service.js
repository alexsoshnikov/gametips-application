const nodemailer = require("nodemailer")

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMPT_PORT,
            secure: false,
            requireTLS: true,
            auth: {
                user: process.env.SMPT_USER,
                pass: process.env.SMPT_PASSWORD
            }
        })
    }

    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMPT_USER,
            to,
            subject: `Activation account - ${process.env.API_URL}`,
            text: "",
            html:
                ` <div>
                       <h1>To activate, follow the link</h1>
                       <a href="${link}">${link}</a>
                  </div>
                `
        })
    }
}

module.exports = new MailService()