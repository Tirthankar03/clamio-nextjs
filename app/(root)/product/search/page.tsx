import HorizontalScrollfirst from "@/components/shared/HorizontalScroll";
import Search from "@/components/shared/products/Search";
import { Button } from "@/components/ui/button";
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
                        <Drawer>
                            <DrawerTrigger className="w-fit text-secondary px-4 py-2 mx-auto bg-white rounded">Filter</DrawerTrigger>
                            <DrawerContent className="bg-white">
                                <DrawerHeader>
                                    <DrawerTitle>Filter Small</DrawerTitle>
                                    <DrawerDescription>Filter Data.</DrawerDescription>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </DrawerHeader>
                                <DrawerFooter>
                                    <Button>Filter  Submit</Button>
                                    <DrawerClose>
                                        <Button variant="outline">Cancel</Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                        <Search />
                    </div>

                    {/* Tablet View */}
                    <div className="w-full hidden md:block lg:hidden mx-auto">
                        <div className="bg-primary w-5/6 text-4xl mx-auto">
                            Filter medium
                        </div>
                        <div className="">
                            <Search />
                        </div>
                    </div>

                    {/* Desktop View */}
                    <div className="grid grid-cols-5 w-5/6 mx-auto hidden lg:grid min-h-screen ">
                        <div className="col-span-1 bg-primary mt-10 text-4xl">
                            Filter large
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
