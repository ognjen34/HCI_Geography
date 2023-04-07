import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Countries from "./components/Countries/Countries";
import Map from "./components/Map/Map";

function App() {
    const [selectedCountry, setSelectedCountry] = useState("");

    function handleCountryClick(name: string) {
        setSelectedCountry(name);

            window.scrollTo({
                top: 0,
                behavior: "smooth"

        });
    }

    return (
        <div className="App">
            <Countries onCountryClick={handleCountryClick} />
            <Map selectedCountry={selectedCountry} />
        </div>
    );
}

export default App;
