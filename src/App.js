import React from "react";
import "./utilities/FontAwesome";
import "./App.css"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import NavigationBar from "./components/navigation/navbar/Navbar";
import Footer from "./components/navigation/footer/Footer";
import LandingPage from "./components/landing/index";
import EditProfile from "./components/profile/index";
import BlogPage from './components/blog/index';
import HousePage from './components/house/index';
import Page404 from './components/404/index';
<<<<<<< HEAD
import AboutUsPage from './components/about/index';
=======
import login from './components/login/index';
>>>>>>> naitik

function App() {
  return (
    <div className="page-container">
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/edit" exact component={EditProfile} />
          <Route path="/house" exact component={HousePage} />
<<<<<<< HEAD
          <Route path="/about" exact component={AboutUsPage} />
=======
          <Route path="/login" exact component={login}/>
>>>>>>> naitik
          <Route path='/404' component={Page404} />
          <Redirect from='*' to='/404' />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
