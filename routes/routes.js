import express, { response } from "express";
import mysql from "mysql";
import axios from "axios";

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

axios.get('/user?ID=u1084987_kelompok_5')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
    });

axios.get('/password?PASS=8gwfyqbwgb')
    .then(function (response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function   () {
    });

router.get('/', Home);
router.get('/lomba', Lomba);
router.get('/list-peserta', Peserta);

export default router;