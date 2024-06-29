import Add from "@/public/assets/creator-login-img/Add.png";
import Image from "next/image";
import LineChart from "@/components/shared/creator-login/LineChart";
import "@/app/dashboard/creator-login/page.css"
import Link from 'next/link'

const Page: React.FC = () => {
    return (
        <main>
            <div className="justify-start items-center min-h-screen w-5/6 mx-auto">
                <div className="flex flex-col">
                    <div className="font-semibold text-4xl">It’s time to create something new</div>
                    <section className="mt-10">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                            <div className="col-span-3 bg-secondary content-center">
                                <div className="hidden lg:block px-8 text-white text-xl md:text-4xl lg:text-5xl 2xl:text-6xl text-bold transition-container">
                                    <h1 className="transition-item delay-0">WELCOME</h1>
                                    {/* <h1 className="transition-item delay-1"></h1> */}
                                    <h1 className="transition-item delay-2 mt-4"><span className="text-primary">ONBOARD  </span>CREATOR</h1>
                                </div>
                            </div>
                            <div className="flex flex-col col-span-1 pt-20 pb-20 md:pt-60 pb-20 bg-secondary rounded-lg items-center justify-center">
                                <div className="text-2xl md:text-4xl text-bold block md:hidden">
                                    {/* <h1 className="text-white"></h1> */}
                                    {/* <h1 className="transition-item delay-1"></h1> */}
                                    <h1 className=" text-white mb-16">WELCOME <span className="text-primary">ONBOARD  </span>CREATOR</h1>
                                </div>
                                <div className="mb-8">
                                    <Link href="/dashboard/product">
                                        <button type="button" className="bg-primary rounded-sm">
                                            <Image src={Add} alt="add.img" width={80} />
                                        </button>
                                    </Link>

                                </div>
                                <div className="">
                                    <Link href="/dashboard/product">
                                        <button type="button" className="bg-primary px-4 py-2 md:px-8 md:py-4 rounded-lg text-bold">
                                            Create your product
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <LineChart />
            </div >
        </main >
    );
}

export default Page;
