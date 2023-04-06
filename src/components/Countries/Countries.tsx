import React, {FC, useEffect, useState} from 'react';
import './Countries.css';
import {getCountries} from '../../Services/CountriesService'
interface CountriesProps {}

const Countries: FC<CountriesProps> = () => {
    const [countries, setCountries] = useState<any[]>([]);

    useEffect(() => {
        getCountries().then((res) => {
            setCountries(res);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    const listItems = countries.map((country, index) => (
        <div className="countryListItem">
            <img src={country.flags.png}/>
        {country.name.common}

            <hr></hr>
        </div>

    ));

    return (
        <div className="Countries">
            <ul>{listItems}</ul>
        </div>
    );
};


export default Countries;
