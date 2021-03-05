import React, {useState} from "react";
// ******** search options

// searchBox
import SearchBox from "../../components/home/searchOptions/searchBox/SearchBox";

// selectBox
import SelectBox from "../../components/home/searchOptions/selectBox/SelectBox";

// ********** countries
import Countries from "../../components/home/countries/Countries"; 

// css file
import "./Home.scss";

const Home = () => {

    const [inpChange, setInpChange] = useState("");

    const handleChange = (e) => {

        setInpChange(e.target.value);

    }

    const [selectedOption, setSelectedOption] = useState("All");

    const handleSelected = (selectedOption) => {

        setSelectedOption(selectedOption);

    }

    return (

        <div className="home-page page">
            
            {/* start search options  */}
            <div className="container">
                <section className="search-options d-flex align-items-center justify-content-between">
                    <SearchBox handleChange={handleChange} />
                    <SelectBox handleSelected={handleSelected} />
                </section>
            </div>
            {/* ***** end search options  */}

            {/* start countries  */}
            <div className="container">
                <section className="countries-wrapper">
                    <Countries inpChange={inpChange} selectedOption={selectedOption} />
                </section>
            </div>
            {/* ****** end countries  */}

        </div>

    )

}

export default Home;