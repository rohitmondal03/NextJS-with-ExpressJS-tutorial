import express from "express"
import bodyParser from "body-parser";
import cors from "cors"

import { PORT, TASKS } from "./config"

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.get("/get-posts", (_, res) => {
  res.send(TASKS);
})


app.listen(PORT, () => console.log(`Server started at ${PORT}`))