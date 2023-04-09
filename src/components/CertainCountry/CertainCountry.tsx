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
          <div className="country-name">
              <h1>{selectedCountry.selectedCountry.name.common}</h1>
              <img src={selectedCountry.selectedCountry.coatOfArms.png} alt="" />
          </div>
          <div className="country-info-container">
              <p>Official name</p>
              <div  className="country-info fixed-height" >
                  <p>{selectedCountry.selectedCountry.name.official}</p>
              </div>
          </div>
          <div className="country-info-container">
              <p>Region</p>
              <div  className="country-info" >
                  <p>{selectedCountry.selectedCountry.region}</p>
              </div>
          </div>
          <div className="country-info-container">
              <p>Subregion</p>
              <div  className="country-info" >
                  <p>{selectedCountry.selectedCountry.subregion}</p>
              </div>
          </div>
          <div className="country-info-container">
              <p>Capital</p>
              <div  className="country-info" >
                  <p>{selectedCountry.selectedCountry.capital}</p>
              </div>
          </div>
          <div className="country-info-container">
              <p>Population</p>
              <div  className="country-info" >
                  <p>{selectedCountry.selectedCountry.population}</p>
              </div>
          </div>
          <div className="country-info-container">
              <p>Area</p>
              <div  className="country-info" >
                  <p>{selectedCountry.selectedCountry.area} km&sup2;</p>
              </div>
          </div>
          <div className="country-info-container">
              <p>Currency</p>
              <div  className="country-info fixed-height-currencies" >
                  <p>{selectedCountry.selectedCountry.currencies[(Object.keys(selectedCountry.selectedCountry.currencies)[0])].name}</p>
              </div>
          </div>
          <div className="country-info-container">
              <p>Language</p>
              <div  className="country-info" >
                  <p>{selectedCountry.selectedCountry.languages[(Object.keys(selectedCountry.selectedCountry.languages)[0])]}</p>
              </div>
          </div>
          <div className="country-info-container">
              <p>Demonyms</p>
              <div  className="country-info fixed-height-denonyms" >
                  <p>{selectedCountry.selectedCountry.demonyms.eng.m }, { selectedCountry.selectedCountry.demonyms.eng.f}</p>
              </div>
          </div>
          <div className="country-info-container">
              <p>Timezones</p>
              <div  className="country-info fixed-height-timezones" >
                  <ul className="timezone-list">
                      {selectedCountry.selectedCountry.timezones.map((timezone: string, index: number) => (
                          <li key={index}>{timezone}</li>
                      ))}
                  </ul>
              </div>
          </div>


      </div>
    )};

export default CertainCountry;
