import React, {useState} from "react";

function MultiComponentForm(props) {
    const [inputs, setInputs] = useState({});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs( (values) => ({...values, [name] : value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.adduser(inputs);
        console.log(inputs);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="hidden" name="id" value={inputs.username || ""}/>
            <label>Name:
                <input type="text" name="username" value={inputs.username || ""} onChange={handleChange}/>
            </label>
            <label>Age:
                <input type="number" name="age" value={inputs.age || ""} onChange={handleChange}/>
            </label>
            <input type="submit" value="Search"/>
        </form>
    );
}

export default MultiComponentForm