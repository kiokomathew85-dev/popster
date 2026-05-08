import { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

const sampleProducts = [
  { id: 1, name: "Apple", category: "Fruits" },
  { id: 2, name: "Banana", category: "Fruits" },
  { id: 3, name: "Carrot", category: "Vegetables" },
  { id: 4, name: "Milk", category: "Dairy" },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts =
    category === "All"
      ? sampleProducts
      : sampleProducts.filter(
          (product) => product.category === category
        );

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Shopping App</h1>

      <DarkModeToggle
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <br />
      <br />

      <select
        aria-label="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        products={filteredProducts}
        addToCart={addToCart}
      />

      <Cart cart={cart} />
    </div>
  );
}

export default App;