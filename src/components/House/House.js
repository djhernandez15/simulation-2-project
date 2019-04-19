import React, { Component } from "react";

export class House extends Component {
  render() {
    return (
      <section>
          <div>Property name: {this.props.propertyName}</div>
          <div> Address: {this.props.address}</div>
          <div>City: {this.props.city}</div>
          <div>State: {this.props.state}</div>
          <div> Zipcode: {this.props.zipcode}</div>
        <button onClick={this.props.deleteHouse(this.props.id)}>Delete</button>
      </section>
    );
  }
}

export default House;
