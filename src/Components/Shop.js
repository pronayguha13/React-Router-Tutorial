import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Shop() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("https://fortniteapi.io/items/upcoming?lang=en", {
      headers: {
        Authorization: "48c79055-ab74caaf-1f6f4f9d-41941396",
      },
    });

    const items = await data.json();
    console.log(items.items);
    setItems(items.items);
  };

  return (
    <div>
      {items.map((item) => (
        <h1 key={item.id}>
          <Link to={`/shop/${item.id}`}> {item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
