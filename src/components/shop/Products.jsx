import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import useAxios from "../../hooks/useAxios";

const Products = ({ filterValue }) => {
  const [productsIds, setProductIds] = useState(() => {
    const savedItems = localStorage.getItem("cartItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  console.log(filterValue);
  const [products, setProducts] = useState([]);

  const { data, loading, error } = useAxios("https://dummyjson.com/products");

  useEffect(() => {
    if (!data?.products) return;

    // [  ]
    let sortedProducts = [...data.products];

    if (filterValue === "lowToHigh") {
      sortedProducts?.sort((a, b) => a.price - b.price);
    } else if (filterValue === "highToLow") {
      sortedProducts?.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  }, [data, filterValue]);
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }

  const handleGetProductId = (id) => {
    if (productsIds.includes(id)) {
      alert("Already added");
      return;
    }

    const updatedCart = [...productsIds, id];
    setProductIds(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {products?.map((product) => (
        <ProductCard
          key={product?.id}
          product={product}
          handleGetProductId={handleGetProductId}
        />
      ))}
    </div>
  );
};

export default Products;
