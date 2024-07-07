'use client';
function OrderSummary({ totalItems, totalCost }: any) {
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
            <button className="w-full bg-primary text-white py-2 mt-4 rounded-lg hover:bg-primary-dark transition duration-300">Proceed to Checkout</button>
        </div>
    );
}

export default OrderSummary;
