import React from 'react';

const OrderCard = ({ order }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 mb-4 bg-white">
            <div className="flex justify-between">
                <div>
                    <p className="text-sm text-gray-600">ORDER PLACED</p>
                    <p className="font-medium">{order.date}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-600">TOTAL</p>
                    <p className="font-medium">{order.total}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-600">SHIP TO</p>
                    <p className="font-medium">{order.shipTo}</p>
                </div>
                <div>
                    <a href="#" className="text-blue-500">View order details</a>
                    <br />
                    <a href="#" className="text-blue-500">Invoice</a>
                </div>
            </div>
            <div className="mt-4">
                {order.status && <p className="text-sm text-yellow-600">{order.status}</p>}
                <div className="flex items-center mt-2">
                    <img src={order.imgUrl} alt={order.productName} className="w-16 h-16 object-cover" />
                    <div className="ml-4">
                        <p className="font-medium">{order.productName}</p>
                        <div className="flex space-x-4 mt-2">
                            <button className="bg-yellow-500 text-white px-4 py-2 rounded">Buy it again</button>
                            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded">View your item</button>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <button className="text-blue-500">View Return/Refund Status</button>
                    <button className="text-blue-500 ml-4">Write a product review</button>
                </div>
            </div>
            <button className="text-blue-500 mt-4">Archive order</button>
        </div>
    );
};

export default OrderCard;
