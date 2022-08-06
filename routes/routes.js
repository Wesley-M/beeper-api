const express = require('express');
const models = require('../models/model');

const router = express.Router();
const cors = require("cors");

router.use(cors());

// Create Song
router.post('/songs', async (req, res) => {
    const data = new models.SongModel({
        name: req.body.name,
        content: req.body.content
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

router.get('/songs', async (req, res) => {
    try{
        const data = await models.SongModel.find();
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

module.exports = router;