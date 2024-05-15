import { ACTION_TYPES_CART } from "../../utils/Constants";

// Initial state for the cart reducer
const initialState = {
  list: [],
  selectedProduct: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // Selected product
    case ACTION_TYPES_CART.SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };

    // Adding a product to cart
    case ACTION_TYPES_CART.ADD_PRODUCT_TO_CART:
      // eslint-disable-next-line no-case-declarations
      const existingProduct = state.list.find(
        (product) => product.id === action.payload.id
      );

      return {
        ...state,
        list: existingProduct
          ? state.list.map((product) =>
              product.id === action.payload.id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            )
          : [...state.list, { ...action.payload, quantity: 1 }],
      };

    // Removing a product from cart
    case ACTION_TYPES_CART.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        list: state.list.filter((product) => product.id !== action.payload),
      };

    // Clear cart
    case ACTION_TYPES_CART.CLEAR_CART:
      return {
        ...state,
        list: [],
      };

    // Checkout cart
    case ACTION_TYPES_CART.CHECKOUT_CART:
      return {
        ...state,
        list: [],
      };

    // Increasing quantity of a product in cart
    case ACTION_TYPES_CART.INCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        list: state.list.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };

    // Decreasing quantity of a product in cart
    case ACTION_TYPES_CART.DECREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        list: state.list.map((product) =>
          product.id === action.payload && product.quantity > 1
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
