import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WelcomeCard from "./components/Jumbotron/Jumbotron"

import LoggedIn from "./components/LoggedIn/LoggedIn";
import Champions from "./containers/Champions";
import Search from "./containers/Search";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <WelcomeCard />
      <br/>
      <br/>
      <br/>
      <Route exact path="/champions" component={Champions} />
      <Route exact path="/champions/:id" component={Search} />
      <Route exact path="/spotify" render={routeProps => (<LoggedIn {...routeProps}/>)}/>
    </Router>
  );
}

export default App;
