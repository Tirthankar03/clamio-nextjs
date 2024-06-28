'use client';


// import { headerLinks, headerLinksDashboard } from '@/constants/index'

import { headerLinks } from '@/constants' 

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Separator } from "@/components/ui/separator"
import DropDownMenu from '@/Reusable Components/DropDownMenu';
import DropDown from '@/Reusable Components/DropDownMenu';

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
       <li className='hidden md:block lg:hidden'><DropDown/></li>
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