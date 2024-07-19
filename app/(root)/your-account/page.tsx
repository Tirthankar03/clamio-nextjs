'use client'
import { useState } from "react";
import { accounts } from "@/constants/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
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
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
    const router = useRouter();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleAccountClick = (accountId: number) => {
        if (accountId === 4) {
            handleDialogOpen();
        } else if (accountId === 2) {
            router.push('/your-account/address');
        } else if (accountId === 1) {
            router.push('/your-account/your-orders');
        }
    };

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
                        className="flex shadow-md hover:shadow-lg transition duration-300 p-4 cursor-pointer"
                        onClick={() => handleAccountClick(account.id)}
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
                <DialogContent className="sm:max-w-[525px] bg-white">
                    <DialogHeader>
                        <DialogTitle>Contact Us</DialogTitle>
                        <DialogDescription className="py-1">
                            Feel free to reach us for any query or feedback
                        </DialogDescription>
                    </DialogHeader>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup className="bg-white">
                                <SelectItem className="px-2" value="order">Order</SelectItem>
                                <SelectItem className="px-2" value="creator">Creator</SelectItem>
                                <SelectItem className="px-2" value="download">Download</SelectItem>
                                <SelectItem className="px-2" value="other">Other</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <div>
                        <Textarea placeholder="Type your query or feedback here." />
                    </div>
                    <Label htmlFor="message">To reach out to you </Label>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="phone-no">
                            <div>
                                <Textarea placeholder="provide email" />
                            </div>
                        </div>
                        <div className="user-email"><div>
                            <Textarea placeholder="provide telephone no " />
                        </div></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 py-4">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faPhone} className="mr-2" />
                            <span>+91 235-XXX-538-XX</span>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                            <address className="not-italic">contact@clamio.in</address>
                        </div>
                    </div>
                    <div className="flex justify-end gap-2">
                        <Button onClick={handleDialogClose}>Submit</Button>
                        <Button onClick={handleDialogClose}>Close</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
