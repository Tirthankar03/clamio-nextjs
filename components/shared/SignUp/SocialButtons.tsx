import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import Facebook from "@/public/assets/Login-img/Facebook.png";
import Google from "@/public/assets/Login-img/Google.png";
import Apple from "@/public/assets/Login-img/Apple.png";
import { INSTAGRAM_PNG } from "@/constants/data";

const SocialButtons = () => (
    <div className="flex gap-10 items-center justify-center cursor-pointer">
        <Link href="/facebook-auth">
            <Image className="w-12 h-12" src={Facebook} alt="Facebook" width={36} height={36} />
        </Link>
        <Link href="/google-auth">
            <Image className="w-9 h-9" src={Google} alt="Google" width={36} height={36} />
        </Link>
        <Link href="/apple-auth">
            <Image className="w-10 h-10" src={INSTAGRAM_PNG} alt="Apple" width={36} height={36} />
        </Link>
    </div>
);

export default SocialButtons;
