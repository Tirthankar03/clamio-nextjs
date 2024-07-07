
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import React, { useState } from 'react'
import { toast } from 'sonner';

const LikeBtn = () => {
  const isLoggedIn = useSelector((store: RootState) => store.user.isLoggedIn);
    const [isFavorited, setIsFavorited] = useState(false);

    const toggleFavorite = () => {

      if (isLoggedIn) {       
        setIsFavorited(!isFavorited);
        toast.success('added to wishlist!')
      }else{
        toast.warning('you need to login first!')
      }
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