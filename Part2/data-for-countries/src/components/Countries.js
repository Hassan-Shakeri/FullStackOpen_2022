import { v4 as uuid } from "uuid";
import Country from "./Country"
import CountryDetails from "./CountryDetails"


const Countries = ({filter,countriesToShow,handleSearchChange}) => {


    let result = "please search a country!"
  
    if(filter.length > 0) {
        if (countriesToShow.length === 1){
            result = <CountryDetails country= {countriesToShow[0]}/>
        }
      else if (countriesToShow.length > 10){
        result = "Too many matches! Please search more specific."
      }
      else if (countriesToShow.length <= 10){
        result = countriesToShow.map((country)=>{
            const idcountry = {...country, id: uuid()}
            return (<Country key={idcountry.id} country={country} handleSearchChange={handleSearchChange}/>)
        })
      }

    }
      return(
        <div>
          {result}
        </div>
      )
}
        

  export default Countries;