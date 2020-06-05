import React from "react";
import './utilities/FontAwesome';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LandingPage from "./modules/landing/LandingPage";
import NavigationBar from "./modules/navigation/navbar/Navbar";
import Footer from "./modules/navigation/footer/Footer";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={LandingPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
