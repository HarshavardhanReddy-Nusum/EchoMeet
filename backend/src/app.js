import express from "express";
import {createServer} from "node:http";
import {connectToSocket} from "./controllers/socketManager.js";


import mongoose from "mongoose";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8080));
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb",extended: true}));

app.use("/api/v1/users", userRoutes);

app.get("/home", (req,res) => {
    res.send("This is home page");
});

const start = async () => {
    const connectionDb = await mongoose.connect("mongodb+srv://nhvreddy9866:oEGcEmYCVAgPOmiK@cluster0.tdgeffp.mongodb.net/");
    console.log(`Mongo connected to : ${connectionDb.connection.host}`);
    server.listen(app.get("port"), () => {
        console.log("Listening on port 8080");
    })
}



start();