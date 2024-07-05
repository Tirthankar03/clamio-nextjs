'use client'
import Image from 'next/image'
import Link from 'next/link'
import NavItems from '@/components/shared/Dashboard/NavItems'
import MobileNav from './MobileNav'
import { Provider } from 'react-redux'
import { store } from '@/Store/store'

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
        <nav className="md:flex-between md:mr-24 lg:mr-8  xl:mr-0 hidden w-full max-w-sm">
          <Provider store={store}>

             <NavItems />
          </Provider>
         
        </nav>
        <div className="flex md:hidden w-32 justify-end gap-3 ">
          <Provider store={store}>

             <MobileNav />
          </Provider>
         
        </div>
      </div>
    </header>
  )
}

export default HeaderDashboard