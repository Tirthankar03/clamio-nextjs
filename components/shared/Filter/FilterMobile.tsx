import React from 'react'
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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button";

export default function FilterMobile() {
    return (
        <div>
            <Drawer>
                <DrawerTrigger className="w-fit text-secondary px-4 py-2 mx-auto bg-white rounded">Filter</DrawerTrigger>
                <DrawerContent className="bg-white">
                    <DrawerHeader>
                        <DrawerTitle className='py-2'>Filter</DrawerTitle>
                        <DrawerDescription className='py-2'>Filter your products</DrawerDescription>
                        <div className='grid grid-cols-2 gap-4 py-2'>
                            <Select>
                                <SelectTrigger className="w-full px-4">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup className='bg-white p-0 m-0 border-none'>
                                        <SelectItem className='px-1 m-0' value="Newest to Oldest">Price: Newest to Oldest</SelectItem>
                                        <SelectItem className='px-1 m-0' value="Oldest to Newest">Price: Oldest to Newest</SelectItem>
                                        <SelectItem className='px-1 m-0' value="Low to High">Price: Low to High</SelectItem>
                                        <SelectItem className='px-1 m-0' value="High to Low">Price: High to Low</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-full px-4 ">
                                    <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup className='bg-white p-0 m-0 border-none'>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem className='px-1 m-0' value="apple">Apple</SelectItem>
                                        <SelectItem className='px-1 m-0' value="banana">Banana</SelectItem>
                                        <SelectItem className='px-1 m-0' value="blueberry">Blueberry</SelectItem>
                                        <SelectItem className='px-1 m-0' value="grapes">Grapes</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <input type="number" name="minPrice" placeholder="Minimum price" className="filter-input w-full p-2 mb-4 border border-gray-300 rounded text-black text-sm p-4" />
                            <input type="number" name="maxPrice" placeholder="Maximum price" className="filter-input w-full p-2 mb-4 border border-gray-300 rounded text-black text-sm p-4" />
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <Select>
                                <SelectTrigger className="w-full px-4">
                                    <SelectValue placeholder="Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup className='bg-white p-0 m-0 border-none'>
                                        <SelectItem className='px-1 m-0' value="Education">Education</SelectItem>
                                        <SelectItem className='px-1 m-0' value="Entertainment">Entertainment</SelectItem>
                                        <SelectItem className='px-1 m-0' value="Technology">Technology</SelectItem>
                                        <SelectItem className='px-1 m-0' value="Lifestyle">Lifestyle</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-full px-4">
                                    <SelectValue placeholder="File Type" />
                                </SelectTrigger>
                                <SelectContent className=''>
                                    <SelectGroup className='bg-white border-none'>
                                        <SelectItem className='px-1 m-0' value="pdf">PDF</SelectItem>
                                        <SelectItem className='px-1 m-0' value="zip">Zip</SelectItem>
                                        <SelectItem className='px-1 m-0' value="image">Image</SelectItem>
                                        <SelectItem className='px-1 m-0' value="video">Video</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>


                        </div>

                        <div className='grid grid-cols-2 gap-4 py-2'>
                            <Select>
                                <SelectTrigger className="w-full px-4">
                                    <SelectValue placeholder="Stars" />
                                </SelectTrigger>
                                <SelectContent className=''>
                                    <SelectGroup className='bg-white border-none'>
                                        <SelectItem className='px-1 m-0' value="5 stars">5 stars</SelectItem>
                                        <SelectItem className='px-1 m-0' value="4 stars">4 stars</SelectItem>
                                        <SelectItem className='px-1 m-0' value="3 stars">3 stars</SelectItem>
                                        <SelectItem className='px-1 m-0' value="2 stars">2 stars</SelectItem>
                                        <SelectItem className='px-1 m-0' value="1 stars">1 star</SelectItem>

                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <RadioGroup defaultValue="comfortable">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="default" id="r1" />
                                    <Label htmlFor="r1">3d model (2740)</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="comfortable" id="r2" />
                                    <Label htmlFor="r2">vrchat (2630)</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="compact" id="r3" />
                                    <Label htmlFor="r3">pbr (1497)</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="compact" id="r3" />
                                    <Label htmlFor="r3">game assets (1142)</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="compact" id="r3" />
                                    <Label htmlFor="r3">vr avatar (1029)</Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </DrawerHeader>
                    <DrawerFooter>
                        <Button>Filter  Submit</Button>
                        <DrawerClose>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </div>
    )
}
