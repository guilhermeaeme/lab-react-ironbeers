import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  menu = [
    {
      path: 'beers',
      title: 'All Beers',
      description: 'Lorem ipsum dolor sit amet'
    },
    {
      path: 'beers/random',
      title: 'Random Beer',
      description: 'Ipsum dolor sit amet dolor lorem'
    },
    {
      path: 'beers/create',
      title: 'New Beer',
      description: 'Create new dolor sit amet dolor lorem'
    }
  ];

  render() {
    return (
      <div className="container">
        {
          this.menu.map(item => (
            <Link to={`${item.path}`} className="card my-3">
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </Link>
          ))
        }
      </div>
    );
  }
}

export default Home;
