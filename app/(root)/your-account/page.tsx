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
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Contact Us</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input id="name" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input id="username" className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={handleDialogClose}>Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
