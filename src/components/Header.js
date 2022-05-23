import React from "react";

const Header = (props) => {
    return (
        <div className="ui container center">
                <h2>Hello {props.name}</h2>
        </div>
    );
}

export default Header