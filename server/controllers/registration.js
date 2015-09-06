

var Registrar = module.exports;

var nodemailer = require('nodemailer');


Registrar.registerEmailJournalist= function(req, res){

		var content = req.body.content;

		console.log('CONTENT:::::::'+content);

		var transporter = nodemailer.createTransport('SMTP',{
		    service: 'Gmail',
		    auth: {
		        user: 'cititalk.marketing@gmail.com',
		        pass: 'deedee1922'
		    }
		});
		 
		// NB! No need to recreate the transporter object. You can use 
		// the same transporter object for all e-mails 
		 
		// setup e-mail data with unicode symbols 
		var mailOptions = {
		    from: 'cititalk.marketing@gmail.com', // sender address 
		    to: 'mayukh@arnium.com', // list of receivers 
		    subject: 'Journalist ✔', // Subject line 
		    text: content, // plaintext body 
		    html: '<b>'+content+'</b>' // html body 
		};
		 
		// send mail with defined transport object 
		transporter.sendMail(mailOptions, function(error, info){
		    if(error){
		        return console.log(error);
		    }
		    console.log('Message sent: ' + info.response);

		    return res.json({'status': info.response});
		 
		});    

};


Registrar.registerEmailPolitician= function(req, res){

		var content = req.body.content;

		var transporter = nodemailer.createTransport('SMTP',{
		    service: 'Gmail',
		    auth: {
		        user: 'cititalk.marketing@gmail.com',
		        pass: 'deedee1922'
		    }
		});
		 
		// NB! No need to recreate the transporter object. You can use 
		// the same transporter object for all e-mails 
		 
		// setup e-mail data with unicode symbols 
		var mailOptions = {
		    from: 'cititalk.marketing@gmail.com', // sender address 
		    to: 'mayukh@arnium.com', // list of receivers 
		    subject: 'Politician ✔', // Subject line 
		    text: content, // plaintext body 
		    html: '<b>' + content + '</b>' // html body 
		};
		 
		// send mail with defined transport object 
		transporter.sendMail(mailOptions, function(error, info){
		    if(error){
		        return console.log(error);
		    }
		    console.log('Message sent: ' + info.response);

		    return res.json({'status': info.response});


		    
		 
		});


};





