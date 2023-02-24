import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import router from "./routes/routes.js";

import ejs from "ejs";
// Init Express
const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(router);

app.listen(3000, () => console.log('System Running'));