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
    this.getHouses();
  }

  getHouses = () => {
    axios.get("/api/houses").then(response => {
      this.setState({
        houses: response.data
      });
    });
  };

  deleteHouse = id => {
    axios.delete(`/api/houses/:${id}`).then(response => this.getHouses());
  };
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
          deleteHouse={this.deleteHouse}
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
