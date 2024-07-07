// src/app/cart/page.tsx
'use client'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/Store/store';
import { updateQuantity, removeFromCart } from '@/utils/cartSlice';
import Image from 'next/image';

export default function CartPage() {
    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const handleQuantityChange = (id: number, amount: number) => {
        dispatch(updateQuantity({ id, amount }));
    };

    const handleRemove = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalCost = items.reduce((acc, item) => acc + item.quantity * parseFloat(item.price.slice(1)), 0);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
                <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="md:col-span-2">
                        {items.map(item => (
                            <div key={item.id} className="grid grid-cols-4 items-center border-b py-4">
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
                                    <button className="text-red-500 mt-2" onClick={() => handleRemove(item.id)}>Remove</button>
                                </div>
                                <div className="col-span-1 flex justify-center">
                                    <button onClick={() => handleQuantityChange(item.id, -1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item.id, 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                                </div>
                                <div className="col-span-1 text-right">
                                    ${(item.quantity * parseFloat(item.price.slice(1))).toFixed(2)}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        <div className="flex justify-between mb-2">
                            <span>Items ({totalItems}):</span>
                            <span>${totalCost.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Shipping:</span>
                            <span>$5.00</span>
                        </div>
                        <div className="flex justify-between font-bold">
                            <span>Total:</span>
                            <span>${(totalCost + 5.00).toFixed(2)}</span>
                        </div>
                        <button className="w-full bg-primary text-white py-2 mt-4 rounded-lg hover:bg-primary-dark transition duration-300">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
