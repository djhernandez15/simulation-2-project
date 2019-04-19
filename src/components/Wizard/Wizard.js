import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export class Wizard extends Component {
  constructor() {
    super();

    this.state = {};

    this.addHouse = this.addHouse.bind(this);
  }

  addHouse() {
    const { name, address, city, state, zipcode } = this.state;
    axios
      .post("/api/houses", { name, address, city, state, zipcode })
      .then(response => {
        this.setState({
          name: response.data,
          address: response.data,
          city: response.data,
          state: response.data,
          zipcode: response.data
        });
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <Link to="/">
          <button>Cancel</button>
        </Link>
        {/* <Redirect to="/"> */}
        <button onClick={this.addHouse}>Complete</button>
        {/* </Redirect> */}
      </div>
    );
  }
}

export default Wizard;
