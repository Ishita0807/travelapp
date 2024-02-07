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
          {NAV_LINKS.map((link, index) => (
              <Link href={link.href} key={link.key} className='flex regular-16 flexCenter cursor-pointer pb-1.5 text-gray-500'>
              {link.label}
              </Link>
          ))}
        </ul>
      </Link>
    </nav>
  )
}
export default Navbar;