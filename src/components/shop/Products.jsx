import React from "react";
import ProductCard from "./ProductCard";
import useAxios from "../../hooks/useAxios";

const Products = () => {
  const { data, loading, error } = useAxios("https://dummyjson.com/products");
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  console.log(data);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {data?.products?.map((product) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
