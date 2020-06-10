import React from "react";
import "./utilities/FontAwesome";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/landing/index";
import NavigationBar from "./components/navigation/navbar/Navbar";
import Footer from "./components/navigation/footer/Footer";

function App() {
  console.log(process.env.REACT_APP_GOOGLE_PLACE_API)
  return (
    <div className="page-container">
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
