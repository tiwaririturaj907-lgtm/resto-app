import "./Menu.css";
import { useState } from "react";
function Menu({ addToCart }) {
const [filter, setFilter] = useState("All");
const [search, setSearch] = useState("");
   const foods = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: "₹299",
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
  },
  {
    id: 2,
    name: "Burger Deluxe",
    price: "₹249",
    category: "Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
  },
  {
    id: 3,
    name: "Pasta Alfredo",
    price: "₹349",
    category: "Pasta",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600",
  },
  {
    id: 4,
    name: "Chicken Biryani",
    price: "₹399",
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?w=600",
  },
  {
    id: 5,
    name: "Paneer Tikka",
    price: "₹279",
    category: "Tikka",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600",
  },
  {
    id: 6,
    name: "Veg Momos",
    price: "₹149",
    category: "Momos",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600",
  },
  {
    id: 7,
    name: "Chocolate Cake",
    price: "₹199",
    category: "Cake",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
  },
  {
    id: 8,
    name: "Cold Coffee",
    price: "₹129",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",
  },
];
const filteredFoods = foods.filter((food) => {
  const matchesCategory =
    filter === "All" || food.category === filter;

  const matchesSearch =
    food.name
      .toLowerCase()
      .includes(search.toLowerCase());

  return matchesCategory && matchesSearch;
});
  return (
    <section id="menu" className="menu">
      <h2>Our Special Menu</h2>
<div className="filter-buttons">
  <button onClick={() => setFilter("All")}>All</button>
  <button onClick={() => setFilter("Pizza")}>Pizza</button>
  <button onClick={() => setFilter("Burger")}>Burger</button>
  <button onClick={() => setFilter("Pasta")}>Pasta</button>
  <button onClick={() => setFilter("Biryani")}>Biryani</button>
<button onClick={() => setFilter("Tikka")}>Tikka</button>
<button onClick={() => setFilter("Momos")}>Momos</button>
<button onClick={() => setFilter("Cake")}>Cake</button>
<button onClick={() => setFilter("Coffee")}>Coffee</button>
</div>
<input
  type="text"
  placeholder="Search food..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="search-box"
/>
      <div className="food-grid">
        { filteredFoods.map((food) => (
          <div className="food-card" key={food.id}>
            <img src={food.image} alt={food.name} />

            <h3>{food.name}</h3>

            <p>{food.price}</p>

            <button onClick={() => addToCart(food)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;