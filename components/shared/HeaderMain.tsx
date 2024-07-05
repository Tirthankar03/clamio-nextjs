// import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'
import { Provider } from 'react-redux'
import { store } from '@/Store/store'

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
          <nav className="md:flex-between hidden md:mr-6 w-full max-w-sm">
            <Provider store={store}>

               <NavItems />
            </Provider>
           
          </nav>
        {/* </SignedIn> */}

        <div className="flex md:hidden w-32 justify-end gap-3 ">


        {/* <SignedIn> */}
            {/* <UserButton afterSignOutUrl="/" /> */}
            <Provider store={store}>

              <MobileNav />
            </Provider>
            
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