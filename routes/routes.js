import express from "express";
import mysql from "mysql";

import { Home, Lomba, Peserta } from "../controllers/home.js";

const router = express.Router();

global.app = express();

router.use(express.static('views'));

global.connection = mysql.createConnection({
    host : '5.181.216.42',
    port : '3306',
    user : 'u1084987_kelompok_5',
    password : '8gwfyqbwgb',
    database : 'u1084987_kelompok_5'
});

router.get('/', Home);
router.get('/lomba', Lomba);
router.get('/list-peserta', Peserta);

export default router;