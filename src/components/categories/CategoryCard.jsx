import React, { useState } from "react";
import { useProductsContext } from "../../contexts";
import { useNavigate } from "react-router";

const CategoryCard = ({
  category: { categoryName, description, categoryImg },
}) => {
  const navigate = useNavigate();
  const { applyFilters } = useProductsContext();
  const [showCategory, setShowCategory] = useState(true);
  const clickHandler = () => {
    applyFilters("categories", [categoryName]);
    navigate("/products", { state: { from: "category" } });
  };
  return (
    <section
      className=" flex flex-col items-center rounded-xl  bg-black/[.06] cursor-pointer gap-3 relative overflow-hidden  categoryContainer"
      onClick={clickHandler}
    >
      <img
        src={categoryImg}
        alt={categoryName}
        loading ="lazy"
        className="rounded-xl h-full w-full object-cover transition-all delay-75 ease-out"
      />
      <div
        className="
             flex flex-col w-full h-full justify-center items-center
            transition-all delay-75 absolute left-0 right-0 bottom-0 top-0 bg-black/[0.3] rounded-xl"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-[--theme-color] shadow-sm px-4 break-words">
  {categoryName}
</h1>
      </div>
    </section>
  );
};

export default CategoryCard;