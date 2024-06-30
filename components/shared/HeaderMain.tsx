// import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const HeaderMain = () => {
  return (
    <header className='w-full border-b'>
      <div className="wrapper flex items-center justify-between">
      <Link href="/" className="w-36">
          <Image 
            src="/assets/images/CLAMIO.svg" width={128} height={38}
            alt="Clamio logo" 
          />
        </Link>


        {/* <SignedIn> */}
          <nav className="md:flex-between hidden w-full max-w-sm">
            <NavItems />
          </nav>
        {/* </SignedIn> */}

        <div className="flex md:hidden w-32 justify-end gap-3 ">


        {/* <SignedIn> */}
            {/* <UserButton afterSignOutUrl="/" /> */}
            <MobileNav />
          {/* </SignedIn> */}






          {/* <SignedOut> */}
            {/* <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button> */}
          {/* </SignedOut> */}
        </div>
      </div>
    </header>
  )
}

export default HeaderMain