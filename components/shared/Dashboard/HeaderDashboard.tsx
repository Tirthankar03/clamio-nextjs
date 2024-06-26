// import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const HeaderDashboard = () => {
  return (
    <header className='w-full border-b'>
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/CLAMIO.svg" width={128} height={38}
            alt="Clamio logo"
          />
        </Link>
        <nav className="md:flex-between md:mr-24 lg:mr-0 hidden w-full max-w-sm">
          <NavItems />
        </nav>
        <div className="flex md:hidden w-32 justify-end gap-3 ">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default HeaderDashboard