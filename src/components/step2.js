import React, { Component } from "react";
import store from "../store";

export class step2 extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      url: reduxState.url
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({ url: reduxState.url });
    });
  }

  handleChange(e) {
    store.dispatch({
      type: HANDLE_URL_CHANGE,
    
    });
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <form>
          <label>
            Image URL
            <input name='url'type="url" />
          </label>
        </form>
      </div>
    );
  }
}

export default step2;
