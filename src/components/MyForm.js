import React, { useState } from "react";

function MyForm()   {
    const [username,  setUsername] = useState("");

    const handleSubmit = (e) => {
        alert(`The user submitted the name ${username}`);
        e.preventDefault();
    };
    const handleChange = (e) => {
        setUsername(e.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>User Name:
                <input type="text" name="username" value={username} onChange={handleChange}/>
            </label>
            <input type="submit"/>
        </form>
    );
}

export default MyForm