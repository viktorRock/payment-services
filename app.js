// [START app]
'use strict';

// [START setup]
const express = require('express');
const bodyParser = require('body-parser');
const pagSeguro = require('./lib/pagSeg');
const Buffer = require('safe-buffer').Buffer;
const PORT = (process.env.PORT || '8080');
const SUCESS_STATUS = 200;

const app = express();

app.set('case sensitive routing', true);
app.use(bodyParser.json());
// [END setup]

app.post('/uolcheckout', (req, res) => {
  return pagSeguro.getPagSeg(req.body).then((pagSeg) => {
    console.log(pagSeg);
    res.status(SUCESS_STATUS).json(pagSeg).end();
  });
});
app.post('/echo', (req, res) => {
  console.log(req.body);
  // res.status(200).json({ message: req.body.message }).end();
  res.status(SUCESS_STATUS).json({ message: " Reply3 - " + req.body.message }).end();
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
