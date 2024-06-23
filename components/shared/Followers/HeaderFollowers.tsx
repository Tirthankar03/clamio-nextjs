import Image from 'next/image'
import Link from 'next/link'
import NavItems from '@/components/shared/Followers/NavItems'
import MobileNav from '@/components/shared/MobileNav'

const HeaderFollowers = () => {
    return (
        <header className='border-b'>
            <div className="wrapper flex items-center justify-between px-4 py-2">
                <Link href="/" className="w-36">
                    <Image
                        src="/assets/images/CLAMIO.svg" width={128} height={38}
                        alt="Clamio logo"
                    />
                </Link>
                <nav className="hidden md:flex md:flex-grow md:justify-end">
                    <NavItems />
                </nav>
                <div className="flex md:hidden w-32 justify-end gap-3">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default HeaderFollowers;
