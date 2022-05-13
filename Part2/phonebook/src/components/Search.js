import React from "react";

const Search = ({ nameFilter, handleFilterName }) => {
  return (
    <div>
      <h2>Phonebook</h2>
      Search Contacts :
      <input type="text" value={nameFilter} onChange={handleFilterName} />
    </div>
  );
};

export default Search;
