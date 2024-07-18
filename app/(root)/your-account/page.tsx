'use client'
import { useState } from "react";
import { accounts } from "@/constants/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Textarea } from "@/components/ui/textarea"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function Page() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleDialogOpen = () => {
        setIsDialogOpen(true);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };

    return (
        <div className="w-5/6 md:w-5/6 lg:w-5/6 xl:w-3/5 mx-auto my-10">
            <h1 className="text-4xl font-bold mb-10">Your Account</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {accounts.map((account) => (
                    <div
                        key={account.id}
                        className="flex shadow-md hover:shadow-lg transition duration-300 p-4"
                        onClick={account.id === 4 ? handleDialogOpen : undefined}
                    >
                        <div className="w-20 h-20 flex-shrink-0 justify-center">
                            <Image
                                src={account.image_url}
                                alt=""
                                width={80}
                                height={80}
                                className="object-cover rounded-full"
                            />
                        </div>
                        <div className="ml-4">
                            <h2 className="text-2xl font-semibold">{account.title}</h2>
                            <p className="text-lg text-gray-700">{account.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                    <div></div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-525px] bg-white">
                    <DialogHeader>
                        <DialogTitle>Contact Us</DialogTitle>
                        <DialogDescription className="py-1">
                            Feel free to reach us for any query or feedback
                        </DialogDescription>
                    </DialogHeader>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup className="bg-white">
                                <SelectItem className='px-2' value="order">Order</SelectItem>
                                <SelectItem className='px-2' value="creator">Creator</SelectItem>
                                <SelectItem className='px-2' value="download">Download</SelectItem>
                                <SelectItem className='px-2' value="other">Other</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <div className="">
                        <Textarea placeholder="Type your query or feedback here." />
                    </div>
                    <div className="grid md:grid-cols-2">
                        <div className="phone flex">
                            <div className="icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div className="number pl-2">
                                +91 235-XXX-538-XX
                            </div>
                        </div>
                        <div className="email flex">
                            <div className="icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <address className="number pl-2">
                                contact@clamio.in
                            </address>
                        </div>
                    </div>
                    <div className="flex flex-end justify-end gap-2">
                        <DialogFooter>
                            <Button onClick={handleDialogClose}>Submit</Button>
                        </DialogFooter>
                        <DialogFooter>
                            <Button onClick={handleDialogClose}>Close</Button>
                        </DialogFooter>
                    </div>

                </DialogContent>
            </Dialog>
        </div>
    );
}
