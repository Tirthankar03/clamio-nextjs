'use client';


import DropDownMenu from '@/components/Reusable Components/DropDown';
import DropDown from '@/components/Reusable Components/DropDownMenu';
import { Button } from '@/components/ui/button';
// import { headerLinks, headerLinksDashboard } from '@/constants/index'

import { headerLinks } from '@/constants/data' 
import { RootState } from '@/Store/store';
import { setIsLoggedIn } from '@/utils/authSlice';


import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';

const NavItems = () => {

  const pathname = usePathname();
 

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5  md:flex-row">
          {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`${
              isActive && 'text-primary-500'
            } flex-center p-medium-16 whitespace-nowrap `}
          >
            <Link href={link.route}>{link.label}</Link>
             
         
              
           
          </li>
         
        )
      })}
            {/* {isLoggedIn && (
        <li>
          <Button
            onClick={() => {
              dispatch(setIsLoggedIn(false));
              router.push('/explore');
            }}
            className="font-semibold md:hidden lg:block hover:bg-yellow-400 px-4 py-2 rounded-md shadow-md"
          >
            Logout
          </Button>
        </li>
      )} */}
       <li className='hidden lg:block '><DropDownMenu/></li>
       <li className='hidden md:block lg:hidden '><DropDown/></li>
      {/* {headerLinksDashboard.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}

            className={`${
              isActive && 'text-primary-500'
            } flex-center p-medium-16 whitespace-nowrap hidden`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })} */}
    </ul>
  )
}

export default NavItems