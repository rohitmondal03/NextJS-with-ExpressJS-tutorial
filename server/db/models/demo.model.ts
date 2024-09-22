import { model } from "mongoose";
import { DemoSchema } from "../demo.schema";

export const DemoModel = model("DemoSchema", DemoSchema);