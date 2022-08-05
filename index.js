const http = require('http');
const express = require('express');
const { urlencoded } = require('body-parser');
var port = process.env.PORT || 3000;
const app = express();
app.use(urlencoded({ extended: false }));
app.post('/voice', function (req, res) {
 let twiml = '';
 <Response>
  <Dial>+918328272581</Dial>
</Response>
res.type('text/xml');
res.send(twiml)
});
app.listen(port, function () {
 console.log(`Example app listening on port !`);
});


