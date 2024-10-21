import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../pages/Store';

interface CartItem extends Product {
  quantity: number; // Para manter a quantidade de cada item no carrinho
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++; // Se o produto já existe, aumenta a quantidade
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Senão, adiciona um novo produto com quantidade 1 :)
      }
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++; // Aumenta a quantidade do produto
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload);
      if (itemIndex !== -1) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity--; // Diminui a quantidade se for maior que 1
        } else {
          state.items.splice(itemIndex, 1); // senão, remove o item do carrinho
        }
      }
    },
    clearCart: (state) => {
      state.items = []; // Limpa o carrinho todo >:)
    },
  },
});

export const { addItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
