import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Countries from "./components/Countries/Countries";
import Map from "./components/Map/Map";
import CertainCountry from "./components/CertainCountry/CertainCountry";




function CompareButton(props: { setCompareClicked: (clicked: boolean) => void })
{
    function  CompareButtonClicked()
    {
        props.setCompareClicked(true);
    }
    return(
        <button onClick={CompareButtonClicked}>Compare</button>
    )
}

function App() {
    const [compareClicked, setCompareClicked] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState<{ name: any } | null>(null);
    const [secondSelectedCountry, setSecondSelectedCountry] = useState<{ name: any } | null>(null);

    const [countryClicked, setCountryClicked] = useState(false);
    const [secondCountryClicked, setSecondCountryClicked] = useState(false);
    function handleCountryClick(name: any) {
        setCountryClicked(true);
        setSelectedCountry(name);

            window.scrollTo({
                top: 0,
                behavior: "smooth"

        });
    }
    function handleSecondCountryClick(name: any) {
        setSecondCountryClicked(true);
        setSecondSelectedCountry(name);

        window.scrollTo({
            top: 0,
            behavior: "smooth"

        });
    }

    return (
            <div className="App">

                <div id={"header"}>
                    {countryClicked &&<button id={"back-btn"} onClick={() => {
                        setSecondSelectedCountry(null)
                        setSelectedCountry(null)
                        setCountryClicked(false)
                        setSecondCountryClicked(false)
                        setCompareClicked(false)
                    }}>Go Back</button>}
                    {countryClicked && <CompareButton setCompareClicked={setCompareClicked}/>}
                    {!countryClicked && <h1>Interesting geography</h1>}
                    {countryClicked && <h1>{selectedCountry!.name.common}</h1>}
                </div>

                {compareClicked ? (
                    <div className = "countryContainer">
                        <div className = "innerCounteryContainer">
                            <Map selectedCountry={selectedCountry} countryClicked={countryClicked} />
                            <CertainCountry selectedCountry={selectedCountry} />
                        </div>
                        <div className = "innerCounteryContainer">
                            <Map  selectedCountry={secondSelectedCountry} countryClicked={secondCountryClicked} />

                                {!secondCountryClicked && <Countries onCountryClick={handleSecondCountryClick} />}
                                {secondCountryClicked && <CertainCountry selectedCountry={secondSelectedCountry} />}


                        </div>

                    </div>

                ) : (
                    <div className = "singleCountryContainer">
                        {!countryClicked && <Countries onCountryClick={handleCountryClick} />}
                        {countryClicked && <CertainCountry selectedCountry={selectedCountry} />}
                        <Map selectedCountry={selectedCountry} countryClicked={countryClicked} />
                    </div>

                )}


            </div>

    );
}

export default App;
