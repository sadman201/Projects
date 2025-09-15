import { useEffect, useState } from "react";
import Container from "../global/Container";
import { Minus, Plus, Trash2 } from "lucide-react";
import useAxios from "../../hooks/useAxios";

const Cart = () => {
  const [productsids, setProductsIds] = useState([]);
  const [products, setProducts] = useState([]);

  const { data, loading, error } = useAxios("https://dummyjson.com/products");

  useEffect(() => {
    const savedItems = localStorage.getItem("cartItems");
    if (savedItems) {
      setProductsIds(JSON.parse(savedItems));
    }
  }, []);

  useEffect(() => {
    if (data?.products?.length > 0) {
      const filterd = data?.products?.filter((product) =>
        productsids.includes(product.id)
      );
      console.log(filterd);
      setProducts(filterd);
    } else {
      setProducts([]);
    }
  }, [data, productsids]);

  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>error</h1>;
  }

  return (
    <Container>
      <div>
        <div className="text-xl font-semibold mb-9">All Product in cart</div>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {products?.map((product) => (
                <tr key={product?.id}>
                  <td>{product.title}</td>
                  <td>{product.price} </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <Minus className="cursor-pointer" />
                      <span className="text-lg bg-red-500 w-8 h-8 text-white flex justify-center items-center rounded-full">
                        1
                      </span>
                      <Plus className="cursor-pointer" />
                    </div>
                  </td>
                  <td>
                    <Trash2 />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
