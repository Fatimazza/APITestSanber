const request = require("supertest")("https://reqres.in");
const expect = require("chai").expect;

describe("Create User Reqres", function () {
    it("Success Create User", async function () {
        const response = await request
            .post("/api/users")
            .send({ name: "sanbercode", job: "QA bootcamp" });

        expect(response.body.name).to.eql('sanbercode');
        expect(response.body.job).to.eql('QA bootcamp');
    })
})