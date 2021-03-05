import React, {useState, useEffect} from "react";

// react select library
import Select from 'react-select';

// css file
import "./SelectBox.scss";

const options = [
    { value: 'All', label: 'All' },
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'Americas' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
];

const SelectBox = (props) => {

    const [selectedOption, setSelectedOption] = useState("All");

    const [mySelectedOption, setMySelectedOption] = useState(selectedOption);

    const {handleSelected} = props;

    useEffect(() => {

        setMySelectedOption(selectedOption);

        handleSelected(mySelectedOption);

    }, [selectedOption, mySelectedOption, handleSelected])

    return (
        <section className="select-box">
            <form>
                <div className="form-group d-flex align-items-center position-relative">
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    className="form-control"
                    classNamePrefix="select-box-item"
                    placeholder="Filter By Region"
                />
                </div>
            </form>
        </section>
    )

}

export default SelectBox;