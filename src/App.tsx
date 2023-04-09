import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Countries from "./components/Countries/Countries";
import Map from "./components/Map/Map";
import CertainCountry from "./components/CertainCountry/CertainCountry";
import backImage from './assets/images/back.png';




function CompareButton(props: { setCompareClicked: (clicked: boolean) => void })
{
    function  CompareButtonClicked()
    {
        props.setCompareClicked(true);
    }
    return(
        <button onClick={CompareButtonClicked} id={"compare-button"} >Compare</button>
    )
}

function App() {
    const [compareClicked, setCompareClicked] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState<{ name: any } | null>(null);
    const [secondSelectedCountry, setSecondSelectedCountry] = useState<{ name: any } | null>(null);

    const [countryClicked, setCountryClicked] = useState(false);
    const [secondCountryClicked, setSecondCountryClicked] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [showSearch, setShowSearch] = useState<boolean>(false);

    function handleCountryClick(name: any) {
        setCountryClicked(true);
        setSelectedCountry(name);

            window.scrollTo({
                top: 0,
                behavior: "smooth"

        });
        setSearchQuery("");
    }
    function handleSecondCountryClick(name: any) {
        setSecondCountryClicked(true);
        setSecondSelectedCountry(name);

        window.scrollTo({
            top: 0,
            behavior: "smooth"

        });
        setSearchQuery("");
    }

    function setStates(selected:any, secondSelected: any, clicked:boolean, compared:boolean, secondClicked:boolean){
        setSecondSelectedCountry(secondSelected)
        setSelectedCountry(selected)
        setCountryClicked(clicked)
        setSecondCountryClicked(secondClicked)
        setCompareClicked(compared)
        setShowSearch(false);
        setSearchQuery("");
    }

    function handleSearch(input:any) {
        setShowSearch((prevState) => !prevState);
        setSearchQuery(input);
        console.log(input)

    }

    return (
            <div className="App">

                <div id={"header"}>
                    {countryClicked &&<button id={"back-btn"} onClick={() => {

                        if(compareClicked && !secondCountryClicked) {
                            setStates(selectedCountry, null, true, false, false)
                        }
                        if(compareClicked && secondCountryClicked) {
                            setStates(selectedCountry, null, true, true, false)
                        }
                        if(!compareClicked) {
                            setStates(null, null, false, false, false)
                        }

                    }}><img src={backImage}/></button>}
                    <h1>Interesting geography</h1>
                    {countryClicked && <CompareButton setCompareClicked={setCompareClicked}/>}
                </div>

                {((!selectedCountry && !compareClicked) || (selectedCountry && compareClicked) && (!secondSelectedCountry && compareClicked && selectedCountry))&& (
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search countries"
                                onFocus={() => setShowSearch(true)}
                                onBlur={() => setShowSearch(false)}
                                onInput={(event: React.FormEvent<HTMLInputElement>) => handleSearch(event.currentTarget.value)}
                            />
                        </div>
                    )}
                {compareClicked ? (
                    
                    <div className = "countryContainer">
                        <div className = "innerCounteryContainer">
                            <div className = "left-map">
                            <Map selectedCountry={selectedCountry} countryClicked={countryClicked} />
                            </div>
                            <CertainCountry selectedCountry={selectedCountry} />
                        </div>
                        <div className = "innerCounteryContainer">
                            <div className= "right-map">
                            <Map  selectedCountry={secondSelectedCountry} countryClicked={secondCountryClicked} />
                            </div>
                                {!secondCountryClicked && <Countries onCountryClick={handleSecondCountryClick} stringQuery={searchQuery} />}
                                {secondCountryClicked && <CertainCountry selectedCountry={secondSelectedCountry} />}


                        </div>

                    </div>

                ) : (
                    <div className = "singleCountryContainer">
                        {!countryClicked && <Countries onCountryClick={handleCountryClick} stringQuery={searchQuery}/>}
                        {countryClicked && <CertainCountry selectedCountry={selectedCountry} />}
                        <div className="whole-map">
                        <Map selectedCountry={selectedCountry} countryClicked={countryClicked} />
                        </div>
                    </div>

                )}


            </div>

    );
}

export default App;
