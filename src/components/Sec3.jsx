import React from 'react'
import Image from 'next/image'
import icc1 from '@/images/icc1.svg'
import icc2 from '@/images/icc2.svg'
import icc3 from '@/images/icc3.svg'
import Link from 'next/link'
import arr from '@/images/arr.svg'

const Sec3 = () => {
  return (
    <section className='sec '>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <h3 className="sec-head">
                        What Awetism Insights Offers    
                    </h3>
                    <h4 className="sub-head">
                        We simplify the journey for you, step by step.
                    </h4>
                </div>
            </div>
            <div className="row align-items-end in-row">
                <div className="col-lg-4 col-12">
                    <div className="in-card">
                        <Image src={icc1} alt="" />
                        <div>
                            <h3>Weekly Live Help</h3>
                            <p className="para">
                                Get answers to your questions directly from experts every week. Whether it’s about behavior, sleep, or communication, we’re here to guide you.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="in-card">
                        <Image src={icc2} alt="" />
                        <div>
                            <h3>Emotional<br className='d-sm-block d-none' /> Support for You</h3>
                            <ul>
                                <li>
                                    We know this journey isn’t just about your child—it’s about you, too. Our 4 detailed emotional wellness master classes teach you how to stay calm, manage stress, and release overwhelm
                                </li>
                                <li>
                                    You get short videos and tapping exercises to help you feel less anxious and more in control.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="in-card">
                        <Image src={icc3} alt="" />
                        <div>
                            <h3>Clear Guidance on Sensory Challenges</h3>
                            <p className="para">
                            Learn practical strategies to help your child with sensory issues, behavior, and daily living skills. Our 5 detailed courses and 15 masterclasses break down everything you need to know into simple, easy-to-follow steps.
                            </p>
                            <ul>
                                <li>
                                Masterclasses on calming your child, toilet training, improving communication, and building social skills.
                                </li>
                                <li>
                                Courses that teach you how to help your child regulate, learn, interact and communicate effectively with everyone and in all social situations.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mt-5">
                    <Link href='/' className='main-btn center'>
                        <span>Learn more about us</span>
                        <Image src={arr} alt='phone' />
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Sec3