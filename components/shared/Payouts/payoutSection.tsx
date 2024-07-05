import { payoutData } from "@/constants/data";

const PayoutSection = () => {
    return (
        <main>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold mb-8">Payouts</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {payoutData.map((data, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-semibold">
                                        {data.title}
                                    </h2>
                                    <span className="text-sm text-gray-600">
                                        {data.date}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="text-3xl font-bold">
                                        {data.payout}
                                    </div>
                                    {index === 2 && (
                                        <button
                                            type="button"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            View transactions
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default PayoutSection;
