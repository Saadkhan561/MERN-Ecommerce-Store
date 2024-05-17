import { create } from "zustand";

const getServerSnapshot = () => ({
  cart: {},
  addItem: () => {},
  deleteItem: () => {},
});

const useCartStore = create(
  (set) => ({
    cart: {},
    addItem: (newItem, id) =>
      set((state) => {
        if(state.cart[id]) {
          return {
            cart: {
              ...state.cart,
              [id]: {
                ...state.cart[id],
                quantity: state.cart[id].quantity+newItem.quantity
              }
            }
          }
        } else {
          return { cart: { ...state.cart, [newItem._id]: newItem } };
        }
      }),
    deleteItem: (id) =>
      set((state) => {
        const { [id]: deletedItem, ...rest } = state.cart;
        console.log(rest)
        return { cart: rest };
      }),
  }),
  { getServerSnapshot }
);

export default useCartStore;
