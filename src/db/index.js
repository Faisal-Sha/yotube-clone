import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        console.log("Connecting....");
        const db = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("\n database connection established: ", db.connection.host);
    } catch (error) {
        console.error("Error while connecting to database: ", error);
        process.exit(1);
    }
}

export default connectDB;