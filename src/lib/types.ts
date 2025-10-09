export interface Pizza {
  id: string;
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
}

export interface BusinessHours {
  openHour: number;
  closeHour: number;
}

export interface CartItem {
  pizza: Pizza;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
  total: number;
  itemCount: number;
}

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
}

export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textMuted: string;
    border: string;
    success: string;
    error: string;
    warning: string;
  };
}
