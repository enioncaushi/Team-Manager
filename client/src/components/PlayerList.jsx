import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const PlayerList = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1337/api/players')
            .then(res => setPlayers(res.data))
            .catch(err => console.log(err));
    }, []);

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId));
    }

    return (
        <div>
            {players.map((player, idx) => (
                <div key={idx}>
                    <Link to={`/status/game/1`}>{player.name}</Link>
                    <DeleteButton playerId={player._id} successCallback={() => removeFromDom(player._id)} />
                </div>
            ))}
        </div>
    );
}

export default PlayerList;
