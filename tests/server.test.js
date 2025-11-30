const request = require("supertest");
const app = require("../server");

describe("Notes App", () => {
  it("GET / should return 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });

  it("POST /notes should add a note and redirect", async () => {
    const res = await request(app)
      .post("/notes")
      .send("title=Test+Note&content=Test+Content");
    expect(res.statusCode).toBe(302); // redirect
    expect(res.headers.location).toBe("/");
  });
});
