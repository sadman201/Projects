import {  useState } from "react";
import Container from "../global/Container";
import Filter from "./Filter";
import Products from "./Products";

const Shop = () => {
  const [filterValue, setFilterValue] = useState("");
  const handleGetFilterValue = (value) => {
    setFilterValue(value);
  };



  return (
    <Container>
      <div className="flex gap-6">
        <div className=" w-3/12">
          <Filter handleGetFilterValue={handleGetFilterValue} />
        </div>
        <div className="">
          <Products filterValue={filterValue} />
        </div>
      </div>
    </Container>
  );
};

export default Shop;
