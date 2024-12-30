import React from 'react'
import Image from 'next/image'
import ic1 from '@/images/ic1.svg'
import ic2 from '@/images/ic2.svg'
import ic3 from '@/images/ic3.svg'

import img from '@/images/gain.svg'

const Gain = () => {
  return (
    <section className='sec gain-sec'>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h3 className="sec-head">
                        What You’ll Gain
                    </h3>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-5 col-12">
                    <ul className='gain-ul'>
                        <li>
                            <Image src={ic1} alt="" />
                            <div>
                                <h3>Clarity</h3>
                                <p className="para">
                                    Understand why your child behaves the way they do and what they need to feel safe and regulated.
                                </p>
                            </div>
                        </li>
                        <li>
                            <Image src={ic2} alt="" />
                            <div>
                                <h3>Confidence</h3>
                                <p className="para">
                                    Learn simple techniques to help your child calm down, focus, and connect with others.
                                </p>
                            </div>
                        </li>
                        <li>
                            <Image src={ic3} alt="" />
                            <div>
                                <h3>Support</h3>
                                <p className="para">
                                    Join a community of parents who get it and experts who guide you every step of the way.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6 col-12 offset-lg-1">
                    <Image src={img} className='w-100 h-auto' alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gain