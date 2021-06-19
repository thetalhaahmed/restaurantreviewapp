import express from "express";
import cors from "cors";
import restaurants from "./api/restaurants.route.js";
import bodyParser from "body-parser";

//initialize
const app = express();

// apply cors
app.use(cors());
app.use(express.json()); //body parser

//api
app.use("/api/restaurants", restaurants);
app.use("*", (req, res) => {
  res.status(404).json({ error: "not found" });
}); // if not in a route file

export default app;
