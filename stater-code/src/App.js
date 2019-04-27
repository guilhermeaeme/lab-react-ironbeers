import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import BeersAll from './components/BeersAll';
import BeersSingle from './components/BeersSingle';

function App() {
  return (
    <Fragment>
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={BeersAll} />
        <Route exact path="/beers/:id" component={BeersSingle} />
      </Switch>
    </Fragment>
  );
}

export default App;
