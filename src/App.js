import React from "react";

// react router
import {BrowserRouter, Route} from "react-router-dom";

// header
import Header from "./components/global/header/Header";

// home
import Home from "./views/home/Home";

// country
import Country from "./views/country/Country";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        
        {/* header  */}
        <Header />

        {/* home  */}
        <Route exact path="/" component={Home} />

        {/* country  */}
        <Route path="/country/:name" component={Country} />

      </div>
    </BrowserRouter>
  );
}

export default App;
