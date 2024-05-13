const API_KEY = process.env.MAILGUN_API_KEY 
const DOMAIN = " sandboxc927aa03b6e04b9e96e125150ff0945f.mailgun.org"
const express = require("express");
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const cors = require('cors');




const app = express();
const port = 3000;
app.use(express.json());
app.use(cors()); 



const mailgun = new Mailgun(formData)
const client = mailgun.client({username: 'api', key: "5cb81e3cb317264bc50b703b442a13ec-ed54d65c-e34da71a"})




const messageData = {
	from: 'Courtside Kicks Buys',
	to: 'ishansuhail28@gmail.com',
	subject: 'hiii',
	text: 'hiii'
};

client.messages.create(DOMAIN, messageData)
.then((res) => {
	console.log(res);
})
.catch((err) => {
	console.log(err)
})
app.listen(port, () =>{
	console.log(`server running on port ${port}`)
}); 