import { categoryData } from "@/app/utils/constants";
import React from "react";

function Category() {
  return (
    <div className="flex gap-10 justify-center py-10">
      {categoryData.map((category) => (
        <button className="font-semibold px-5 text-sm py-3 rounded-lg bg-white text-black ">
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default Category;
