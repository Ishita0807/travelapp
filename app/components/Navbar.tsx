import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

const Navbar = () => {
  console.log({ NAV_LINKS })  
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}/>
      </Link>
      <ul className='hidden gap-12 h-full lg:flex'>
        {NAV_LINKS.map((link, index) => (
          <li key={link.key}>
            <Link href={link.href} className='flex regular-16 flexCenter cursor-pointer pb-1.5 text-gray-500 hover:font-bold'>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className='lg:flexCenter hidden'>
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />  
      </div>     
    </nav>
  )
}

export default Navbar;
