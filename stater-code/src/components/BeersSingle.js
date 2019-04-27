import React, { Component } from 'react';
import BeersApi from '../services/BeersApi';

class BeersSingle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: null
    }
  }

  componentDidMount() {
    BeersApi.get(`beers/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          beer: response.data[0]
        });
      });
  }

  render() {
    const { beer } = this.state;

    if(!beer) {
      return null;
    }

    return (
      <div className='container'>
        <h1>{beer.name}</h1>
      </div>
    );
  }
}

export default BeersSingle;
