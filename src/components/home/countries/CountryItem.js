import {Link} from "react-router-dom";

const CountryItem = ({numericCode, flag, name, population, region, capital}) => {

    return (
        <li className="country-item">
            
            {/* start country-item-img  */}
            <div className="country-item-img">
                <Link to={"/country/" + name}>
                    <img src={flag} alt={name} className="img-fluid" />
                </Link>
            </div>
            {/* **** end country-item-img  */}

            {/* start country-item-details  */}
            <div className="country-item-details">

                <div className="country-item-details-title">
                    <h3 className="text">{name}</h3>
                </div>

                <div className="country-item-details-inner">

                    <div className="country-item-details-box">
                        <span className="box-title">population:</span>
                        <span className="box-response">{population}</span>
                    </div>
                    
                    <div className="country-item-details-box">
                        <span className="box-title">region:</span>
                        <span className="box-response">{region}</span>
                    </div>
                    
                    <div className="country-item-details-box">
                        <span className="box-title">capital:</span>
                        <span className="box-response">{capital}</span>
                    </div>

                </div>

            </div>
            {/* **** end country-item-details  */}
            
        </li>
        
    )

}

export default CountryItem;