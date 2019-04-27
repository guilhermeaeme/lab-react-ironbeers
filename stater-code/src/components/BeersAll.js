import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BeersApi from '../services/BeersApi';

class BeersAll extends Component {
  constructor(props) {
    super(props);

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
          this.state.beers.map((item, index) => (
            <Link key={index} to={`beers/${item.id}`} className="card my-3">
              <img src={item.image_url} className="card-img-top" alt={item.name} style={{width: '50px'}} />
              <div className="card-body">
                <h5 className="card-title">{item.tagname}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text text-secondary"><strong>Created by:</strong> {item.contributed_by}</p>
              </div>
            </Link>
          ))
        }
      </div>
    );
  }
}

export default BeersAll;
