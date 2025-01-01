import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import arr from '@/images/arr.svg'

const PricingSec = () => {
  return (
    <section className="sec pt-0 pricing-sec">
            <div className="container">
                <div className="row">
                    {/* <div className="col-12">
                        <h3 className="sec-head text-center">
                            Explore our <span>flexible subscription</span> plans below:
                        </h3>
                    </div> */}
                    <div className="col-12">
                        <div className="mo-checker">
                            <span>Monthly</span>
                            <div className="cus-toggler">
                                <input type="checkbox" id="c" />
                                <label htmlFor="c">
                                    <span></span>
                                </label>
                            </div>
                            <span>Anually</span>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-12">
                        <div className="sub-card">
                            <div className="sub-top">
                                <p>Yearly</p>
                                <h4 className='strike-price'>1,08,000</h4>
                                <h3>40,000</h3>
                            </div>
                            <h4>
                            Evolving Plan
                            </h4>
                            <div className="points">
                                <ul>
                                    <li>What is Autism</li>
                                    <li>Oral motor challenges</li>
                                    <li>Sensory diet</li>
                                    <li>Using visual supports</li>
                                    <li>Supporting sleep</li>
                                    <li>Emotional wellness 2021</li>
                                    <li>Emotional wellness 2022</li>
                                    <li>Emotional wellness 2023</li>
                                    <li>Emotional wellness 2024</li>
                                </ul>
                            </div>
                            <Link href='/' className='main-btn center'>
                                <span>Get Started</span>
                                <Image src={arr} alt='phone' />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="sub-card">
                            <div className="sub-top">
                                <p>Yearly</p>
                                <h4 className='strike-price'>1,21,000</h4>
                                <h3>80,000</h3>
                            </div>
                            <h4>
                            Empowered Plan
                            </h4>
                            <div className="points">
                                <ul>
                                    <li>What is Autism</li>
                                    <li>Oral motor challenges</li>
                                    <li>Sensory diet</li>
                                    <li>Using visual supports</li>
                                    <li>Supporting sleep</li>
                                    <li>Emotional wellness 2021</li>
                                    <li>Emotional wellness 2022</li>
                                    <li>Emotional wellness 2023</li>
                                    <li>Emotional wellness 2024</li>
                                </ul>
                            </div>
                            <Link href='/' className='main-btn center'>
                                <span>Get Started</span>
                                <Image src={arr} alt='phone' />
                            </Link>
                        </div>
                    </div>
                  
                </div>
            </div>
        </section>
  )
}

export default PricingSec