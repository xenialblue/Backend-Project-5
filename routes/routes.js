import express from "express";

import { Home, Lomba } from "../controllers/home.js";


const router = express.Router();
router.use(express.static('views'));


router.get('/', Home);
router.get('/lomba', Lomba);

export default router;