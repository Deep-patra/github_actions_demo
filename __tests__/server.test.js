const request = require("supertest");
const app = require("../server/app");

describe("Testing the Node app", () => {
  test('GET /hello', async () => {
    const response = await request(app)
      .get('/hello')
      .set("accept", "application/json")
      .send();

    expect(response.status).toEqual(200);
    expect(response.body).toStrictEqual({ message: "hello" });
  });
});