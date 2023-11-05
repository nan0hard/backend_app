import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectToDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `Successfully connected with DB!!: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error(`Failed to Connect with DB: ` + error);
    process.exit(1);
  }
};

export default connectToDB;
