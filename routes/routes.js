import express from "express";
import mysql from 'mysql';
import { getContent, getContentsById, createContents, updateContents, deleteContents } from "../controllers/home.js";
import path from 'path';

const router = express.Router();
const dirname = path.dirname(new URL(import.meta.url).pathname);

global.connection = mysql.createConnection({
    host : '5.181.216.42',
    port : '3306',
    user : 'u1084987_kelompok_5',
    password : '8gwfyqbwgb',
    database : 'u1084987_kelompok_5'
});

router.get('/contents', getContent);
router.get('/contents/:id', getContentsById);
router.post('/contents', createContents);
router.put('/contents/:id', updateContents);
router.delete('/contents/:id', deleteContents);

router.use('/uploads', express.static(path.join(dirname, 'uploads')));

export default router;