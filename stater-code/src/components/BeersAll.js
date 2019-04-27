import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import BeersApi from '../services/BeersApi';

class BeersAll extends Component {
  constructor() {
    super();

    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    BeersApi.get('beers')
      .then(response => {
        this.setState({
          beers: response.data
        });
      });
  }

  render() {
    return (
      <div className="container">
        {
          this.state.beers.map(item => (
            <Link to={`beers/${item.id}`} className="card my-3">
              <img src={item.image_url} className="card-img-top" alt={item.name} style={{width: '50px'}} />
              <div className="card-body">
                <h5 className="card-title">{item.tagname}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </Link>
          ))
        }
      </div>
    );
  }
}

export default BeersAll;
