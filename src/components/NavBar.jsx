import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/images/logo.png'
import arr from '@/images/arr.svg'


const NavBar = () => {
  return (
    <nav className='main-nav'>
        <div className='container'>
            <div className='inner-nav'>
                <Link href='/' className='logo'>
                    <Image src={logo} alt='logo' />
                </Link>
                <Link href='http://app.awetisminsights.com' target='_blank' className='main-btn'>
                    <span>Login</span>
                    <Image src={arr} alt='phone' />
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default NavBar