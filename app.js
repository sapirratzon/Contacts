const express = require('express');
const app = express();
var contactsRouter = require('./routes/contacts');

app.use(express.json());
app.use('/contacts', contactsRouter);

/**
 * Basic HTTP server that response
 */
app.get('/whos-there', function (request, response) {
  response.status(200).send("Hi Trax! This is SAPIR RATZON");
});

var contacts = [{id: '1', name: 'Sapir Ratzon', phone: '0546680530', country: 'Israel', city: 'Ramat Gan'},
  {id: '2', name: 'Yuval Lasri', phone: '0503953901', country: 'Israel', city: 'Ramat Gan'}];

app.post('/getAllContacts', function (request, response) {
  contacts.length > 0 ?
      response.json(contacts) :
      response.status(400).send('There are no contacts to present')
});


let port = process.env.PORT || 3000;
app.listen(port);

module.exports = app;
