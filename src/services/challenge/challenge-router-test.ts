import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import express from "express";
import { challegeRouter } from "./challengeRouter"; // Adjust this import based on your file structure

const app = express();
app.use(express.json());
app.use(challegeRouter);

const TESTER_USER = {
  User: "john_doe",
  Data: { Role: "admin", Access_level: 5 }
};

describe("Challenge Router", () => {
  describe("POST /encode", () => {
    it("works for a valid request", async () => {
      const response = await request(app)
        .post("/encode")
        .send(TESTER_USER)
        .expect(200);

      expect(response.body).toHaveProperty("Token");
      expect(response.body).toHaveProperty("Context");
      expect(typeof response.body.Token).toBe("string");
      expect(response.body.Context).toHaveProperty("Additional_info");
    });

    it("gives a bad request error for invalid input", async () => {
      const response = await request(app)
        .post("/encode")
        .send({ User: "john_doe" }) // Missing Data
        .expect(400);

      expect(response.body).toHaveProperty("error", "Invalid request body");
    });
  });

  describe("POST /decode", () => {
    it("works for a valid token", async () => {
      // First, encode some data
      const encodeResponse = await request(app)
        .post("/encode")
        .send(TESTER_USER)
        .expect(200);

      const token = encodeResponse.body.Token;

      // Now, decode the token
      const decodeResponse = await request(app)
        .post("/decode")
        .send({ Token: token })
        .expect(200);

      expect(decodeResponse.body).toMatchObject(TESTER_USER);
    });

    it("gives a bad request error for missing token", async () => {
      const response = await request(app)
        .post("/decode")
        .send({})
        .expect(400);

      expect(response.body).toHaveProperty("error", "Invalid request body");
    });

    it("gives a bad request error for invalid token", async () => {
      const response = await request(app)
        .post("/decode")
        .send({ Token: "invalidtoken123" })
        .expect(400);

      expect(response.body).toHaveProperty("error", "Invalid token");
    });
  });
});