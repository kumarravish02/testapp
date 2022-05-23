import './App.css';
import {useState, useEffect} from "react";
import MyForm from "./MyForm";
import MultiComponentForm from "./MultiComponentForm";
import UserList from "./UserList";
import MultiFormComponent from "./MultiFormComponent";
import {v4 as uuidv4 } from "uuid";

function App() {
  const [users, setUsers] = useState([]);
  const LOCAL_STORAGE_KEY = "users";

  useEffect(() => {
    const getusers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (getusers) setUsers(getusers);
  },[]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(users));
  } ,[users]);

  const removeUser = (id) => {
    const newuserlist = users.filter((user) => {
      return user.username !== id;
    });
    setUsers(newuserlist);
  };
 const populateuser = (user) => {
   console.log(user);
   setUsers([...users, user ]);
 }
  return (
    <div>
        <MultiComponentForm adduser={populateuser}/>
        <UserList users={users} getUserId = {removeUser}/>
    </div>
  );
}

export default App
