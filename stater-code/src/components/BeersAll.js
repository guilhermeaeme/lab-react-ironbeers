import React, { Component, Fragment } from 'react';
import BeersApi from '../services/BeersApi';

class BeersAll extends Component {
  componentDidMount() {
    BeersApi.get('beers')
      .then(response => {
        console.log(response);
      });
  }

  render() {
    return (
      <Fragment>
        Beers all
      </Fragment>
    );
  }
}

export default BeersAll;
