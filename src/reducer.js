export const initialState = {
  basket: [],
};

// reducer is sth that alweys listen for some changes fo state in app
const reducer = (state, action) => {
  console.log("action", action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
