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

