const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 1337;


app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/teamManager', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Failed to connect to MongoDB", err));

require('./routes/player.routes')(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
