const router = require('express').Router();
const {
   sayHello,
   transportator,
} = require('../notifications/configurations.js');

router.post('/', async (req, res) => {
   try {
      const { email } = req.body;
      console.log('ESTE ES EL MAIL: ' + email);
      transportator(sayHello(email));
      return res.json({ status: email });
   } catch (err) {
      console.log(err.message);
      return err;
   }
});

module.exports = router;
