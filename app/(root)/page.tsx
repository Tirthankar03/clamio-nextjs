import HorizontalScrollfirst from "@/components/shared/HorizontalScroll";
import ProductCard from "@/components/shared/cards/ProductCard";
import { Button } from "@/components/ui/button";
// import Image from "next/image";

export default function Home() {
  return <main>
        <div className="bg-secondary text-white min-h-screen">
            <br />
            {/* <NavbarTwo onToggle={handleToggle} /> */}
            <br />
            <br />
            <div className={`transition-all duration-500 ease-in-out
              
               `
               }>
                <HorizontalScrollfirst />

                <div className="grid gap-4 px-4 w-5/6 mx-auto">
                    <div className="grid grid-cols-2 py-10">
                        <div className="text-left text-xl md:text-2xl">Top Selling Product</div>
                        <div className="text-right">
                            <button type="button" className="text-white bg-secondary border border-white rounded-lg px-6 py-2">
                                View All
                            </button>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-2 gap-4 w-full mx-auto">
                        <ProductCard productName="Beverage Animation" name="David Jackoff" stars="4.7" price="$25" />
                        <ProductCard productName="Beverage Animation" name="David Jackoff" stars="4.7" price="$25" />
                        <ProductCard productName="Beverage Animation" name="David Jackoff" stars="4.7" price="$25" />
                        <ProductCard productName="Beverage Animation" name="David Jackoff" stars="4.7" price="$25" />
                    </div>

                    <div className="grid grid-cols-2 py-10">
                        <div className="text-left text-xl md:text-2xl">Hot and New Product</div>
                        <div className="text-right">
                            <button type="button" className="text-white bg-secondary border border-white rounded-lg px-6 py-2">
                                View All
                            </button>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-2 gap-4 w-full mx-auto">
                        <ProductCard productName="Beverage Animation" name="David Jackoff" stars="4.7" price="$25" />
                        <ProductCard productName="Beverage Animation" name="David Jackoff" stars="4.7" price="$25" />
                        <ProductCard productName="Beverage Animation" name="David Jackoff" stars="4.7" price="$25" />
                        <ProductCard productName="Beverage Animation" name="David Jackoff" stars="4.7" price="$25" />
                    </div>

                    <div className="grid grid-cols-2 py-10">
                        <div className="text-left text-xl md:text-2xl">Top Selling Product</div>
                        <div className="text-right">
                            <button type="button" className="text-white bg-secondary border border-white rounded-lg px-6 py-2">
                                View All
                            </button>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-2 gap-4 w-full mx-auto">
                        <ProductCard productName="Beverage Animation" name="David Jackoff" stars="4.7" price="$25" />
                        <ProductCard productName="Beverage Animation" name="David Jackoff" stars="4.7" price="$25" />
                        <ProductCard productName="Beverage Animation" name="David Jackoff" stars="4.7" price="$25" />
                        <ProductCard productName="Beverage Animation" name="David Jackoff" stars="4.7" price="$25" />
                    </div>
                </div>
            </div>
        </div>
  </main>;
}
