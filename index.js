const http = require('http');
const express = require('express');
const { urlencoded } = require('body-parser');

// Set up our express web application
// const PORT = 8767;
var port = process.env.PORT || 3000;
const app = express();
app.use(urlencoded({ extended: false }));
app.get('/', function (req, res) {
 res.send(JSON.stringify({ Hello: 'World'}));
});
app.listen(port, function () {
 console.log(`Example app listening on port !`);
});


// const http = require('http');
// const express = require('express');
// const { urlencoded } = require('body-parser');
// // const PORT = 8767;
// const app = express();
// app.use(urlencoded({ extended: false }));
// app.get(‘/’, function (req, res) {
//  res.send(JSON.stringify({ Hello: ‘World’}));
// }).listen(process.env.PORT || 5000)

// app.post('/voice', (request, response) => {
//   const { Digits, From } = request.body;
  
//   console.log('Incoming call from ', From);
//   let twiml = '';

 
//   if (!Digits) {
//     twiml = `
//       <Response>
//         <Gather>
//           <Say>
//             Press any series of numbers on your keypad. Go nuts. You can end
//             your D T M F rampage by pressing the hash key.
//           </Say>
//         </Gather>
//       </Response>
//     `;
//   } else {
    
//     twiml = `
//       <Response>
//         <Say>You entered: ${Digits}</Say>
//         <Say>Goodbye!</Say>
//       </Response>
//     `;
//   }

//   response.type('text/xml');
//   response.send(twiml);
// }).listen(process.env.PORT || 5000)

// Use a tunneling tool like ngrok to expose this server to the public Internet!
// Create and run an HTTP server which can handle incoming requests
// const server = http.createServer(app);
// server.listen(PORT, () =>
//   console.log(`Express server listening on localhost:${PORT}`)
// );
// var express = require(‘express’);
// var port = process.env.PORT || 3000;
// var app = express();
// app.get(‘/’, function (req, res) {
//  res.send(JSON.stringify({ Hello: ‘World’}));
// });
// app.listen(port, function () {
//  console.log(`Example app listening on port !`);
// });
