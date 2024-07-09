import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import NavItems from "./Nav-items";
import { RootState } from "@/Store/store";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoggedIn } from "@/utils/authSlice";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut } from "lucide-react";
import { BG_IMAGE } from "@/constants/data";

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
                  backgroundImage: `url(${BG_IMAGE})`,
                }}
              >
                <div className="absolute inset-0"></div>
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
              <div className="p-4 flex flex-col items-start">
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
