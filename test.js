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
    it("Success Get User Reqrest", async function () {
        const response = await request
            .get("/api/users/2")
            .send();

        expect(response.body)
            .to.include.keys("data", "support")
            .and.to.have.property("data")
            .that.include.keys(['id', 'email', 'avatar', 'first_name', 'last_name']);
    })
})