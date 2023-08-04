const nodemailer = require('nodemailer');

const HenryAskConfig = nodemailer.createTransport({
   service: 'gmail',
   auth: {
      user: 'henryaskhenry@gmail.com',
      pass: 'taozxjqwaallnnla',
   },
});

const sayHello = (to) => {
   return {
      from: 'henryaskhenry@gmail.com',
      to: `${to}`,
      subject: '¡Estamos revisando tu feedback!',
      text: `¡Hola! Te agradecemos por compartirnos tu feedback. En este momento, alguien de nuestro staff está revisando tus comentarios 🚀.`,
   };
};

const transportator = (MailOptions) => {
   HenryAskConfig.sendMail(MailOptions, (err, info) => {
      if (err) {
         console.log(err);
      } else {
         console.log('Email sent to: ', info.accepted);
      }
   });
};

module.exports = { transportator, sayHello };
