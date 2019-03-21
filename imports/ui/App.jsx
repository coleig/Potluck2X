import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { Link } from "react-router-dom";
import Chat from "./Chat.jsx";
import Event from "./Event.jsx";
import BrowseEvents from "./BrowseEvents.jsx";
import EventRSVP from "./EventRSVP.jsx";
import RegisterEvent from "./RegisterEvent.jsx";
import NavBar from "./NavBar.jsx";
import EventForm from "./EventForm.jsx";
import ListForm from "./ListForm.jsx";

import { withTracker } from "meteor/react-meteor-data";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const HomeComponent = () => {
  return (
    <div>
    {Meteor.user() ? 
          <section className="content-section bg-light" id="about">
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-10 mx-auto">
                  <h2>Upcoming Events</h2>
                  <div className="lead mb-5">
                        <BrowseEvents />
                        <EventForm />
                  </div>
                </div>
              </div>
            </div>
          </section>
  : <header className="masthead d-flex">
    <div className="container text-center my-auto">
      <h1 className="mb-1">Potluck Potluck</h1>
      <h3 className="mb-5">
        <em>it's a potluck of potlucks!</em>
      </h3>
      <Link to="/about" className="btn btn-primary btn-xl js-scroll-trigger">Find Out More</Link>
    </div>
    <div className="overlay"></div>
  </header>}
      <p className="text-muted small mb-0">Copyright &copy; POTLUCKPOTLUCK 2019</p>
  <Link to="#page-top" className="scroll-to-top rounded js-scroll-trigger">
    <i className="fas fa-angle-up"></i>
  </Link>
    </div>
  );
};

const AboutComponent = () =>
  <div>
      <section className="content-section bg-light" id="about">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>About</h2>
            <p className="lead mb-5">PotluckPotluck is a really cool app that does a bunch of nifty shit!</p>
          </div>
        </div>
      </div>
    </section>
  </div>;

const NotFoundPage = () =>
  <div>
    <h2>Page not found</h2>
    <div>SUHAS HELP</div>
  </div>;

const MainComponent = () =>
<div>
  
</div>


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/about" component={AboutComponent} />
            <Route component={NotFoundPage} />
          </Switch>
          <br />
        </div>
      </Router>
    );
  }
}

export default withTracker(() => {
  return {
    user: Meteor.user()
  };
})(App);