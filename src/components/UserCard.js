import React from "react";

const UserCard = (props) =>  {
    const {username, age} = props.user
    return (
        <div>
            Name: {username}, Age: {age}
            <i className="trash alternate outline icon" style={{color : "red", marginTop: "7px"}}
                onClick = { () => props.clickHandler(username)}  >
            </i>

        </div>
    );
};

export default UserCard