const pet = require('../models/pet');

const controller = {
    index: (req, res) => {
        res.json([
            pet.createPet(1, 'Paçoca', 'Golden', true),
            pet.createPet(2, 'Luna', 'SRD', false),
            pet.createPet(3, 'Max', 'Golden', true),
            pet.createPet(4, 'Jupiter', 'Yorkshire', true)            
        ]);
    }
}

module.exports = controller;