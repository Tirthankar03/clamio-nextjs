import { payoutData } from "@/constants/data";

const PayoutSection = () => {
    return (
        <main>
            <div>
                <div className="text-4xl font-bold p-4">Payouts</div>
                <div className="flex flex-wrap justify-start gap-4 md:gap-8 w-full p-4">
                    {payoutData.map((data, index) => (
                        <div key={index} className="flex flex-col items-center md:items-start px-6 py-4 border border-black rounded-md bg-white shadow-md gap-8 w-full md:w-auto">
                            <h2 className="text-blue-800 font-semibold text-2xl whitespace-nowrap">{data.title}</h2>
                            <h1 className="text-4xl font-bold whitespace-nowrap">{data.payout}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default PayoutSection;
