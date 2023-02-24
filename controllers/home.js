import Contents from "../models/home.js";
import fs from 'fs';
import path from 'path';
const dirname = path.dirname(new URL(import.meta.url).pathname);

const uploadDirectory = './uploads';

if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory);
}
//get data
export const getContent = async (req, res) => {
    try {
        const contents = await Contents.findAll();
        res.send(contents);
    } catch (err) {
        console.log(err);
    }
}

//get data_id
export const getContentsById = async (req, res) => {
    try {
        const contents = await Contents.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(contents[0]);
    } catch (err) {
        console.log(err);
    }
}

//create
export const createContents = async (req, res) => {
    try {
        const uploadDir = path.join(dirname, '..', 'uploads');
        if(!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }

        const file = req.files.image;
        const fileName = new Date().getTime() + '-' + file.name;

        fs.writeFile(path.join(uploadDir, fileName), file.data, async (err) => {
            if(err) { 
                res.status(500).json({
                    error: 'Server Error'
                });
            } else {
                try {
                    const contents = {
                        name: req.body.name,
                        registration_fee: req.body.registration_fee,
                        image:fileName,
                        max_participant: req.body.max_participant,
                        description: req.body.description
                    };

                    await Contents.create(content);

                    res.json({
                        message: 'Content Created'
                    });
                } catch (err) {
                    console.log(err);
                    res.status(500).json({
                    error: 'Server Error'
                });
            }
        }
        });
        } catch (err) {
            console.log(err);
            res.status(500).json({
            error: 'Server Error'
            });
        }
    }

//update
export const updateContents = async (req, res) => {
    try {
        await Contents.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Contents Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

//delete
export const deleteContents = async (req, res) => {
    try {
        await Contents.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Contents Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}