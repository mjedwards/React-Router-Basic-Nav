import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Home, About, Contact, Navigation } from "./components";

const App = () => (
  <div>
    <Route exact path='/' />
    <Route exact path='/about' />
    <Route path='/contact' />
    <Navigation />
  </div>
);

export default App;
