import React, { Component } from 'react';
import "./utilities/FontAwesome";
import "./App.css"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import ScrollToTop from "./components/scrollToTop";
import NavigationBar from "./components/navigation/navbar/Navbar";
import Footer from "./components/navigation/footer/Footer";
import LandingPage from "./components/landing/index";
import EditProfile from "./components/profile/index";
import BlogPage from './components/blog/index';
import HousePage from './components/house/index';
import Page404 from './components/404/index';
import FAQPage from './components/FAQ/FAQ';
import SignupPopup from "./components/signup/index";
import AddPost from './components/post';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        isSignUpOpen: false
    };
  }

  handleSignUpClick = (bool) => {
    this.setState(
        {
            isSignUpOpen : bool
        }
    )
    document.body.style.overflow = (bool?"hidden":"scroll");
  }

  render(){
    return (
      <div className="page-container">
        <Router>
          <NavigationBar handleSignUpClick={this.handleSignUpClick}/>
          <ScrollToTop>
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/blog" exact component={BlogPage} />
              <Route path="/edit" exact component={EditProfile} />
              <Route path="/house" exact component={HousePage} />
              <Route path="/faq" exact component={FAQPage} />
              <Route path="/post" exact component={AddPost} />
              <Route path="/404" component={Page404} />
              <Redirect from="*" to="/404" />
            </Switch>
          </ScrollToTop>
          <Footer />
        </Router>
        {
            (this.state.isSignUpOpen) ? 
            (<SignupPopup handleSignUpClick={this.handleSignUpClick}/>) :
            ''
        }
      </div>
    );
  }
}
 
export default App;
