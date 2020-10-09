export const initialState = {
  basket: [],
  allPrice: [],
};

// selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

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

      case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        let newBasket = [...state.basket];
  
        if (index >= 0) {
          newBasket.splice(index, 1);
  
        } else {
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in basket!`
          )
        }
  
        return {
          ...state,
          basket: newBasket
        }
        
      default:
        return state;
    }
  };
  
  export default reducer;