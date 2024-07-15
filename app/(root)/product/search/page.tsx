import HorizontalScrollfirst from "@/components/shared/HorizontalScroll";
import Search from "@/components/shared/products/Search"
export default function search() {
    return (
        <main>
            <div className="bg-secondary text-white min-h-screen">
                <br />
                <br />
                <div className="transition-all duration-500 ease-in-out">
                    <HorizontalScrollfirst />
                    <Search />
                </div>
            </div>
        </main>
    );
}
