const fs = require("fs")
const mail = require("./mail")
const secret = require("./data")

let email = new mail("someone@example.com")
email.auth("gmail", secret.auth.username, secret.auth.password)
email.subject = "Example Email"
email.body = fs.readFileSync("./template/index.html")
email.send(info => console.log(info))