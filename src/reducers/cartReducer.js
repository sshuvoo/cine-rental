export default function cartReducer(state, action) {
   switch (action.type) {
      case 'ADD_TO_CART':
         return [...state, action.payload];
      case 'REMOVE_TO_CART':
         return state.filter((product) => product.id !== action.payload);
      default:
         return state;
   }
}
