import { GET_POST_DATA } from "../actions";

const initialState = {
  posts: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_DATA:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
