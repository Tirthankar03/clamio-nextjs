import PayoutSection from "@/components/shared/Payouts/payoutSection";
import LineChart from "@/components/shared/Payouts/lineChart";
export default function Page() {
    return (
        <main className="justify-start items-center min-h-screen w-5/6 mx-auto">
            <PayoutSection />
            <LineChart />
        </main>
    );
}
