import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import BeersAll from './components/BeersAll';
import BeersSingle from './components/BeersSingle';
import { Home as HomeIcon } from 'react-feather';

function App() {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container d-flex justify-content-center">
          <NavLink exact to="/" className="nav-link" activeClassName="invisible">
            <HomeIcon color="white" />
          </NavLink>
        </div>
      </nav>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={BeersAll} />
        <Route exact path="/beers/:id" component={BeersSingle} />
      </Switch>
    </Fragment>
  );
}

export default App;
