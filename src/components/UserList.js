import React from "react";
import UserCard from "./UserCard";

function UserList(props)    {
    const users = props.users
    const deleteUserHandler = (username) => {
        props.getUserId(username);
    }
    const userList = users.map((user) => {
        return <UserCard user={user} clickHandler={deleteUserHandler}/>
    });
    return <div>{userList}</div>;
}

export default UserList