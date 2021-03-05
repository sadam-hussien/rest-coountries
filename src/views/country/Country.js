import React, {useState, useEffect} from "react";

import { useParams, Link } from "react-router-dom";

import axios from "axios";

import {IconArrow} from "../../components/svg/icons";

import CountryItem from "../../components/country/CountryItem";

import "./Country.scss";

const Country = () => {

    const [country, setCountry] = useState([]);
    
    const {name} = useParams();

    useEffect( () => {

        axios.get(`https://restcountries.eu/rest/v2/name/${name}`).then( e => {

            setCountry(e.data);

        }).catch( error => {

            console.log(error);

        })


    }, [name]);

    return (
        <div className="country-page page"> 

            <div className="container">


                <div className="back-to-home-btn text-capitalize">
                    <Link to="/">
                        <span className="icon"><IconArrow style={{color: "#111517", width: "1.1rem"}} /></span>
                        <span>back</span>
                    </Link>
                </div>

                {country.length > 0 ? 

                    <CountryItem 
                        flag={country[0].flag}
                        name={country[0].name}
                        nativeName={country[0].nativeName}
                        population={country[0].population}
                        region={country[0].region}
                        subregion={country[0].subregion}
                        capital={country[0].capital}
                        topLevelDomain={country[0].topLevelDomain}
                        currencies={country[0].currencies}
                        languages={country[0].languages}
                        borders={country[0].borders} />

                : null}

            </div>

        </div>
    )

}

export default Country;