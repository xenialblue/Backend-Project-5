//Import Express
import express from "express";

import router from "./routes/routes.js";

import ejs from "ejs"
// Init Express
const app = express();

app.use(router);


app.listen(3000, () => console.log('Runing brow'));