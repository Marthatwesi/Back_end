import app from "../app";
import request from "supertest";
import Article from "../model/article";
import Message from "../model/messages";


const tokenId = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2EwODlmNmI3OGM3MDJlMGU4NDAzMmUiLCJpYXQiOjE2NzE0NjU0Nzh9.CVTD7qcr78ZnPOOfZLcFLKe0OKYSSb92ATgeGMIww9Q";

test("this is supoosed to send a message", async () => {
    const response = await request(app).post("/api/messages").send({
      name: "Martha",
      email: "martha123@gmail.com",
      message: "do tests hdjdgvyg tycbkejncksdgy"
    });
    expect(response.statusCode).toBe(200);
  });

  test("validationError 400 should  be returned ", async () => {
    const response = await request(app).post("/api/messages").send({
        name: "Martha",
        email: "martha123gmail.com",
        message: "do tests"
    });
    expect(response.statusCode).toBe(400);
  });

  test("validationError 404  should  be returned ", async () => {
    const response = await request(app).post("/api/message").send({
        name: "Martha",
        email: "martha123gmail.com",
        message: "do tests"
    });
    expect(response.statusCode).toBe(404);
  });

  test("this is supoosed to get messages", async () => {
    const response = await request(app).get("/api/messages").set("Authorization",tokenId).send();
    expect(response.statusCode).toBe(200);
  });



test("this is supoosed to signup a new user", async () => {
  const response = await request(app).post("/user/signup").set("Authorization", tokenId).send({
    name: "Martha",
    email: "martha123gmail.com",
    password: "marvoe19"
  });
  expect(response.statusCode).toBe(400);
});

test("this is supoosed to login a new user", async () => {
  const response = await request(app).post("/user/login").set("Authorization", tokenId).send({
    email: "martha123gmail.com",
    password: "marvoe19"
  });
  expect(response.statusCode).toBe(400);
});


test("this is supposed to check if the email already exists", async () => {
  const response = await request(app).post("/user/signup").set("Authorization", tokenId).send({
    name:"Twesigye Martha",
   email:"marthacj004@gmail.com",
  password:"marvoe19"
  });
  expect(response.statusCode).toBe(409);
});
  
test("this is supoosed to login a new user", async () => {
  const response = await request(app).post("/user/login").set("Authorization", tokenId).send({
    email:"marthacj004@gmail.com",
    password:"marvoe19"
  });
  expect(response.statusCode).toBe(200);
});