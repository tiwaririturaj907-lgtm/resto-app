import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Booking from "./components/Booking";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Login from "./components/Login";
export default function App() {
  const [cart, setCart] = useState([]);
  const [loginOpen, setLoginOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
const addToCart = (food) => {
  const existingItem = cart.find(
    (item) => item.id === food.id
  );

  if (existingItem) {
    setCart(
      cart.map((item) =>
        item.id === food.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setCart([
      ...cart,
      {
        ...food,
        quantity: 1,
      },
    ]);
  }
};

const total = cart.reduce(
  (sum, item) =>
    sum +
    Number(item.price.replace("₹", "")) *
      item.quantity,
  0
);
  return (
    <>
      <Navbar
  cartCount={cart.length}
  openCart={() => setCartOpen(true)}
  openLogin={() => setLoginOpen(true)}
/>

      <Menu addToCart={addToCart} />
      <Hero />
      <Booking />
      <Reviews />
      <Gallery />
      <Footer />

        {cartOpen && (
  <>
    <div
      className="overlay"
      onClick={() => setCartOpen(false)}
    />

    <div className="cart-sidebar">
      <button
        className="close-btn"
        onClick={() => setCartOpen(false)}
      >
        ✕
      </button>

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <>
          {cart.map((item) => (
  <div
  key={item.id}
  className="cart-item"
>
  <span>{item.name}</span>
  <div className="quantity-controls">
    <button
      onClick={() => {
        if (item.quantity === 1) {
          setCart(
            cart.filter(
              (cartItem) =>
                cartItem.id !== item.id
            )
          );
        } else {
          setCart(
            cart.map((cartItem) =>
              cartItem.id === item.id
                ? {
                    ...cartItem,
                    quantity:
                      cartItem.quantity - 1,
                  }
                : cartItem
            )
          );
        }
      }}
    >
      -
    </button>

    <span>{item.quantity}</span>

    <button
      onClick={() =>
        setCart(
          cart.map((cartItem) =>
            cartItem.id === item.id
              ? {
                  ...cartItem,
                  quantity:
                    cartItem.quantity + 1,
                }
              : cartItem
          )
        )
      }
    >
      +
    </button>
  </div>
</div>
          ))}

          <h3 className="cart-total">Total: ₹{total}</h3>

          <button className="checkout-btn">
            Checkout
          </button>
        </>
      )}
    </div>
  </>
)} 
{loginOpen && (
  <>
    <div
      className="overlay"
      onClick={() => setLoginOpen(false)}
    />

    <div className="login-modal">
  <button
    className="close-btn"
    onClick={() => setLoginOpen(false)}
  >
    ✕
  </button>

  <Login />
</div>
  </>
)}     
    </>
  );
}