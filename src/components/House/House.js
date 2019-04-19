import React, { Component } from "react";

export class House extends Component {
  render() {
    return (
      <section>
        <div>
          <div>Property name: {this.props.propertyName}</div>
          <div> Address: {this.props.address}</div>
          <div>City: {this.props.city}</div>
          <div>State: {this.props.state}</div>
          <div> Zipcode: {this.props.zipcode}</div>
        </div>
        <button>Delete</button>
      </section>
    );
  }
}

export default House;
