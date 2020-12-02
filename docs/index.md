# Mail Rack
Easy mailing component for Node.js built on Nodemailer.
[https://github.com/sameeramurthy/mailrack](https://github.com/sameeramurthy/mailrack)

#### Documentation
```js
// Import MailRack
const mail = require("./mailrack")

// Create a new mail
let email = new mail("someone@example.com")

// Authenticate with your service
email.auth("gmail", secret.auth.username, secret.auth.password)

// Set the subject
email.subject = "Example Email"

// Set the body
email.body = "<h1>Hello World</h1>"

// Send the mail and recieve information
email.send(info => console.log(info))
```
