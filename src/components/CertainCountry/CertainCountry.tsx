import React, { FC } from 'react';
import './CertainCountry.css';
import {getCountriesByName} from "../../Services/CountriesService";

interface CertainCountryProps {
    selectedCountry: any;

}

const CertainCountry: FC<CertainCountryProps> = (selectedCountry) =>{

    console.log("certain " + selectedCountry.selectedCountry)
     return (
      <div className="CertainCountry">
          <img src={selectedCountry.selectedCountry.flags.png} alt={selectedCountry.selectedCountry.name.common} />
          <h1>{selectedCountry.selectedCountry.name.official}</h1>
          <p>{selectedCountry.selectedCountry.region}</p>
      </div>
    )};

export default CertainCountry;
