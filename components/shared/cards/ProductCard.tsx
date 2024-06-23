// src/components/shared/cards/ProductCard.tsx
"use client";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import LikeBtn from "../LikeBtn";
import Link from "next/link";

interface ProductCardProps {
  id: string
  productName: string;
  name: string;
  stars: string;
  price: string;
  imageUrl: string;
}

const ProductCard = ({ id, productName, name, stars, price, imageUrl }: ProductCardProps) => {
  return (
    <div className="relative bg-white border border-gray-300 rounded-lg overflow-hidden text-black w-full shadow-lg ">
      <div className="absolute top-2 right-2">
        <LikeBtn />
      </div>
      <Link href={`/product/${id}`}>
        <Image
          src={imageUrl}
          alt="product card"
          width={1000}
          height={1000}
          className="cursor-pointer"
        />
      </Link>
      <div className="p-4">
        <div className="flex items-center mt-2 grid grid-cols-2 ">
          <div className="text-lg font-semibold">{productName}</div>
          <div className="text-right ">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-gray-600 cursor-pointer "
            />
          </div>
        </div>
        <div className="flex items-center mt-2">
          <div className="bg-yellow-500 rounded-full h-4 w-4"></div>
          <div className="ml-2 text-semibold"><Link href="/creator/1" className="text-lg">{name}</Link></div>
        </div>
        <div className="flex items-center mt-2">
          <div className="text-sm">★ {stars}(1k)</div>
        </div>
        <div className="text-lg font-bold mt-2">{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
