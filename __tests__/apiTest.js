import 'babel-polyfill';
process.env.NODE_ENV = "test";
//const db = require("../db");
const request = require("supertest");
const app = require("../client/components/app");

describe("GET /api/nearbyPlaces", () => {
  test("It should respond with an array of places", async () => {
    const response = await request(app).get("/api/nearbyPlaces");
    expect(response.body.length).toBe(100);
    console.log(response.body)
    // expect(response.body[0]).toHaveProperty("id");
    // expect(response.body[0]).toHaveProperty("name");
    // expect(response.statusCode).toBe(200);
  });
});