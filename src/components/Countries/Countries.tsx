import React, { FC, useEffect, useState } from 'react';
import './Countries.css';
import { getCountries, getCountriesByName } from '../../Services/CountriesService'

interface CountriesProps {
    onCountryClick: (name: string) => void;
}

const Countries: FC<CountriesProps> = ({ onCountryClick }) => {
    const [countries, setCountries] = useState<any[]>([]);

    useEffect(() => {
        getCountries().then((res) => {
            setCountries(res);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    function handleClick(name: string) {
        getCountriesByName(name).then(c => {
            console.log(c[0])
            onCountryClick(c[0]); // Call the onCountryClick prop with the name parameter
        })
    }

    const listItems = countries.map((country, index) => (
        <div key={index} className="countryListItem" onClick={() => handleClick(country.name.common)}>
            <img src={country.flags.png} alt={country.name.common} />
            {country.name.common}

        </div>
    ));

    return (
        <div className="Countries">
            <ul>{listItems}</ul>
        </div>
    );
};

export default Countries;
