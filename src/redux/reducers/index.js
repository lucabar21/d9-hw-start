import { ADD_TO_FAVOURITE } from "../actions";
import { REMOVE_TO_LIST } from "../actions";

const initialState = {
  content: [],
};

const FavouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        content: state.content.concat(action.payload),
      };

    case REMOVE_TO_LIST:
      return {
        ...state,
        content: state.content.filter((company, i) => i !== action.payload),
      };
    default:
      return state;
  }
};
export default FavouritesReducer;
