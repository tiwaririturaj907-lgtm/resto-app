import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay">
        <h1>Experience Fine Dining</h1>

        <p>
          Order delicious food, reserve your table and enjoy luxury dining.
        </p>

        <div className="hero-buttons">
          <button className="order-btn">Order Food</button>
          <button className="book-btn">Book Table</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;