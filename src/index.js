import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>The Perfect PizzaPlace</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      {pizzaData ? (
        <>
          <h2> Our Menu!</h2>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} {...pizza} />
            ))}
          </ul>
        </>
      ) : null}
    </main>
  );
}

function Pizza({ name, ingredients, price, photoName, soldOut }) {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <span>Ingredients:{ingredients}</span>
        <span>{soldOut ? "Sold out" : `$${price}`}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 2;
  const isOpen = hour >= openHour || hour < closeHour;
  // console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? <Order closeHour={closeHour} /> : <p>Closed</p>}
    </footer>
  );
}

function Order({ closeHour }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="order">
      <p>We're open until {closeHour}:00am</p>
      <p>Now it's {time.toLocaleTimeString()}</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
