import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { RootState } from "@/Store/store";
import { useSelector, useDispatch } from "react-redux";

import { LogOut } from 'lucide-react';
import { setIsLoggedIn } from "@/utils/authSlice";

const MobileNav = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  const handleLogout = () => {
    dispatch(setIsLoggedIn(false));
  };

  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image 
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="bg-white md:hidden p-0">
          {!isLoggedIn && (
            <Image
              className="mx-5 my-5"
              src="/assets/images/CLAMIO.svg"
              alt="logo"
              width={128}
              height={38}
            />
          )}
          {isLoggedIn && (
            <div>
              <div
                className="relative h-40 w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1539597833161-fd52d6ee5d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU2fHx5ZWxsb3clMjBiYWNrZ3JvdW5kJTIwaW1hZ2V8ZW58MHwwfDB8fHww)',
                }}
              >
                <div className="absolute inset-0 "></div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      className="rounded-full"
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback className="bg-gray-200">CN</AvatarFallback>
                  </Avatar>
                  <div className="text-white">
                    <p className="text-lg shadow-sm font-bold">John Doe</p>
                  </div>
                </div>
              </div>
              <div className="p-4 flex flex-col items-start ">
                <NavItems />
                <button
                  onClick={handleLogout}
                  className="flex items-center my-5 gap-2 bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </div>
            </div>
          )}
          <Separator />
          <div className="p-6">
            {!isLoggedIn && <NavItems />}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
