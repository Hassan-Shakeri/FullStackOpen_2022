const Country =({country,handleSearchChange}) =>{
  return(
    <div>
      <h5>{country.name.common} <button value={country.name.common} onClick={handleSearchChange}>Show</button></h5>
      
    </div>
  )}

  export default Country;