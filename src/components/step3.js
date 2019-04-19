import React, { Component } from "react";
import store, { MORTGAGE_RENT_CHANGE } from "../store";

export class step3 extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      mortgage: reduxState.mortgage,
      rent: reduxState.rent
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({ mortgage: reduxState.mortgage, rent: reduxState.rent });
    });
  }

  handleChange(e) {
    store.dispatch({
      type: MORTGAGE_RENT_CHANGE
      
    });
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <form>
          <label>
            Monthly Mortgage Amount
            <input name="mortgage" />
          </label>
          <label>
            Desired Monthly Rent
            <input name="rent" />
          </label>
        </form>
      </div>
    );
  }
}

export default step3;
