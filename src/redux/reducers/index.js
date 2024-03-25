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
    default:
      return state;
  }
};
export default mainReducer;
