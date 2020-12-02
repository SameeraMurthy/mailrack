# Mail Rack
Easy mailing component for Node.js built on Nodemailer.


#### Documentation
```js
const mail = require("./mailrack")
let email = new mail("someone@example.com")
email.auth("gmail", secret.auth.username, secret.auth.password)
email.subject = "Example Email"
email.body = "<h1>Hello World</h1>"
email.send(info => console.log(info))
```
