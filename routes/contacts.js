const express = require('express');
var router = express.Router();
var contactItems = ['name', 'phone', 'country', 'city'];
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


/**
 * Route for adding a new contact.
 */
router.put('/addNewContact', function (request, response) {
    var userDetails = request.body;
    var missingDetails = [];
    contactItems.forEach(item => !userDetails.hasOwnProperty(item) ? missingDetails.push(item) : null );
    if (missingDetails.length > 0)
        response.status(400).send('Some details are missing: ' + missingDetails.join(","));
    else {
        const currentId = parseInt(contacts[contacts.length - 1].id) + 1;
        userDetails = {id: currentId, ...userDetails};
        contacts.push(userDetails);
        response.status(200).send('Contact is added');
    }
});

module.exports = router;
