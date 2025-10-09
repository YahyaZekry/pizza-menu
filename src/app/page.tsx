'use client';

import { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Toast from './components/Toast';
import { ErrorBoundary } from './components/ErrorBoundary';
import { useCartStore } from '@/lib/store';
import { Notification } from '@/lib/types';
import { generateId } from '@/lib/utils';

export default function Home() {
  const { isOpen: cartIsOpen, closeCart } = useCartStore();
  const [notification, setNotification] = useState<Notification | null>(null);

  const showNotification = (type: Notification['type'], title: string, message?: string, duration?: number) => {
    setNotification({
      id: generateId(),
      type,
      title,
      message,
      duration,
    });
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <ErrorBoundary>
      <div className="container">
        <Header onCartToggle={() => useCartStore.getState().toggleCart()} />
        <Menu />
        <Footer />

        <Cart
          isOpen={cartIsOpen}
          onClose={closeCart}
        />

        <Toast
          notification={notification}
          onClose={closeNotification}
        />
      </div>
    </ErrorBoundary>
  );
}
