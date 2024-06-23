'use client';
import Image from "next/image";
import Facebook from "@/public/assets/Login-img/Facebook.png";
import Google from "@/public/assets/Login-img/Google.png";
import Apple from "@/public/assets/Login-img/Apple.png";

const SocialLogin: React.FC = () => (
    <div className="flex gap-10 items-center justify-center cursor-pointer">
        <Image className="w-12 h-12" src={Facebook} alt="Facebook" width={36} height={36} />
        <Image className="w-9 h-9" src={Google} alt="Google" width={36} height={36} />
        <Image className="w-12 h-12" src={Apple} alt="Apple" width={36} height={36} />
    </div>
);

export default SocialLogin;
