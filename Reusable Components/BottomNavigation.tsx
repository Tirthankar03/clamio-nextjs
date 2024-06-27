"use client";
import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronUp,
  Home,
  Package,
  Users,
  User,
  Star,
  DollarSign,
  Settings,
  LayoutDashboard,
  SquareMenu
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from "@/components/ui/button";

const bottomNavLinks = [
  { label: 'Dashboard', route: '/dashboard', icon: <LayoutDashboard className="h-6 w-6" /> },
  { label: 'Orders', route: '/dashboard/orders', icon: <Package className="h-6 w-6" /> },
  { label: 'User', route: '/dashboard/users', icon: <User className="h-6 w-6" /> },
  { label: 'Followers', route: '/dashboard/followers', icon: <Users className="h-6 w-6" /> },
];

const moreLinks = [
  { label: 'Payouts', route: '/dashboard/payouts', icon: <DollarSign className="h-6 w-6" /> },
  { label: 'Reward', route: '/dashboard/reward', icon: <Star className="h-6 w-6" /> },
  { label: 'Settings', route: '/dashboard/settings', icon: <Settings className="h-6 w-6" /> },
];

function BottomNavigation() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t shadow-md lg:hidden z-50">
      <div className="flex justify-center py-2 gap-8">
        {bottomNavLinks.slice(0, 3).map((link) => (
          <Link href={link.route} key={link.route} >
            <div className="flex flex-col items-center text-sm text-gray-600 hover:text-primary-600 cursor-pointer">
              {link.icon}
              <span className="mt-1">{link.label}</span>
            </div>
          </Link>
        ))}

        <DropdownMenu>
          <DropdownMenuTrigger >
            <div className='flex flex-col'>
                 <SquareMenu className=' text-gray-600'/>
                <span className="text-xs text-gray-600 text-center">More</span>
            </div>
           
             
           
          
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40 bg-white shadow-lg md:hidden">
            {bottomNavLinks.slice(3).concat(moreLinks).map((link) => (
              <Link href={link.route} key={link.route} passHref>
                <DropdownMenuItem className="flex items-center md:hidden text-gray-600 hover:text-primary-600">
                  {link.icon}
                  <span className="ml-2">{link.label}</span>
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    
    </div>
  );
}

export default BottomNavigation;
