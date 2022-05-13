import axios from "axios";
import { useEffect,useState } from "react";
import Languages from "./Languages"
const CountryDetails =({country})=> {
    const [weather,setWeather]= useState(null)

    const api_key = "40d116edb52a21ac68871aa091eadb5c"

    useEffect(() =>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}&units=metric`)
        .then(response=>{
            console.log(response.data)
        setWeather(response.data)})
    },[country.capital])



    if(weather !== null){
    return (
        <div>
            <h3>{country.name.common}</h3>
            <div>
                Capital : {country.capital}
            </div>
            <br/>
            <div>
                Area : {country.area}
            </div>
            <h4>Languages:</h4>
            <Languages languages={country.languages}/>
            <br/>
            <img alt="country flag" src={country.flags.png}/>
            <div>
                <h3>Weather in {country.name.common}</h3>
                <p>Temperature: {weather.main.temp} Celcius</p>
                <img alt="weather icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
                <p>Wind {weather.wind.speed} km/h</p>
            </div>
  
        </div>
    )}else{
        return (`${country.name.common}'s data is loading...`)
    }
}

export default CountryDetails;