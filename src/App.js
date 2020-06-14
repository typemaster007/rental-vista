import React from "react";
import "./utilities/FontAwesome";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "./components/navigation/navbar/Navbar";
import Footer from "./components/navigation/footer/Footer";
import LandingPage from "./components/landing/index";
import EditProfile from "./components/profile/index";
import BlogPage from './components/blog/index';
import HousePage from './components/house/index';

function App() {
  return (
    <div className="page-container">
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/edit" exact component={EditProfile} />
          <Route path="/home" exact component={HousePage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
