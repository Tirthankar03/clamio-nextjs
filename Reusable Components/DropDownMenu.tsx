import React from 'react';
import {
  ChevronDown,
  Coins,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Plus,
  Settings,
  User,
  Users,
} from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuShortcut, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from "@/components/ui/button";
import Link from 'next/link'; // Import Link from Next.js
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';

const headerLinksDashboard = [
  {
    label: 'Dashboard',
    route: '/dashboard',
    icon: <User className="h-4 w-4" />,
  },
  {
    label: 'Product',
    route: '/',
    icon: <CreditCard className="h-4 w-4" />,
  },
  {
    label: 'User',
    route: '/creator',
    icon: <Users className="h-4 w-4" />,
  },
  {
    label: 'Orders',
    route: '/dashboard/orders',
    icon: <LifeBuoy className="h-4 w-4" />,
  },
  {
    label: 'Settings',
    route: '/dashboard/settings',
    icon: <Settings className="h-4 w-4" />,
  },
  {
    label: 'Payouts',
    route: '/payouts',
    icon: <Keyboard className="h-4 w-4" />,
  },
  {
    label: 'Followers',
    route: '/followers',
    icon: <Plus className="h-4 w-4" />,
  },
  {
    label: 'Reward',
    route: '/reward',
    icon: <Coins className="h-4 w-4" />,
  },
];

function DropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center border px-2 lg:hidden 2xl:hidden rounded-md bg-primary justify-center">
          <Button className="md:block lg:hidden 2xl:hidden" variant="default">More</Button>
          <ChevronDown className="h-4 w-4 lg:hidden" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mx-5 bg-white">
        {headerLinksDashboard.map((item) => (
          <Link href={item.route} key={item.route}>
            <p>
              <DropdownMenuItem>
                {item.icon}
                <span className='px-2'>{item.label}</span>
              </DropdownMenuItem>
            </p>
          </Link>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropDown;
