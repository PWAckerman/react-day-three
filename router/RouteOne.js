import React from 'react';
import { Link } from 'react-router';

const RouteOne = React.createClass({
  render(){
    return (
      <div>
        <h1> Route One {this.props.params.id} </h1>
        <Link to="/route-two">
        <h2>Switch Route</h2>
        </Link>
      </div>
    )
  }
})

export default RouteOne;
