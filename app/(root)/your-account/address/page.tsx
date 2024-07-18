'use client'
import React, { useState } from 'react';
import { addresses } from '@/constants/data';
import { useRouter } from 'next/navigation';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export default function Addresses() {
    const [selectedAddressId, setSelectedAddressId] = useState<number | null>(null);
    const router = useRouter();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form, setForm] = useState({
        name: '',
        phone: '',
        pincode: '',
        line1: '',
        line2: '',
        city: '',
        state: '',
        country: 'India',
        landmark: '',
        isDefault: false,
    });

    const handleClick = () => {
        setIsModalOpen(true);
    };

    const handleDialogClose = () => {
        setIsModalOpen(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked }: any = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Save address logic here
        setIsModalOpen(false);
    };

    return (
        <div className="w-5/6 md:w-5/6 lg:w-5/6 xl:w-3/5 mx-auto my-10">
            <h1 className="text-4xl font-bold mb-10">Your Addresses</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div
                    className="flex flex-col items-center justify-center border-dashed border-2 border-gray-300 rounded-lg p-6 cursor-pointer hover:bg-gray-100"
                    onClick={handleClick}
                >
                    <span className="text-4xl">+</span>
                    <span>Add address</span>
                </div>
                {addresses.map((address) => (
                    <div
                        key={address.id}
                        className={`flex flex-col justify-between shadow-md hover:shadow-lg transition duration-300 p-4 rounded-lg border ${selectedAddressId === address.id ? 'border-blue-500' : 'border-transparent'}`}
                        onClick={() => setSelectedAddressId(address.id)}
                    >
                        <div>
                            {address.isDefault && (
                                <div className="text-xs text-gray-500 mb-2">Default:</div>
                            )}
                            <h2 className="text-lg font-semibold">{address.name}</h2>
                            <p>{address.line1}</p>
                            <p>{address.line2}</p>
                            <p>{address.city}, {address.state} {address.zip}</p>
                            <p>{address.country}</p>
                            <p className="mt-2">Phone number: {address.phone}</p>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button className="text-blue-500 hover:underline">Edit</button>
                            <button className="text-blue-500 hover:underline">Remove</button>
                            {!address.isDefault && (
                                <button className="text-blue-500 hover:underline">Set as Default</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="sm:max-w-[525px] bg-white">
                    <DialogHeader>
                        <DialogTitle>Add a new address</DialogTitle>
                        <DialogDescription className="py-1">
                            Please fill in the details to add a new address.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4">
                            <div>
                                <Label className="block text-sm font-medium">Full name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div>
                                <Label className="block text-sm font-medium">Mobile number</Label>
                                <Input
                                    type="text"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div>
                                <Label className="block text-sm font-medium">Pincode</Label>
                                <Input
                                    type="text"
                                    name="pincode"
                                    value={form.pincode}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div>
                                <Label className="block text-sm font-medium">Flat, House no., Building, Company, Apartment</Label>
                                <Input
                                    type="text"
                                    name="line1"
                                    value={form.line1}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div>
                                <Label className="block text-sm font-medium">Area, Street, Sector, Village</Label>
                                <Input
                                    type="text"
                                    name="line2"
                                    value={form.line2}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div>
                                <Label className="block text-sm font-medium">Landmark</Label>
                                <Input
                                    type="text"
                                    name="landmark"
                                    value={form.landmark}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div>
                                <Label className="block text-sm font-medium">Town/City</Label>
                                <Input
                                    type="text"
                                    name="city"
                                    value={form.city}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div>
                                <Label className="block text-sm font-medium">State</Label>
                                <Select
                                    name="state"
                                    value={form.state}
                                    onValueChange={(value) => setForm({ ...form, state: value })}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select state" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup className='bg-white '>
                                            <SelectItem className='bg-white p-2 m-0' value="Assam">Assam</SelectItem>
                                            {/* Add other states as options */}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex justify-end gap-2">
                                <Input
                                    type="checkbox"
                                    name="isDefault"
                                    checked={form.isDefault}
                                    onChange={handleChange}
                                    className="mr-2 items-right"
                                />
                                <Label className="text-sm font-medium">Make this my default address</Label>
                            </div>
                        </div>
                        <div className="flex justify-end mt-6 gap-2">
                            <Button type="submit">Add address</Button>
                            <Button onClick={handleDialogClose}>Close</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
