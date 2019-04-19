import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export class Wizard extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  addHouse() {
    const { name, address, city, state, zipcode } = this.state;
    axios.post("/api/houses", { name, address, city, state, zipcode }).then(
      this.setState({
        name: "",
        address: "",
        city: "",
        state: "",
        zipcode: ""
      })
    ).then(<Redirect to='/'/>)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name);
  }
  render() {
    return (
      <div>
        <form>
          <label>
            Name
            <input onChange={this.handleChange} type="text" />
          </label>
          <label>
            Address
            <input onChange={this.handleChange} type="text" />
          </label>
          <label>
            City
            <input onChange={this.handleChange} type="text" />
          </label>
          <label>
            State
            <input onChange={this.handleChange} type="text" />
          </label>
          <label>
            Zipcode
            <input onChange={this.handleChange} type="text" />
          </label>
        </form>
        Wizard
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}

export default Wizard;
