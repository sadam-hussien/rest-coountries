import React, { useEffect, useState } from 'react';

// svg component
import {IconMoon, IconSun} from "../../svg/icons";

// css file
import "./Header.scss";

const Header = () => {

    const getThemeFromLocalStorag = () => {

        let theme = "light";

        if (localStorage.getItem("theme")) {

            theme = localStorage.getItem("theme");

        }

        return theme;

    }

    const [theTheme, setTheTheme] = useState(getThemeFromLocalStorag());

    useEffect(() => {

        document.documentElement.className = theTheme + "-theme";

        localStorage.setItem("theme", theTheme);

    }, [theTheme]);

    const toggleTheme = () => {

        if (theTheme === "light") {
            setTheTheme("dark");
        } else {
            setTheTheme("light");
        }
    
    }

    return (
        <header className="main-header d-flex align-items-center">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">

                    {/* slogan  */}
                    <div className="header-slogan">
                        <h2 className="text">Where in the world?</h2>
                    </div>

                    {/* toggle-mode  */}
                    <div className="toggle-mode">
                        <button type="button" onClick={toggleTheme}>

                            {theTheme === "light" ?

                                <React.Fragment>
                                    <span className="icon">
                                        <IconMoon />
                                    </span>

                                    <span className="text text-capitalize">
                                        dark mode
                                    </span>
                                </React.Fragment>                            

                            : 
                                <React.Fragment>
                                    <span className="icon">
                                        <IconSun />
                                    </span>

                                    <span className="text text-capitalize">
                                        light mode
                                    </span>
                                </React.Fragment>
                            }

                        </button>
                    </div>
                    
                </div>
            </div>
        </header>
    );
}

export default Header;
