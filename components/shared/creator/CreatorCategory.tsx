import React from 'react';

type CreatorCategoryProp = {
    name: string,
    image: string
}

const CreatorCategory = ({ name, image }: CreatorCategoryProp) => {
  return (
    <button className="bg-black text-xs w-40 h-16 sm:w-48 sm:h-16 md:w-60 md:h-16 text-white font-semibold py-3 px-7 rounded-md m-2 hover:bg-gray-700 flex items-center">
      {image && <img className=' w-6 h-6 md:w-8 md:h-8 mr-2' src={image} alt={`${name} icon`} />}
      {name}
    </button>
  );
};

export default CreatorCategory;
