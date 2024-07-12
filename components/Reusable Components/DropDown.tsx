import React from 'react';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Store/store';
import { setIsLoggedIn } from '@/utils/authSlice';
import { setIsCreatorLoggedIn } from '@/utils/creatorSlice';
import { deleteCookie } from 'cookies-next';
import { LogOut, UserRound, ListOrdered } from 'lucide-react';
import { useRouter } from 'next/navigation';

const DropDownMenu = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoggedIn = useSelector((store: RootState) => store.user.isLoggedIn);
  const isCreatorLogin = useSelector((store: RootState) => store.creator.isCreatorLoggedIn);

  const handleLogout = () => {
    if (isLoggedIn) {
      deleteCookie('user');
      dispatch(setIsLoggedIn(false));
      router.push('/');
    }

    if (isCreatorLogin) {
      deleteCookie('creator');
      dispatch(setIsCreatorLoggedIn(false));
      router.push('/explore');
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
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
        <DropdownMenuItem onClick={handleLogout} className='cursor-pointer hover:bg-yellow-300 transition-all duration-200'>
          <LogOut className="mr-2 h-4 w-4 " />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownMenu;
