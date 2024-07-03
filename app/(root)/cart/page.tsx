'use client';

import { useState } from 'react';

export default function CartPage() {
    const [items, setItems] = useState([
        { id: 1, name: 'Fifa 19', quantity: 2, price: 44.00, total: 88.00 },
        { id: 2, name: 'Glacier White 500GB', quantity: 1, price: 249.99, total: 249.99 },
        { id: 3, name: 'Platinum Headset', quantity: 1, price: 119.99, total: 119.99 },
    ]);

    const handleQuantityChange = (id: number, amount: number) => {
        setItems(prevItems => prevItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + amount, total: (item.quantity + amount) * item.price } : item
        ));
    };

    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalCost = items.reduce((acc, item) => acc + item.total, 0) + 5.00; // Adding shipping cost

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
                <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="col-span-2">
                        {items.map(item => (
                            <div key={item.id} className="flex items-center justify-between border-b py-4">
                                <div className="flex items-center w-1/3">
                                    <img src={`/images/${item.name.toLowerCase().replace(/ /g, '-')}.jpg`} alt={item.name} className="w-20 h-20 object-cover mr-4" />
                                    <div>
                                        <h2 className="text-lg font-medium">{item.name}</h2>
                                        <p className="text-gray-500">PS4</p>
                                        <button className="text-red-500 mt-2">Remove</button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center w-1/3">
                                    <button onClick={() => handleQuantityChange(item.id, -1)} className="px-2 py-1 bg-gray-200">-</button>
                                    <span className="px-4">{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item.id, 1)} className="px-2 py-1 bg-gray-200">+</button>
                                </div>
                                <div className="text-right w-1/3">
                                    <p className="text-lg font-medium">£{item.price.toFixed(2)}</p>
                                    <p className="text-gray-500">Total: £{item.total.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                        <button className="text-blue-500 mt-4">← Continue Shopping</button>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                        <div className="mb-4">
                            <p className="flex justify-between">
                                <span>Items</span>
                                <span>{totalItems}</span>
                            </p>
                            <p className="flex justify-between">
                                <span>Shipping</span>
                                <span>£5.00</span>
                            </p>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="promo-code" className="block text-gray-700">Promo Code</label>
                            <input id="promo-code" type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                            <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg">Apply</button>
                        </div>
                        <div className="border-t pt-4">
                            <p className="flex justify-between font-medium text-lg">
                                <span>Total Cost</span>
                                <span>£{totalCost.toFixed(2)}</span>
                            </p>
                        </div>
                        <button className="mt-4 w-full bg-purple-500 text-white py-2 rounded-lg">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
