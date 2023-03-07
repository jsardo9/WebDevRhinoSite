import React, { useEffect, useState } from "react";
import {
  getAllRhinosByCountry,
  createRhino,
  removeRhino
} from "../../Services/RhinoService";

// Component for a spedific country
const CountryEntry = ({ country }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [rhinos, setRhinos] = useState([]);

  // handlder for adding new rhinos to be tracked
  const submitHandler = (e) => {
    e.preventDefault();

    // validate that name and type are not empty
    if (!name || !type) {
      alert("Please fill in all required fields.");
      return;
    }

    // submit form
    createRhino(name, type, country).then((newRhino) => {
      setRhinos([...rhinos, newRhino]);
    });
  };

  // handler for removing rhinos from tracking
  const removeHandler = (rhinoToRemove) => {
    const newRhinos = rhinos.filter((rhino) => rhino.id !== rhinoToRemove.id);
    removeRhino(rhinoToRemove.id).then(() => {
      console.log("Removed Rhino with ID: ", rhinoToRemove.id);
    });
    setRhinos(newRhinos);
  };

  // asynchronously loading in rhino data
  useEffect(() => {
    getAllRhinosByCountry(country).then((rhinos) => {
      setRhinos(rhinos);
    });
  }, [country]);

  // html for this country
  return (
    <div id={country.id}>
      <h2>{country.get("name")}:</h2>
      <h3>
        Types of Rhinos in {country.get("name")}:{" "}
        {country.get("rhinoTypes").join(" | ")}
      </h3>
      <div>
        {/* form for adding rhino to be tracked */}
        <h4 style={{ textAlign: "center" }}>Add a Rhino to be Tracked</h4>
        <form style={{ textAlign: "center" }} onSubmit={submitHandler}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Type:
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        <h4 style={{ textAlign: "center" }}>Current Rhinos Being Tracked</h4>
        <ul id="rhinoList">
          {/* listing the current rhinos being tracked */}
          {rhinos.map((rhino) => (
            <span key={rhino.id}>
              <li>
                Name: {rhino.get("name")} | Type of Rhino: {rhino.get("type")}
              </li>
              <button
                onClick={(e) => {
                  // Set remove variable and trigger re-render
                  removeHandler(rhino);
                }}
              >
                Untrack Rhino
              </button>
            </span>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CountryEntry;
