'use client'
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';
import NavigationLinks from './NavigationLinks';
import MobileNav from './MobileNav';

const HeaderUser = () => {
  return (
    <header className='border-b max-w-7xl mx-auto  w-full'>
       <div className="w-11/12  mx-auto py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/CLAMIO.svg"
            width={128}
            height={38}
            alt="Clamio logo"
          />
        </Link>
        <div className="flex-grow hidden md:flex justify-center">
          <SearchBar />
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <NavigationLinks />
        </div>
        <div className="flex md:hidden items-center space-x-3">
          <MobileNav />
        </div>
      </div>
      <div className="md:hidden flex w-full mt-4">
        <SearchBar />
      </div>
    </div>
    </header>
   
  );
};

export default HeaderUser;
