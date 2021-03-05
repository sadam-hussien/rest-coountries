import React, {useRef, useEffect} from "react";
import {Link} from "react-router-dom";

import "./CountryItem.scss";

const CountryItem = (props) => {

    const {flag, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders} = props;

    const bordersBoxRef = useRef();

    useEffect(() => {
        
        const BordersBoxEl = bordersBoxRef.current;

        const bordersBoxHeight = BordersBoxEl.clientHeight;

        if (bordersBoxHeight > 26) {
            BordersBoxEl.classList.add("with-margin");
        }

    }, []);

    return (
        <section className="single-country-item">
            <div className="item">
                
                {/* start img  */}
                <div className="img">
                    <img src={flag} alt={name} className="img-fluid" />
                </div>
                {/* *** end img  */}

                {/* start details  */}
                <div className="details">
                    <h1 className="details-title">{name}</h1>

                    <div className="more-details">

                        <div className="box">
                            <span className="box-title text-capitalize">native name:</span>
                            <span className="box-response">{nativeName}</span>
                        </div>
                        
                        <div className="box">
                            <span className="box-title text-capitalize">population:</span>
                            <span className="box-response">{population}</span>
                        </div>
                        
                        <div className="box">
                            <span className="box-title text-capitalize">region:</span>
                            <span className="box-response">{region}</span>
                        </div>
                        
                        <div className="box full-grid">
                            <span className="box-title text-capitalize">sub region:</span>
                            <span className="box-response">{subregion}</span>
                        </div>
                        
                        <div className="box full-grid">
                            <span className="box-title text-capitalize">capital:</span>
                            <span className="box-response">{capital}</span>
                        </div>
                        
                        <div className="box">
                            <span className="box-title text-capitalize">top level domain:</span>
                            <span className="box-response">{topLevelDomain}</span>
                        </div>
                        
                        <div className="box">
                            <span className="box-title text-capitalize">currencies:</span>
                            <span className="box-response">{currencies.map( (item, index) => <span key={index}>{item.name}{index === currencies.length - 1 ? "" : "," }</span>)}</span>
                        </div>
                        
                        <div className="box">
                            <span className="box-title text-capitalize">languages:</span>
                            <span className="box-response">{languages.map( (item, index) => <span key={index}>{item.name}{index === languages.length - 1 ? "" : "," }</span>)}</span>
                        </div>
                        
                        <div className="box full-grid borders-box" ref={bordersBoxRef}>
                            <span className="box-title text-capitalize">border countries:</span>
                            {borders.length > 0 ? 
                                <span className="box-response borders-box-response">
                                    {borders.map( (item, index) => <span key={index}><Link to={"/country/" + name}>{item}</Link></span> )}
                                </span>
                            : 
                                <span className="box-response">no borders</span>
                            }                            
                        </div>

                    </div>

                </div>
                {/* *** end details  */}

            </div>
        </section>
    )

}

export default CountryItem;