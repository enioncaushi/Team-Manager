import React from 'react';
import axios from 'axios';

const DeleteButton = ({ playerId, successCallback }) => {
    const deletePlayer = () => {
        axios.delete(`http://localhost:1337/api/players/${playerId}`)
            .then(() => successCallback())
            .catch(err => console.log(err));
    }

    return (
        <button onClick={deletePlayer}>Delete</button>
    );
}

export default DeleteButton;
