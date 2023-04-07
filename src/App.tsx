import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Countries from "./components/Countries/Countries";
import Map from "./components/Map/Map";
import CertainCountry from "./components/CertainCountry/CertainCountry";

function App() {
    const [selectedCountry, setSelectedCountry] = useState<{ name: any } | null>(null);
    const [countryClicked, setCountryClicked] = useState(false);
    function handleCountryClick(name: any) {
        setCountryClicked(true);
        setSelectedCountry(name);

            window.scrollTo({
                top: 0,
                behavior: "smooth"

        });
    }

    return (
            <div className="App">

                <div id={"header"}>
                    {countryClicked &&<button id={"back-btn"} onClick={() => {
                        setCountryClicked(false)
                    }}>Go Back</button>}
                    {!countryClicked && <h1>Interesting geography</h1>}
                    {countryClicked && <h1>{selectedCountry!.name.common}</h1>}
                </div>
                {!countryClicked && <Countries onCountryClick={handleCountryClick} />}
                {countryClicked && <CertainCountry selectedCountry={selectedCountry} />}
                <Map selectedCountry={selectedCountry} countryClicked={countryClicked} />
            </div>

    );
}

export default App;
