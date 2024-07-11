'use client';

import { RootState } from "@/Store/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

function OrderSummary({ totalItems, totalCost }: any) {

    const isLoggedIn = useSelector((store: RootState) => store.user.isLoggedIn);

    const router = useRouter();

    const handleClick = () => {

        if (isLoggedIn) {
            toast.success('checking out');
        } else {
            toast.warning('you need to login first');
            setTimeout(() => {
                router.push('/login');
            }, 2000)
        };

    }
    return (
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
            <button className="w-full bg-primary text-white py-2 mt-4 rounded-lg hover:bg-primary-dark transition duration-300" onClick={handleClick}>Proceed to Checkout</button>
        </div>
    );
}

export default OrderSummary;
