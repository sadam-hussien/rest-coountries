// search icon
import {IconSearch} from "../../../svg/icons";

// css file
import "./SearchBox.scss";

const SearchBox = (props) => {

    return (
        <section className="search-box">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group d-flex align-items-center position-relative">
                    <label htmlFor="search-box-inp" className="icon">
                        <IconSearch />
                    </label>
                    <input 
                        type="text" 
                        placeholder="Search for a country..." 
                        id="search-box-inp" 
                        className="form-control" 
                        name="search-box" 
                        onChange={props.handleChange} />
                </div>
            </form>
        </section>
    )

}

export default SearchBox;