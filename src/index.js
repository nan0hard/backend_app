import dotenv from "dotenv";
import connectToDB from "./db/index.js";

dotenv.config({ path: "./.env.local" });
const port = process.env.PORT || 4000;

connectToDB();
