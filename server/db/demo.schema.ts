import { Model, Schema, model } from "mongoose"

export const DemoSchema = new Schema({
  id: String,
  name: String,
  email: String,
  created_at: Date,
  auth_token: String,
})