import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddPlayer = () => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:1337/api/players', {
            name,
            position
        })
            .then(() => history.push('/players/list'))
            .catch(err => setErrors(err.response.data.errors));
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                {/* ... input fields, error messages, and submit button */}
            </form>
        </div>
    );
}

export default AddPlayer;
