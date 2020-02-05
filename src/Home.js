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
    if (navFilter === "all") {
      setItems(items);
      console.log('all filter is being used');
      
    }
    if (navFilter === "wings") {
      let boneInWings = items.filter(
       item => item.item_type === "bone-in wing"
      );
      let boneLessWings = items.filter(item => item.item_type === "bone-less wing");
      let wings = boneInWings.concat(boneLessWings)
      setItems(wings)
      console.log('wings filter is being used');
    }
    if (navFilter === "side") {
      let sides = items.filter(item => item.item_type === "side");
      setItems(sides);
      console.log('side filter is being used');
    }
    if (navFilter === "merch") {
      let merch = items.filter(item => item.item_type === "merch");
      setItems(merch);
      console.log('merch filter is being used');
    }
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
