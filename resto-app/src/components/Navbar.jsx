import "./Navbar.css";

function Navbar({
  cartCount,
  openCart,
  openLogin,
}) {
  return (
    <nav className="navbar">
      <div className="logo">𝐇𝐀𝐑𝐈𝐓मां</div>

      <ul className="nav-links">
  <li><a href="#hero">Home</a></li>
  <li><a href="#menu">Menu</a></li>
  <li><a href="#booking">Book Table</a></li>
  <li><a href="#reviews">Reviews</a></li>
  <li><a href="#gallery">Gallery</a></li>
</ul> 
<button
  className="login-btn"
  onClick={openLogin}
>
  Login
</button>
      <button
  className="login-btn"
  onClick={openCart}
>
  Cart ({cartCount})
</button>
    </nav>
  );
}

export default Navbar;