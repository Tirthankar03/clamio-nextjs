
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from 'react'

const LikeBtn = () => {
    const [isFavorited, setIsFavorited] = useState(false);

    const toggleFavorite = () => {
      setIsFavorited(!isFavorited);
    };
  return (
    <div className="bg-white rounded-full px-3 py-2">
    <FontAwesomeIcon
      icon={faHeart}
      onClick={toggleFavorite}
      className={`cursor-pointer ${isFavorited ? "text-red-500" : "text-gray-400"}`}
    />
  </div>
  )
}

export default LikeBtn