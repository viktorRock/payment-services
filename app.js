// [START app]
'use strict';

// [START setup]
const express = require('express');
const bodyParser = require('body-parser');
const Buffer = require('safe-buffer').Buffer;
const PORT = (process.env.PORT || '8080');
const SUCESS_STATUS = 200;
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.set('case sensitive routing', true);
app.use(bodyParser.json());
// [END setup]

app.post('/echo', (req, res) => {
  console.log('body');
  console.log(req.body);
  // res.status(200).json({ message: req.body.message }).end();
  res.status(SUCESS_STATUS).json({ message: "EchoReply - " + req.body.message }).end();
});

function authInfoHandler (req, res) {
  let authUser = { id: 'anonymous' };
  const encodedInfo = req.get('X-Endpoint-API-UserInfo');
  if (encodedInfo) {
    authUser = JSON.parse(Buffer.from(encodedInfo, 'base64'));
  }
  res.status(SUCESS_STATUS).json(authUser).end();
}

app.get('/auth/info/googlejwt', authInfoHandler);
app.get('/auth/info/googleidtoken', authInfoHandler);

if (module === require.main) {
  // [START listen]
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
  });
  // [END listen]
}
// [END app]

module.exports = app;
