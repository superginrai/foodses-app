const express = require('express');
const router = express.Router();
const Food = require('./../models/food.schema');

router.get('/', (req, res) => {
    Food.find({})
        .then((databaseResults) => {
            res.send(databaseResults);        
        })
        .catch((error) => {
            console.log('error make food find', error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    const foodToAdd = req.body; // body.name & body.cost
    console.log('Food to add:', foodToAdd);
    Food.create(foodToAdd)
    .then(() => {
        res.sendStatus(200);        
    })
    .catch((error) => {
        console.log('error make food find', error);
        res.sendStatus(200);
    });
});

router.put('/', (req, res) => {
    const foodToUpdate = req.body;
    console.log('Food to Update:', foodToUpdate);
    Food.update(foodToUpdate)
    .then(() => {
        res.sendStatus(200);
    });
});

module.exports = router;