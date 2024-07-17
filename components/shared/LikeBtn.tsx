import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/Store/store";
import React, { useState } from 'react';
import { toast } from 'sonner';
import { addToWishlist } from '@/utils/wishlistSlice';

interface LikeBtnProps {
  product: {
    id: number;
    productName: string;
    name: string;
    stars: string;
    price: string;
    imageUrl: string;
  };
}

const LikeBtn: React.FC<LikeBtnProps> = ({ product }) => {
  // const isLoggedIn = useSelector((store: RootState) => store.user.isLoggedIn);
  const dispatch = useDispatch();
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    // if(isLoggedIn){}

    setIsFavorited(!isFavorited);
    dispatch(addToWishlist(product));
    toast.success('Added to Favourites!');

    // } else {
    //   toast.warning('You need to login first!');
    // }
  };

  return (
    <div className="bg-white rounded-full px-3 py-2">
      <FontAwesomeIcon
        icon={faHeart}
        onClick={toggleFavorite}
        className={`cursor-pointer ${isFavorited ? "text-red-500" : "text-gray-400"}`}
      />
    </div>
  );
};

export default LikeBtn;
