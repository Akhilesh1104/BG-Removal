import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";

//App Config
const port = process.env.PORT || 4000;
const app = express();
connectDB();

//Initialize Middlewares
app.use(express.json());
app.use(cors());

//API Routes
app.get("/", (req, res) => res.send("API Working"));

app.listen(port, () => console.log("Server Running on PORT " + port));
