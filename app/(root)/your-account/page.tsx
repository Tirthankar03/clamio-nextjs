import { accounts } from "@/constants/data"
import Image from "next/image"

export default function Page() {
    return (
        <div className="w-5/6 md:w-5/6 lg:w-5/6 xl:w-3/5 mx-auto my-10">
            <h1 className="text-4xl font-bold mb-10">Your Account</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {accounts.map((account) => (
                    <div key={account.id} className="flex shadow-md hover:shadow-lg transition duration-300 p-4">
                        <div className="w-20 h-20 flex-shrink-0 justify-center">
                            <Image src={account.image_url} alt="" width={80} height={80} className="object-cover rounded-full" />
                        </div>
                        <div className="ml-4">
                            <h2 className="text-2xl font-semibold">{account.title}</h2>
                            <p className="text-lg text-gray-700">{account.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
