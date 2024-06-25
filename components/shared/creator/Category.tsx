import { categoryData } from "@/constants/constants";
import React from "react";

function Category() {
  return (
    <div className="flex gap-10 justify-center py-10">
      {categoryData.map((category) => (
        <button className="font-semibold px-5 text-sm py-3 rounded-lg bg-zinc-200 text-black ">
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default Category;
