const PlayerController = require('../controllers/player.controller');

module.exports = app => {
    app.post('/api/players', PlayerController.createPlayer);
    app.get('/api/players', PlayerController.getAllPlayers);
    app.delete('/api/players/:id', PlayerController.deletePlayer);
    app.put('/api/players/:id', PlayerController.updatePlayerStatus);
};
