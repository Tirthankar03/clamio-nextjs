import HorizontalScrollfirst from "@/components/shared/HorizontalScroll";
import Search from "@/components/shared/products/Search";
import FilterComponent from "@/components/shared/Filter/Filter";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import FilterMobile from "@/components/shared/Filter/FilterMobile";

export default function SearchPage() {
    return (
        <main>
            <div className="bg-secondary text-white min-h-screen">
                <br />
                <br />
                <div className="transition-all duration-500 ease-in-out">
                    <HorizontalScrollfirst />

                    {/* Mobile View */}

                    <div className="block md:hidden w-5/6 mx-auto">
                        <FilterMobile />
                        <div className="">
                            <Search />
                        </div>
                    </div>

                    {/* Tablet View */}
                    <div className="w-full hidden md:block lg:hidden mx-auto">
                        <div className="bg-secondary border border-white w-5/6 mx-auto flex justify-between items-center p-4">
                            <p className="items-center justify-start">Showing 2-44 products</p>
                            <div className="ml-auto">
                                <FilterMobile />
                            </div>
                        </div>
                        <div className="">
                            <Search />
                        </div>
                    </div>

                    {/* Desktop View */}
                    <div className="grid grid-cols-5 w-5/6 mx-auto hidden lg:grid min-h-screen ">
                        <div className="col-span-1 bg-secondary mt-10 text-4xl mb-20">
                            <FilterComponent />
                        </div>
                        <div className="col-span-4">
                            <Search />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
