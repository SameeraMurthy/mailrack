const nodemailer = require("nodemailer")

module.exports = class {
    constructor (to) {
        this.to = to
    }
    auth (service, email, password) {
        this.service = service
        this.email = email
        this.transporter = nodemailer.createTransport({
            service: service,
            auth: {
              user: email,
              pass: password
            }
        }); 
    }
    set subject (content) {
        this.title = content
    }
    set body (content) {
        this.content = content
    }
    send (result) {
        let options = {
            from: this.email,
            to: this.to,
            subject: this.title,
            html: this.content
        }
        this.transporter.sendMail(options, function(error, info){
            if (error) {
                throw error
            } else {
                console.log("\n\b\x1b[36m", "NodeMailBox => EMAIL SENT!", "\x1b[0m\n")
                return result(info)
            }
        });
    }
}