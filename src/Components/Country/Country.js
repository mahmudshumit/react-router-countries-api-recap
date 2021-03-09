import React from 'react';
import './Country.css';
import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const {name,flag,population,region,capital}=props.country;
    const history = useHistory();
     const handleClick=(countryCapital)=>{
        const url = `/country/${countryCapital}`;
        history.push(url);
     }
    return (
     <div className="country">
            <div className='image'>
           <img src={flag} alt=""/>
           <div >
               <h2>Name:{name}</h2>
             
               {/* <p>Population :{population}</p> */}
               {/* <p>Capital : {capital}</p>

               <p>Region : {region}</p> */}
               {/* <Link to ={`/country/${capital}`}>
               
               <Button variant="primary">Country Detail </Button>
               
               </Link> */}
                {/* <Link to ={`/country/${capital}`}> Show Detail Of Country </Link> */}
            
               <br/>
               <Button onClick={()=>handleClick(capital)} variant="primary">Country Detail </Button>
               
              


              
              
              


           </div>
        </div>
     </div>
    );
};

export default Country;