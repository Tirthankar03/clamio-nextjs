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
import { FaIdCard } from "react-icons/fa";

const Sidebar = () => {
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
            <Link
              href="/your_account/my-orders"
              className="flex items-center gap-3 rounded-lg px-4 py-2 hover:bg-yellow-300 transition-all text-gray-700"
            >
              <ListOrdered className="h-5 w-5 text-gray-600" />
              <span className="font-medium">My Orders</span>
            </Link>
            <div className="text-sm font-semibold text-gray-500 mt-6 mb-2">
              Account Settings
            </div>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-4 py-2 hover:bg-yellow-300 transition-all text-gray-700"
            >
              <User className="h-5 w-5 text-gray-600" />
              <span className="font-medium">Profile Information</span>
            </Link>
            <Link
              href="manage-address"
              className="flex items-center gap-3 rounded-lg px-4 py-2 hover:bg-yellow-300 transition-all text-gray-700"
            >
              <MapPin className="h-5 w-5 text-gray-600" />
              <span className="font-medium">Manage Addresses</span>
            </Link>
            <Link
              href="/your_account/contact-us"
              className="flex items-center gap-3 rounded-lg px-4 py-2 hover:bg-yellow-300 transition-all text-gray-700"
            >
              <Contact2 className="h-5 w-5 text-gray-600" />
              <span className="font-medium">Contact Us</span>
            </Link>
            <div className="text-sm font-semibold text-gray-500 mt-6 mb-2">
              Payments
            </div>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-4 py-2 hover:bg-yellow-300 transition-all text-gray-700"
            >
              <Gift className="h-5 w-5 text-gray-600" />
              <span className="font-medium">Gift Cards</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-4 py-2 hover:bg-yellow-300 transition-all text-gray-700"
            >
              <CreditCard className="h-5 w-5 text-gray-600" />
              <span className="font-medium">Saved UPI</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-4 py-2 hover:bg-yellow-300 transition-all text-gray-700"
            >
              <Wallet className="h-5 w-5 text-gray-600" />
              <span className="font-medium">Saved Cards</span>
            </Link>
            <div className="text-sm font-semibold text-gray-500 mt-6 mb-2">
              My Stuff
            </div>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-4 py-2 hover:bg-yellow-300 transition-all text-gray-700"
            >
              <ClipboardList className="h-5 w-5 text-gray-600" />
              <span className="font-medium">My Coupons</span>
            </Link>
            <Link
              href="/your_account/reviews-ratings"
              className="flex items-center gap-3 rounded-lg px-4 py-2 hover:bg-yellow-300 transition-all text-gray-700"
            >
              <Star className="h-5 w-5 text-gray-600" />
              <span className="font-medium">My Reviews & Ratings</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-4 py-2 hover:bg-yellow-300 transition-all text-gray-700"
            >
              <AlertCircle className="h-5 w-5 text-gray-600" />
              <span className="font-medium">All Notifications</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-4 py-2 hover:bg-yellow-300 transition-all text-gray-700"
            >
              <Heart className="h-5 w-5 text-gray-600" />
              <span className="font-medium">My Wishlist</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
