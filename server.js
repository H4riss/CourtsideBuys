const mailgun = require("mailgun-js");
const DOMAIN = "sandboxc927aa03b6e04b9e96e125150ff0945f.mailgun.org";
const mg = mailgun({apiKey: "pubkey-54d33c71c13121876983da0b10fcdcf2", domain: DOMAIN});
const data = {
	from: "harismukangad@gmail.com",
	to: "ishansuhail28@gmail.com",
	subject: "Hello",
	text: "Testing some Mailgun awesomness!"
};
mg.messages().send(data, function (error, body) {
	if (error){

        console.log (error)
    }
else {
    console.log(body)
}

});