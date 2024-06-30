// src/pages/index.tsx
import HorizontalScrollfirst from "@/components/shared/HorizontalScroll";
import FilteredProductList from '@/components/shared/products/ProductFilter';

export default function Home() {
    return (
        <main>
            <div className="bg-secondary text-white min-h-screen">
                <br />
                <br />
                <div className="transition-all duration-500 ease-in-out ">
                    <HorizontalScrollfirst />
                    <FilteredProductList />
                </div>
            </div>
        </main>
    );
}
