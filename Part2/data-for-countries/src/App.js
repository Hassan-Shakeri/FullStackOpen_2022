import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";
import Filter from "./components/Filter";





const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");

  const countriesToShow = countries.filter((country) =>country.name.common.toLowerCase().match(newFilter.toLowerCase()))

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSearchChange = (event) => {
    setNewFilter(event.target.value);
  };

  return (
    <div>
      <Filter value={newFilter} handleSearchChange={handleSearchChange}/>
      <Countries filter={newFilter} countriesToShow={countriesToShow} handleSearchChange={handleSearchChange}/>
    </div>
  );
};

export default App;
