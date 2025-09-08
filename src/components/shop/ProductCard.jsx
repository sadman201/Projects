import pi from "../../assets/images/i1.jpg";
const ProductCard = ({ product }) => {
  return (
    <div className=" relative ">
      <div>
        <div className="w-full h-40 relative">
          <img
            src={pi}
            alt="productImage"
            className="w-full h-full rounded-t-xl object-cover "
          />
          <div className="bg-black w-full h-full opacity-30 rounded-t-xl absolute top-0 "></div>
        </div>
        <div className="mt-3">
          <h1 className="text-xl">{product.title}</h1>
        </div>
        <div className="text-gray-500 flex items-center gap-2">
          <del>$200</del>
          <span>${product?.price}</span>
        </div>
        <div className="flex w-8 h-8 bg-red-500 shadow-2xl items-center justify-center rounded-full text-white text-xs absolute top-3 right-3">
          <span>{product.discountPercentage.toFixed(0)}%</span>
        </div>
        <div className="mt-4 space-y-3">
          <button className="btn btn-primary w-full text-sm">
            Add to Cart
          </button>
          <button className="btn btn-outline w-full text-sm">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
