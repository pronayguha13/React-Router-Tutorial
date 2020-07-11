import React, { useState, useEffect } from "react";
import "./App.css";

const ItemDetails = ({ match }) => {
  const [item, setItem] = useState({
    images: {},
  });

  useEffect(() => {
    fetchItem();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchItem = async () => {
    const data = await fetch(
      `https://fortniteapi.io/items/get?id=${match.params.id}&lang=en`, //dyanamically getting  the id
      {
        headers: {
          Authorization: "48c79055-ab74caaf-1f6f4f9d-41941396",
        },
      }
    );

    const item = await data.json();
    console.log("fetchItem -> item", item.item);
    setItem(item.item);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.icon} alt="" />
    </div>
  );
};

export default ItemDetails;
