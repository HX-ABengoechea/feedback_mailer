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
      subject: '¡Tu material teórico a sido publicado correctamente :D!',
      text: `¡Hola!, el material que has preparado se ha guardado en HenryAsk correctamente. Recurre a la página para editarlo o eliminarlo. Puedes ingrsar a la plataforma en el siguiente link: https://henryask.vercel.app/ 🚀.`,
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
