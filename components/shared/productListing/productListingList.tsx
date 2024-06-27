import { productListings } from "@/constants/data";
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Edit from "@/public/assets/productListing-img/edit.png"

const ProductListingPage = () => {
    return (
        <main>
            <div className=" w-5/6 mx-auto">
                <div className="text-4xl text-bold mb-10">Product Listing</div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-2 mt-4 gap-4">
                    {productListings.map((product, index) => (
                        <div key={index}>
                            <div className="relative bg-white border border-gray-300 rounded-lg overflow-hidden text-black w-full shadow-lg h-108 flex flex-col justify-between">
                                <button type="button">
                                    <div className="absolute top-6 right-6">
                                        <Image src={Edit} alt="edit.png" />
                                    </div>
                                </button>
                                <Link href="">
                                    <Image
                                        src={product.imageUrl}
                                        alt="product card"
                                        width={1000}
                                        height={1000}
                                        className="cursor-pointer object-cover h-64 w-full p-4 pb-0"
                                    />
                                </Link>
                                <div className="p-4 flex flex-col justify-between flex-grow ">
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <div className="text-lg font-semibold">{product.name}</div>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <div className="">{product.stars}</div>
                                            <div className="">{product.reviews}</div>
                                            <div className="">({product.noReviews})</div>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <div className="text-sm">{product.description}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </main>
    )

}
export default ProductListingPage;
