import React, { useEffect, useState } from "react";

// import children to use in Main
import { getAllUsers } from "../../Services/Users.js";
import MainList from "./MainList.js";
import MainEntry from "./MainEntry.js";
import UserInput from "../UserInput/UserInput.js";

// main function that calls get and set users to retrieve user data
// load asynchronous data
const Main = () => {
  const [users, setUsers] = useState([]);

  // use state and use effect to retrieve and set data
  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  // html for the main page
  return (
    <div>
      <h1>Rhinos</h1>
      <div id="parentChild">
        About
        <MainList users={users} />
      </div>
      <hr />
      <MainEntry />
      <UserInput />
      <p></p>
    </div>
  );
};

export default Main;
