import Container from "../global/Container";
import Filter from "./Filter";
import Products from "./Products";

const Shop = () => {
  return (
    <Container>
      <div className="flex gap-6">
        <div className="bg-red-400 w-3/12">
          <Filter />
        </div>
        <div className="">
          <Products />
        </div>
      </div>
    </Container>
  );
};

export default Shop;
