import Add from "@/public/assets/creator-login-img/Add.png";
import Image from "next/image";

export default function Page() {
    return (
        <main>
            <div className="justify-start items-center min-h-screen">
                <div className="flex flex-col">
                    <div className="font-semibold text-4xl">It’s time to create something new</div>
                    <section className="bg-primary">
                        <div className="flex flex-col w-5/6 mx-auto justify-center items-center pt-40 pb-20">
                            <div >
                                <Image src={Add} alt="add.img" width={200} />
                            </div>
                            <div>
                                <button className="text-2xl bg-gray-200 mt-10 rounded-lg p-4">Create your product</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
