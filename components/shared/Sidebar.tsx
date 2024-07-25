"use client";

import Link from "next/link";
import {
  Bell,
  ListOrdered,
  User,
  MapPin,
  Gift,
  CreditCard,
  Wallet,
  Star,
  ClipboardList,
  Heart,
  AlertCircle,
  Contact2,
} from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { sidebarlinks } from "@/constants/data";

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="hidden border-r bg-white mt-8 md:block">
      <div className="flex w-80 h-full max-h-screen flex-col">
        <div className="flex h-16 items-center border-b px-4 bg-gray-50">
          <Link href="/" className="flex items-center gap-4 font-semibold">
            <Avatar className="w-10 h-10">
              <AvatarImage
                className="rounded-full"
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback className="bg-gray-300">CN</AvatarFallback>
            </Avatar>
            <span className="text-lg text-gray-800">Acme Inc</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <nav className="px-4 py-6 space-y-2">
            {sidebarlinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-4 py-2 transition-all",
                  link.href === pathName
                    ? "bg-yellow-300 text-gray-700"
                    : "hover:bg-yellow-300 text-gray-700"
                )}
              >
                <link.icon className="h-5 w-5 text-gray-600" />
                <span className="font-medium">{link.title}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
