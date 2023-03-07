import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getAllCountries } from "/src/Services/RhinoService";
import CountriesList from "./CountriesList";

// Container component for haling information regarding rhinos from specific countries
export default function RhinoCountries() {
  const [countries, setCountries] = useState([]);

  // asynchronously loading in country data
  useEffect(() => {
    getAllCountries().then((countries) => {
      setCountries(countries);
    });
  }, []);

  // Callback function for returning the user to Main page
  const history = useHistory();
  const buttonHandler = () => {
    history.push("/home");
  };
  return (
    <section>
      <h1>Countries with Rhinos</h1>
      <button onClick={buttonHandler}>Return to Main</button>
      <div id="countries">
        <CountriesList countries={countries} />
      </div>
    </section>
  );
}
