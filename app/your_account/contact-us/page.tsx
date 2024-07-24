<<<<<<< HEAD
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


export default function page() {
    return (
        <div>
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
                <Button >Submit</Button>
                <Button >Close</Button>
            </div>
        </div>
    )
}
=======
import React from 'react'

const ContactUs = () => {
  return (
    <div>ContactUs</div>
  )
}

export default ContactUs
>>>>>>> 91be6bb34231367c9009ccc56d0b8d4e85867bbb
