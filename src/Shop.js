import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Shop() {
  useEffect(() => {
    getNerdItems();
  }, []);

  const getNerdItems = async () => {
    const response = await fetch(
      "https://fortnite-api.com/v2/cosmetics/br/new"
    );
    const cosmetics = await response.json();
    console.log(cosmetics);
    setItems(cosmetics.data.items.filter((item) => item.name !== "null"));
  };

  const [items, setItems] = useState([]);

  items.map((item) => <div>{item.name}</div>);
  return (
    <div>
      <h1>Shop</h1>
      {items.map((item) => (
        <div className="item" key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Shop;
