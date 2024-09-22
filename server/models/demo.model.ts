import { Model, Schema, model } from "mongoose"

const DemoSchema = new Schema({
  id: String,
  name: String,
  email: String,
  created_at: Date,
  auth_token: String,
})

export const DemoModel = model("DemoSchema", DemoSchema);