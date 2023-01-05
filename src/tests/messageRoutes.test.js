import app from "../app";
import request from "supertest";
import Article from "../model/article";
import Message from "../model/messages";
import { imageUrl , tokenId} from "./resources";

const randomNo = Math.floor(Math.random() * 9000000)

test("this is supoosed to send a message", async () => {
    const response = await request(app).post("/api/messages").send({
      name: "Martha",
      email: "martha123@gmail.com",
      message: "do tests hdjdgvyg tycbkejncksdgy"
    });
    expect(response.statusCode).toBe(500);
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

test("this is supoosed to signup an admin user", async () => {
  const response = await request(app).post("/user/admin").set("Authorization", tokenId).send({
  name:"MAARTHA1",
  email:"marthacaj1@gmail.com",
  password:"this1233"
  });
  expect(response.statusCode).toBe(409);
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

test("this is supposed create a article", async () => {
  const response = await request(app).post("/api/articles").set("Authorization", tokenId).send({
    title:"hey" + randomNo,
    content:"our new article",
    image: imageUrl
  });
  expect(response.statusCode).toBe(200);
})

test("this is supposed to view the article", async () => {
  const response = await request(app).get("/api/articles").set("Authorization", tokenId).send();
  expect(response.statusCode).toBe(200);
})


test("this is supposed create an article", async () => {
  const articleLikes = await Article.findOne();
  const id = articleLikes._id;
  const response = await request(app).post("/api/articles/"+id+"/likes").set("Authorization", tokenId).send();
  expect(response.statusCode).toBe(200);
})


test("this is supposed edit an article", async () => {
  const articleEdit = await Article.findOne();
  const id = articleEdit._id;
  const response = await request(app).put("/api/articles/"+id).set("Authorization", tokenId).send({
    title:"hey" ,
    content:"our new article",
    image: imageUrl
  });
  expect(response.statusCode).toBe(200);
})

test("this is supposed comment on an article", async () => {
  const articleEdit = await Article.findOne();
  const id = articleEdit._id;
  const response = await request(app).post("/api/articles/"+id+"/comment").set("Authorization", tokenId).send({
   comment:"dope article"
  });
  expect(response.statusCode).toBe(200);
})

test("this is supposed comment on an article", async () => {
  const articleEdit = await Article.findOne();
  const id = articleEdit._id;
  const response = await request(app).get("/api/articles/"+id+"/comment").set("Authorization", tokenId).send();
  expect(response.statusCode).toBe(200);
})

test("this is to view one article", async () => {
  const articleEdit = await Article.findOne();
  const id = articleEdit._id;
  const response = await request(app).get("/api/articles/"+id).set("Authorization", tokenId).send();
  expect(response.statusCode).toBe(200);
})
