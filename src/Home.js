import React from "react";
import FilterNav from "./FilterNav";
import ItemCard from "./ItemCard";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Home = ({ cart, setCart }) => {
  const [items, setItems] = useState([]);
  const [navFilter, setNavFilter] = useState("all");

  useEffect(() => {
    const api = "http://localhost:3000/api/v1/items/";

    axios.get(api).then(res => {
      filterItems(res.data);
    });
    // eslint-disable-next-line 
  }, [navFilter]);

  const filterItems = items => {
    switch (navFilter) {
      case("merch"):
        let merch = items.filter(item => item.item_type === "merch");
        setItems(merch);
        break;
      case("wings"):
        let wings = items.filter(({item_type}) => (item_type === "bone-in wing" || item_type === "bone-less wing"));
        setItems(wings)
        break;
      case("side"):
        let sides = items.filter(item => item.item_type === "side");
        setItems(sides);
        break;
      default:
        setItems(items);
        break;
    };
  };

  return (
    <>
      <FilterNav setNavFilter={setNavFilter} />
      {items.map(item => (
        <ItemCard cart={cart} setCart={setCart} key={item.id} item={item} />
      ))}
    </>
  );
};

export default Home;
