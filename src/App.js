import React from "react";
import "./utilities/FontAwesome";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/landing/index";
import NavigationBar from "./components/navigation/navbar/Navbar";
import Footer from "./components/navigation/footer/Footer";
import EditProfile from "./components/profile/index";

function App() {
  return (
    <div className="page-container">
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/edit" exact component={EditProfile} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
