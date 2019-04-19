import { createStore } from "redux";

let initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  url: "",
  mortgage: "",
  rent: ""
};

export const HANDLE_CHANGE = "HANDLE_CHANGE";
export const HANDLE_URL_CHANGE = "HANDLE_URL_CHANGE";
export const HANDLE_RENT = "HANDLE_RENT";
export const MORTGAGE_RENT_CHANGE = "MORTGAGE_RENT_CHANGE";

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case HANDLE_CHANGE:
      return {
        ...state,
        name: payload,
        address: payload,
        city: payload,
        state: payload,
        zipcode: payload
      };
    case HANDLE_URL_CHANGE:
      return { ...state, url: payload };
    case MORTGAGE_RENT_CHANGE:
      return { ...state, mortgage: payload, rent: payload };
    default:
      return state;
  }
}

export default createStore(reducer);
