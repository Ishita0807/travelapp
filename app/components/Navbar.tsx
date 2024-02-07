import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

 const Navbar = () => {
  console.log({NAV_LINKS})  
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 ">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}/>
        <ul className='hidden gap-12 h-full lg:flex'>
          {NAV_LINKS.map((link) => (
            <li key={link.key} className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold '>
              <Link href={link.href} >
                {link.label }
              </Link>

            </li>
            
          ))}
        </ul>

      </Link>
      

    </nav>
  )
}
export default Navbar;