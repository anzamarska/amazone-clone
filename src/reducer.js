export const initialState = {
  basket: [],
  allPrice: [],
};

// reducer is sth that alweys listen for some changes fo state in app
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
        allPrice: [Number(state.allPrice) + Number(action.item.price)],
        // it is possible to make it easier? why ys didnt recognice number?
      };
    default:
      return state;
  }
};

export default reducer;
