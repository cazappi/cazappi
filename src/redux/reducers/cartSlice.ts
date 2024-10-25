import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../pages/Store';

interface CartItem extends Product {
  quantity: number; // Para manter a quantidade de cada item no carrinho
}

export interface StoreInfo {
  name: string;
  shopkeeperId: string;
  deliveryFee: number;
  pickup: boolean;
  delivery: boolean;
}

interface CartState {
  items: CartItem[];
  storeInfo: StoreInfo | null; // Informações da loja dos produtos no carrinho
}

const initialState: CartState = {
  items: [],
  storeInfo: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<{ product: Product; store: StoreInfo }>
    ) => {
      const { product, store } = action.payload;

      if (!state.storeInfo) {
        state.storeInfo = store; // Set the storeInfo if it's the first item
      }

      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...product, quantity: 1 });
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
      state.storeInfo = null; // Limpa as informações da loja também! >:D
    },
  },
});

export const { addItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
