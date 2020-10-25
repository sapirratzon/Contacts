const express = require('express');
var router = express.Router();
var contacts = [{id: '1', name: 'Sapir Ratzon', phone: '0546680530', country: 'Israel', city: 'Ramat Gan'},
    {id: '2', name: 'Yuval Lasri', phone: '0503953901', country: 'Israel', city: 'Ramat Gan'}];


/**
 * Route for getting all the contacts.
 */
router.post('/getAllContacts', function (request, response) {
    contacts.length > 0 ?
        response.json(contacts) :
        response.status(400).send('There are no contacts to present')
});

module.exports = router;
