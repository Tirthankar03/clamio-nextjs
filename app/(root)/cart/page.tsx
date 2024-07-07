'use client'
import { useSelector } from 'react-redux';
import { RootState } from '@/Store/store';
import CartItem from '@/components/shared/cart/cartItem';
import OrderSummary from '@/components/shared/cart/orderSummary';

export default function CartPage() {
    const items = useSelector((state: RootState) => state.cart.items);
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalCost = items.reduce((acc, item) => acc + item.quantity * parseFloat(item.price.slice(1)), 0);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
                <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="md:col-span-2">
                        {items.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>
                    <OrderSummary totalItems={totalItems} totalCost={totalCost} />
                </div>
            </div>
        </div>
    );
}
