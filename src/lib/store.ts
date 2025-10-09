import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartState, CartItem, Pizza } from './types';

interface CartStore extends CartState {
  addItem: (pizza: Pizza) => void;
  removeItem: (pizzaId: string) => void;
  updateQuantity: (pizzaId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      total: 0,
      itemCount: 0,

      addItem: (pizza: Pizza) => {
        set((state) => {
          const existingItem = state.items.find(item => item.pizza.id === pizza.id);

          let newItems: CartItem[];
          if (existingItem) {
            newItems = state.items.map(item =>
              item.pizza.id === pizza.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            newItems = [...state.items, { pizza, quantity: 1 }];
          }

          const total = newItems.reduce((sum, item) => sum + (item.pizza.price * item.quantity), 0);
          const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

          return {
            items: newItems,
            total,
            itemCount,
          };
        });
      },

      removeItem: (pizzaId: string) => {
        set((state) => {
          const newItems = state.items.filter(item => item.pizza.id !== pizzaId);
          const total = newItems.reduce((sum, item) => sum + (item.pizza.price * item.quantity), 0);
          const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

          return {
            items: newItems,
            total,
            itemCount,
          };
        });
      },

      updateQuantity: (pizzaId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(pizzaId);
          return;
        }

        set((state) => {
          const newItems = state.items.map(item =>
            item.pizza.id === pizzaId
              ? { ...item, quantity }
              : item
          );
          const total = newItems.reduce((sum, item) => sum + (item.pizza.price * item.quantity), 0);
          const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

          return {
            items: newItems,
            total,
            itemCount,
          };
        });
      },

      clearCart: () => {
        set({
          items: [],
          total: 0,
          itemCount: 0,
        });
      },

      toggleCart: () => {
        set((state) => ({
          isOpen: !state.isOpen,
        }));
      },

      openCart: () => {
        set({ isOpen: true });
      },

      closeCart: () => {
        set({ isOpen: false });
      },
    }),
    {
      name: 'pizza-cart-storage',
      partialize: (state) => ({
        items: state.items,
        total: state.total,
        itemCount: state.itemCount,
      }),
    }
  )
);
