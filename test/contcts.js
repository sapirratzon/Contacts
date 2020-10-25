var app = require("../app");
var request = require("supertest")(app);

var expect = require("expectacle");

describe("the whose-there", function () {
    it("should say Hi with my name", function(done) {
        request.get("/whos-there")
            .expect(200)
            .expect("Content-Type", "text/html; charset=utf-8")
            .end(function (error, result) {
                expect(error).toBeFalsy();
                expect(result.text).toBe("Hi Trax! This is SAPIR RATZON");
                done();
            });
    });
});

/**
 * Test the route for getting all the contacts.
 */
describe("the getAllContacts", function () {
    it("should return all the contacts", function(done) {
        request.post("/contacts/getAllContacts")
            .expect('Content-Type', /json/)
            .expect(200);
        done()
    });
});


/**
 * Test the route for adding a new contact.
 */
describe("Add new contact", function () {
    it("should add a new contact", function(done) {
        const newContact = {
            name: 'Israel Israeli',
            phone: '0546680530',
            country: 'Israel',
            city: 'Ramat Gan'};
        request.put("contacts/addNewContact")
            .send(JSON.stringify(newContact))
            .expect(200)
            .expect("Content-Type", "text/html; charset=utf-8");
        done()
    });
});


/**
 * Test the route for finding a contact by name
 */
describe("the getContactByName", function () {
    it("should return contact by name", function(done) {
        const contactName = { name: 'Sapir Ratzon' };
        request.post("/contacts/getAllContacts")
            .send(JSON.stringify(contactName))
            .expect('Content-Type', /json/)
            .expect(200);
        done()
    });
});



