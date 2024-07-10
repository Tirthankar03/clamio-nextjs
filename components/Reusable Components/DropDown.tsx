import React from 'react';
import {
  BarChartBig,
  BugPlay,
  ChevronDown,
  Coins,
  CreditCard,
  Github,
  Home,
  Keyboard,
  LifeBuoy,
  ListOrdered,
  LogOut,
  NotebookTabs,
  Plus,
  Settings,
  ShoppingBasket,
  ShoppingCart,
  SquareUserRound,
  User,
  UserRound,
  Users,
} from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuShortcut, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from "@/components/ui/button";
import Link from 'next/link'; // Import Link from Next.js
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'; // Import Avatar components
import { setIsLoggedIn } from '@/utils/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Store/store';
import { useRouter } from "next/navigation";
import { FaShopify } from 'react-icons/fa';
import { AiOutlineAccountBook } from 'react-icons/ai';
import { deleteCookie } from "cookies-next";

function DropDownMenu() {

  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* <div className="flex items-center border px-2 lg:hidden 2xl:hidden rounded-md bg-primary justify-center"> */}
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {/* <ChevronDown className="h-4 w-4 lg:hidden" /> */}
        {/* </div> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 mx-5 bg-white hidden md:block lg:block">
      <DropdownMenuItem className='cursor-pointer hover:bg-yellow-300 transition-all duration-200'>
          <UserRound className="mr-2 h-4 w-4 " />
          <Link href={'/your-account'}>
               <span>My Account</span>
          </Link>
     
        </DropdownMenuItem>
      <DropdownMenuItem className='cursor-pointer hover:bg-yellow-300 transition-all duration-200'>
          <ListOrdered className="mr-2 h-4 w-4 " />
          <span>Orders</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        <DropdownMenuItem  onClick={() => {
              dispatch(setIsLoggedIn(false));
              router.push('/explore');
              deleteCookie('user')
            }} className='cursor-pointer hover:bg-yellow-300 transition-all duration-200'>
          <LogOut className="mr-2 h-4 w-4 " />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropDownMenu;
