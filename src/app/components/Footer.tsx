'use client';

import { useState, useEffect } from 'react';
import { businessHours } from '@/lib/data';

export default function Footer() {
  const hour = new Date().getHours();
  const { openHour, closeHour } = businessHours;
  const isOpen = hour >= openHour || hour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? <Order closeHour={closeHour} /> : <p>Closed</p>}
    </footer>
  );
}

function Order({ closeHour }: { closeHour: number }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="order">
      <p>We are open until {closeHour}:00am</p>
      <p>Now it is {time.toLocaleTimeString()}</p>
      <button className="btn">Order</button>
    </div>
  );
}
