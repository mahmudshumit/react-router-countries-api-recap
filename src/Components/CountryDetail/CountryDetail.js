import React, { useEffect ,useState} from 'react';
import { useParams } from 'react-router-dom';




const CountryDetail = () => {
    const {countryCapital}= useParams();
    const [country,setCountry]= useState({});
    useEffect(() => {
        const url =` https://restcountries.eu/rest/v2/capital/${countryCapital}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCountry(data[0]))
    },[])
    return (
        <div>
                
          <h3>Country Name :{country.region}</h3>
          <img src={country.flag} alt=""/>
          <h3>Country Population : {country.population}.</h3>
          <h3> Country Capital : {countryCapital}</h3>
          <h3>Region : {country.region}</h3>
         
        
        </div>
    );
};

export default CountryDetail;
