import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import arr from '@/images/arr.svg'

import img from '@/images/cta-img.svg'

const CtaSec = () => {
  return (
    <section className='sec cta-sec'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="cta-wrapper">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-12">
                                <div>
                                    <h3>
                                        Take the First Step Toward Confidence, Clarity, and Connection—For You and Your Child
                                    </h3>
                                    <Link href='http://app.awetisminsights.com' target='_blank' className='main-btn'>
                                        <span>Get Started</span>
                                        <Image src={arr} alt='phone' />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-2 offset-lg-2 col-12">
                                <div>
                                    <Image src={img} className='w-100 h-auto' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CtaSec