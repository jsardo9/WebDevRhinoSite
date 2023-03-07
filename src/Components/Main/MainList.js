import React, { useEffect, useState } from "react";
import { getAllRhinos } from "/src/Services/RhinoService";

// this child of the main is for the list of featured rhinos
const MainList = ({ users }) => {
  const [rhinos, setRhinos] = useState([]);

  useEffect(() => {
    getAllRhinos().then((rhinos) => {
      setRhinos(rhinos);
    });
  }, []);

  // function to show a pop up to the user when user clicks on learn more
  // event binding
  function learnMore() {
    alert("Thanks for choosing to learn more!");
  }

  return (
    <div>
      <div>
        <hr />
        This is a page designed for anyone with an interest or passion for
        rhinos. You can navigate to pages to learn more about different types of
        rhinos, read blog posts or create your own, and to look up locations for
        zoos where you can go see the different types of rhinos. Below we have a
        list of our current featured rhinos.
        <ul id="rhinoList">
          Example Rhinos:
          {users.map((user) => (
            <li key={user.name}>
              Name: {user.name} | Type of Rhino: {user.type}
            </li>
          ))}
        </ul>
      </div>
      <div>
        {/* Rendering Rhinos from DB*/}
        {rhinos.length > 0 && (
          <ul>
            Rhinos Currently Being Tracked:
            {rhinos.map((rhino) => (
              <li key={rhino.id}>
                Name: {rhino.get("name")} | Type of Rhino: {rhino.get("type")}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={learnMore}>Learn More</button>
    </div>
  );
};

export default MainList;
