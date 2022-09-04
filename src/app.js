import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") });
import express, { json } from "express";

console.log(process.env.MONGODB_URI);
import * as db from "./db/dbFunctions";
const app = express();

app.use(json());

const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  res.json({ status: true, message: "Our node.js app works" });
});
app
  .get("/events", async (req, res) => {
    const events = await db.getAllEvents();
    if (events) {
      res.status(200).json({ events: events });
    } else {
      res.json({ events: [] });
    }
  })
  .post("/events", async (req, res) => {
    const event = req.body;
    const created = await db.createEvent(event);
    if (created) {
      res.status(201).json({ event: event });
    }
  });

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
