function Cart({ cart, setCart }) {
  const total = cart.reduce(
    (sum, item) =>
      sum +
      Number(item.price.replace("₹", "")) *
        item.quantity,
    0
  );

  return (
    <div
      style={{
        padding: "40px",
        color: "white",
        background: "#111",
        minHeight: "100vh",
      }}
    >
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <h3>Cart is Empty</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                margin: "15px 0",
                padding: "15px",
                border: "1px solid gold",
                borderRadius: "10px",
              }}
            >
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>

          <button>
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;