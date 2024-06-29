// src/pages/index.tsx
import HorizontalScrollfirst from "@/components/shared/HorizontalScroll";
import ProductList from "@/components/shared/products/ProductList";
import { TopSellingproductData, HotNewproductData } from "@/constants/constants";

export default function Home() {
    return (
        <main>
            <div className="bg-secondary text-white min-h-screen">
                <br />
                <br />
                <div className="transition-all duration-500 ease-in-out ">
                    <HorizontalScrollfirst />

                    <div className="grid gap-4 px-4 w-11/12 md:w-5/6 mx-auto pb-10">
                        <ProductList products={TopSellingproductData} title="Top Selling Products" />
                        <ProductList products={HotNewproductData} title="Hot and New Products" />
                        <ProductList products={TopSellingproductData} title="People's choice" />
                    </div>
                </div>
            </div>
        </main>
    );
}
