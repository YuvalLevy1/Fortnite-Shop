import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./App.css";

function ShopItem() {
  const { id } = useParams();

  const [item, setItem] = useState({ images: {} });

  const getNerdItem = async (id) => {
    const response = await fetch(
      `https://fortnite-api.com/v2/cosmetics/br/${id}`
    );
    const cosmetic = await response.json();
    console.log(cosmetic);
    setItem(cosmetic.data);
  };

  useEffect(() => {
    getNerdItem(id);
  }, [id]);

  return (
    <>
      <div>{item.name}</div>
      <img src={item.images.icon} />
    </>
  );
}
export default ShopItem;
