import dotenv from "dotenv";
import connectToDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env.local" });
const port = process.env.PORT || 4000;

connectToDB()
  .then(() => {
    app.listen(port, () =>
      console.log(`Server is running at http://localhost:${port}`)
    );
  })
  .catch((err) => console.log(`MONGODB connection failed!! ${err}`));
