import express from "express";
import { JSON_LIMIT } from "./constants.js";

const app = express();

app.use(express.json({ limit: JSON_LIMIT }));
app.use(express.urlencoded({ extended: true, limit: JSON_LIMIT }));

export { app };
