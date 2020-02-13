import React from "react";
import FilterNav from "./FilterNav";
import { itemsArr } from './components/Images';
import ItemCard from "./ItemCard";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Home = ({ cart, setCart }) => {
  const [items, setItems] = useState([]);
  const [navFilter, setNavFilter] = useState("");

  useEffect(() => {
    const api = "http://localhost:3000/api/v1/items/";

    axios.get(api).then(({ data }) => {
      const formattedData = data.map((itemObj, idx) => ({...itemObj, item_image: itemsArr[idx]}));
      setItems(formattedData);
    });
  }, []);

  return (
    <>
      <FilterNav setNavFilter={setNavFilter} />
      <div className={'home__container'}>
        {items
          .filter(({ item_type }) => item_type.includes(navFilter))
          .map((item, index) => (
            <ItemCard
              index={index}
              cart={cart}
              setCart={setCart}
              key={item.id}
              item={item}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
