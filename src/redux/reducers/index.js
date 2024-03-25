const initialState = {
  favourites: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case `ADD_TO_FAVOURITE`:
      return {
        ...state,
        favourites: {
          content: state.favourites.content.concat(action.payload),
        },
      };

    case `REMOVE_TO_LIST`:
      return {
        ...state,
        favourites: {
          content: state.favourites.content.filter((company, i) => i !== action.payload),
        },
      };
    default:
      return state;
  }
};
export default mainReducer;
