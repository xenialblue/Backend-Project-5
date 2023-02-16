import express from "express";

import { Home, Lomba, Peserta } from "../controllers/home.js";

const router = express.Router();

global.app = express();

router.use(express.static('views'));

router.get('/', Home);
router.get('/lomba', Lomba);
router.get('/list-peserta', Peserta);

export default router;