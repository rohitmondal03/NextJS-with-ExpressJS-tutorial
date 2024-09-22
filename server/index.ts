import express from "express"
import bodyParser from "body-parser";
import cors from "cors"
import { config } from "dotenv";
import mongoose from "mongoose";
import ShortUniqueId from "short-unique-id"
import jwt from "jsonwebtoken"

import { PORT, WEB_TOKEN_SECRET } from "./config"
import { addDataMiddleware } from "./middlewares/addData.middleware";
import { DemoModel } from "./db/models/demo.model";

config();
const app = express();

// middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// generate tokens for users
const generateToken = (name: string, email: string) => {
  const payload = {
    name,
    email,
  }

  return jwt.sign(payload, WEB_TOKEN_SECRET, {
    expiresIn: "10 days",
  })
}

// generate random ID/string
const generateRandomUid = (length: number) => {
  const randomUid = new ShortUniqueId({ length });

  return randomUid.randomUUID();
}

app.get("/get-users", async (_, res) => {
  const todos = await DemoModel.find();
  res.json(todos);
})

app.post("/add-user", addDataMiddleware, async (req, res) => {
  const { name, email } = req.body;

  await DemoModel.create({
    id: generateRandomUid(10),
    created_at: new Date(),
    auth_token: generateToken(name, email),
    name,
    email,
  })
    .then(() => res.redirect("/"))
    .catch(err => res.send({
      message: `Error adding data: ${err}`
    }))
})

mongoose.connect(process.env.MONGO_DB_URL ?? "", {
  dbName: "project-management-demo",
  retryWrites: true,
})


app.listen(PORT, () => console.log(`Server started at ${PORT}`))