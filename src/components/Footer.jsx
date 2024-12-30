import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ftLogo from '@/images/ft-logo.png'

import fb from '@/images/fb.svg'
import tw from '@/images/tw.svg'
import vi from '@/images/vi.svg'
import yt from '@/images/yt.svg'
const Footer = () => {
  return (
    <footer className='main-footer'>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-12">
                    <Link href="/">
                        <Image src={ftLogo} className='w-100 h-auto' alt="" />
                    </Link>
                </div>
                <div className='col-lg-3 offset-lg-1 col-12'>
                    <h3 className='ft-head'>
                        Contact us
                    </h3>
                    <ul className='ft-list'>
                        <li>
                            <Link href="mailto:info@awetisminsights.com">
                                info@awetisminsights.com
                            </Link>
                        </li>
                        <li>
                            <p>
                                Level 2, 20-36 Regency Street 
                                Kippa Ring QLD 4021
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='col-lg-2  col-12'>
                    <h3 className='ft-head'>
                        Opening hours
                    </h3>
                    <ul className='ft-list'>
                        <li>
                            <p>
                                Mon – Fri: 9am – 5pm
                                Sat – Sun: Closed
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='col-lg-3 col-12'>
                    <h3 className='ft-head'>
                        Follow us
                    </h3>
                    <ul className='soc-list'>
                        <li>
                            <Link href='https://twitter.com/'>
                                <Image src={fb} alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link href='https://twitter.com/'>
                                <Image src={tw} alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link href='https://twitter.com/'>
                                <Image src={vi} alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link href='https://twitter.com/'>
                                <Image src={yt} alt="" />
                            </Link>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </footer>
  )
}

export default Footer