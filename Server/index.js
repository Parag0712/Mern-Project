import { app } from "./app.js";
import connectDB from "./db/db.js";
import dotenv from 'dotenv'

dotenv.config({
    path: "./.env"
})

// Connection DB
connectDB().then(() => {
    app.on("error", (error) => {
        console.log("ERROR :", error);
    });

    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
}).catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})