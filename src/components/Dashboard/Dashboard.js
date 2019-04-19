import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";

export class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      houses: []
    };
  }
  componentDidMount() {
    axios.get("/api/houses").then(response => {
      this.setState({
        houses: response.data
      });
    });
  }
  render() {
    let houseCards = this.state.houses.map(house => {
      return (
        <House
          propertyName={house.property_name}
          address={house.address}
          city={house.city}
          state={house.state}
          zipcode={house.zipcode}
          key={house.id}
        />
      );
    });
    return (
      <div>
        {houseCards}
        <Link to="/wizard">
          <button>Add New Property</button>
        </Link>
      </div>
    );
  }
}

export default Dashboard;
