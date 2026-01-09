import connectDB from "./db/index.js";
import { app } from "./app.js";
import { configDotenv } from "dotenv";

configDotenv({ path: "./.env" });
connectDB()
    .then(() => {
        app.on("error", (error) => {
            throw error;
        });
        app.listen(process.env.PORT || 8000, () => {
            console.log(
                `Server is running at port: ${process.env.PORT || 8000}`,
            );
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed !!! ", error);
    });
