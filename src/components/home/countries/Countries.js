import React, {useEffect, useState} from "react";

import CountryItem from "./CountryItem";

import {IconChevron} from "../../svg/icons";

import axios from "axios";

// css file
import "./Countries.scss";

const Countries = (props) => {

    const [countriesData, setCountriesData] = useState([]);

    const [countriesDataFilterd, setCountriesDataFilterd] = useState([]);

    const [countriesVisible, setCountriesVisible] = useState(8);

    const {selectedOption} = props;

    // api url
    const theUrl = "https://restcountries.eu/rest/v2/all";

    // set the data into state after mounted
    // handle select change
    useEffect(() => {

        if ((typeof selectedOption === "string" && selectedOption === "All") || (typeof selectedOption === "object" && selectedOption.value === "All")) {

            axios.get(theUrl).then(e => {
                
                setCountriesData(e.data); 

            });

        } else {

            axios.get(`https://restcountries.eu/rest/v2/region/${selectedOption.value.toLowerCase()}`).then(e => {

                setCountriesData(e.data);

            });

        }

    }, [selectedOption]);

    // handle change
    useEffect(() => {
        
        setCountriesDataFilterd(
            countriesData.filter( country => {

                return country.name.toLowerCase().includes(props.inpChange.toLowerCase())

            })
        )

    }, [props.inpChange, countriesData]);

    // show more data
    const showMore = () => {

        setCountriesVisible((prevValue) => prevValue + 8);
    
    }

    // the data
    const theCountries = countriesDataFilterd.slice(0, countriesVisible).map( ({numericCode, flag, name, population, region, capital}) => {
        return (
            <CountryItem 
                key={numericCode}
                numericCode={numericCode}
                flag={flag}
                name={name}
                population={population}
                region={region}
                capital={capital} />
        )
    })

    return (
        <section className="countries">
            <ul className="list-unstyled">
                {theCountries}
            </ul>

            <div className="show-more d-flex justify-content-center">
                <button type="button" onClick={showMore} className="d-flex align-items-center justify-content-center">
                    <span className="icon"><IconChevron style={{width: "20px"}} /></span>
                    <span className="text">show more</span>
                </button>
            </div>
        </section>
    )

}

export default Countries;