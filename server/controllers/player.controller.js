const Player = require('../models/player.model');

module.exports = {
    // ... other methods
    createPlayer: (req, res) => {
        Player.create(req.body)
            .then(player => res.json(player))
            .catch(err => res.status(400).json(err));
    },
    getAllPlayers: (req, res) => {
        Player.find({})
            .then(players => res.json(players))
            .catch(err => res.json(err));
    },
    deletePlayer: (req, res) => {
        Player.findByIdAndDelete(req.params.id)
            .then(() => res.json({ success: true }))
            .catch(err => res.json(err));
    },
    updatePlayerStatus: (req, res) => {
        Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedPlayer => res.json(updatedPlayer))
            .catch(err => res.status(400).json(err));
    }
};
