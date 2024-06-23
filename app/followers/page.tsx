import Charts from "@/components/shared/Followers/Charts";
import TopFans from "@/components/shared/Followers/TopFans"
function Page() {
    return (
        <div className="min-h-screen bg-white">
            <button type='button' className='w-5/6 sm:w-fit p-4 rounded-lg mt-10 sm:px-20 sm:text-2xl mx-auto text-primary text-xl block md:hidden font-bold text-center text-yellow-400 bg-gray-600'>Refer and Earn</button>
            <main className="w-5/6 mx-auto">
                <TopFans />
                <Charts />
            </main>
        </div>
    );
}
export default Page;
