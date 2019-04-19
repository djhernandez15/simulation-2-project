import React, { Component } from "react";
import store from "../store";

export class step1 extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zipcode: reduxState.zipcode
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        name: reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zipcode: reduxState.zipcode
      });
    });
  }
  handleChange(e) {
    store.dispatch({
      type: HANDLE_CHANGE,
    });
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Name
            <input onChange={this.handleChange} type="text" name="name" />
          </label>
          <label>
            Address
            <input onChange={this.handleChange} type="text" name="address" />
          </label>
          <label>
            City
            <input onChange={this.handleChange} type="text" name="city" />
          </label>
          <label>
            State
            <input onChange={this.handleChange} type="text" name="state" />
          </label>
          <label>
            Zipcode
            <input onChange={this.handleChange} type="number" name="zipcode" />
          </label>
        </form>
      </div>
    );
  }
}

export default step1;
