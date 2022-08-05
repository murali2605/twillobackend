const http = require('http');
const express = require('express');
const { urlencoded } = require('body-parser');
var port = process.env.PORT || 3000;
const app = express();
app.use(urlencoded({ extended: false }));
app.post('/voice', function (req, res) {
 const { Digits, From } = req.body;
 console.log('Incoming call from ', From)
 let twiml = '';
 if (!Digits) {
  twiml = `
    <Response>
      <Gather>
        <Say>
          Press any series of numbers on your keypad. Go nuts. You can end
          your D T M F rampage by pressing the hash key.
        </Say>
      </Gather>
    </Response>
  `;
} else {
  // If Digits has been populated, repeat them back
  twiml = `
    <Response>
      <Say>You entered: ${Digits}</Say>
      <Say>Goodbye!</Say>
    </Response>
  `;
}
res.type('text/xml');
res.send(twiml)
});
app.listen(port, function () {
 console.log(`Example app listening on port !`);
});


