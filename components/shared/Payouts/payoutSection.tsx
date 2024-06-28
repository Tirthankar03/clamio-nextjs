import { payoutData } from "@/constants/data";

const PayoutSection = () => {
    return (
        <main>
            <div>
                <div className="text-4xl font-bold p-4">Payouts</div>
                <div className="flex flex-wrap justify-start gap-4 md:gap-8 w-full p-4">
                    {payoutData.map((data, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start px-6 py-4 rounded-md bg-white shadow-md gap-8 w-full md:w-auto transform transition duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            <div className="divone grid grid-cols-2 justify-right items-center">
                                <h1 className="text-semibold text-2xl">
                                    {data.title}
                                </h1>
                                <h1 className="text-gray-600 text-sm pl-4">
                                    {data.date}
                                </h1>
                            </div>
                            <div className="divtwo grid grid-cols-2">
                                <div className="text-bold text-4xl">
                                    {data.payout}
                                </div>
                            </div>
                            {index === 2 && (
                                <button type="button" className="">
                                    <div className="text-blue-600 text-semibold">
                                        View transactions
                                    </div>
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default PayoutSection;
