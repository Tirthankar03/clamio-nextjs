import React, { useState } from "react";
import { FaYoutube, FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface CommunityCardData {
    id: number;
    title: string;
    members: string;
    img_url: string;
}

interface ProfileSectionProps {
    community: CommunityCardData;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ community }) => {
    const communityLink = `https://clamio.in/community/${community.id}`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(communityLink);
        alert('Link copied to clipboard!');
    };

    return (
        <div>
            <div className="mx-auto rounded-full overflow-hidden h-40 w-40 md:h-32 md:w-32">
                <Image
                    src={community.img_url}
                    alt={community.title}
                    layout="responsive"
                    width={128}
                    height={128}
                    className="object-cover"
                />
            </div>
            <h1 className="text-center mt-4 text-2xl font-bold">{community.title}</h1>
            <p className="text-center mt-2">{community.members}</p>
            <div className="flex flex-col md:flex-row md:justify-center mt-4">
                <span className="mr-4 text-center">Total Products: 230</span>
                <span className="text-center">Followers: 1M</span>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
                <Button className="bg-black text-white px-4 py-2 rounded">Follow</Button>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="bg-gray-200 text-black px-4 py-2 rounded">
                            <FontAwesomeIcon icon={faShare} />
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-white">
                        <DialogHeader>
                            <DialogTitle>Share this Community</DialogTitle>
                            <DialogDescription>
                                Share the link to this community or share directly on social media.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-1 gap-4">
                                <Label htmlFor="link">Community Link</Label>
                                <div className="flex items-center">
                                    <Input
                                        id="link"
                                        value={communityLink}
                                        readOnly
                                        className="col-span-3"
                                    />
                                    <Button onClick={copyToClipboard} className="ml-2">Copy</Button>
                                </div>
                            </div>
                            <div className="relative my-4">
                                <hr className="border-gray-300" />
                                <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-500">or</span>
                            </div>
                            <div className="flex space-x-4 justify-center">
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(communityLink)}`} target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-2 rounded-full">
                                    <FaFacebook size={20} color="white" />
                                </a>
                                <a href={`https://www.instagram.com/?url=${encodeURIComponent(communityLink)}`} target="_blank" rel="noopener noreferrer" className="bg-pink-500 p-2 rounded-full">
                                    <FaInstagram size={20} color="white" />
                                </a>
                                <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(communityLink)}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 p-2 rounded-full">
                                    <FaWhatsapp size={20} color="white" />
                                </a>
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button>Close</Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
                <span className="bg-red-500 p-2 rounded-full">
                    <FaYoutube size={20} color="white" />
                </span>
                <span className="bg-pink-500 p-2 rounded-full">
                    <FaInstagram size={20} color="white" />
                </span>
                <span className="bg-blue-500 p-2 rounded-full">
                    <FaLinkedin size={20} color="white" />
                </span>
            </div>
        </div>
    );
};

export default ProfileSection;
