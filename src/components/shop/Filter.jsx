import { useEffect } from "react";
import { useForm } from "react-hook-form";

const Filter = ({ handleGetFilterValue }) => {
  const { register, watch } = useForm();

  const selectedFilter = watch("sortBy");

  useEffect(() => {
    handleGetFilterValue(selectedFilter);
  }, [selectedFilter, handleGetFilterValue]);

  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold text-gray-600">Filter Products</h1>
        <form className="mt-6 space-y-4">
          <div className="flex items-center gap-3 border border-gray-500 p-2 rounded-2xl">
            <input
              {...register("sortBy")}
              value="lowToHigh"
              type="radio"
              className="radio radio-neutral"
            />
            <label>low to high</label>
          </div>
          <div className="flex items-center gap-3 border border-gray-500 p-2 rounded-2xl">
            <input
              type="radio"
              {...register("sortBy")}
              value="highToLow"
              className="radio radio-neutral"
            />
            <label>high to low</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
