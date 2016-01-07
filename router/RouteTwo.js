import React from 'react';
import { Link } from 'react-router';

const RouteTwo = React.createClass({
  render(){
    return (
      <div>
        <h1> Route Two {this.props.params.id}  </h1>
        <Link to="/route-one">
        <h2>Switch Route</h2>
        </Link>
      </div>
    )
  }
})

export default RouteTwo;
