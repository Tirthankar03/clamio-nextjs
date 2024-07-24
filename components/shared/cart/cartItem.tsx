'use client';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '@/utils/cartSlice';
import Image from 'next/image';

function CartItem({ item  }:any) {
    const dispatch = useDispatch();

    const handleQuantityChange = (amount:any) => {
        if (item.quantity + amount >= 0) {
            dispatch(updateQuantity({ id: item.id, amount }));
        }
    };

    const handleRemove = () => {
        dispatch(removeFromCart(item.id));
    };

    return (
        <div className="grid grid-cols-4 gap-3  items-center border-b py-4">
            <div className="col-span-1 flex justify-center">
                <Image
                    src={item.imageUrl}
                    alt={item.productName}
                    width={80}
                    height={80}
                    className="object-cover"
                />
            </div>
            <div className="col-span-1">
                <h2 className="text-lg font-medium truncate">{item.productName}</h2>
                <p className="text-gray-500">{item.name}</p>
                <button className="text-red-500 mt-2" onClick={handleRemove}>Remove</button>
            </div>
            <div className="col-span-1 flex justify-center">
                <button onClick={() => handleQuantityChange(-1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => handleQuantityChange(1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
            </div>
            <div className="col-span-1 text-right">
                ${(item.quantity * parseFloat(item.price.slice(1))).toFixed(2)}
            </div>
        </div>
    );
}

export default CartItem;
