'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import arr from '@/images/arr.svg'
import greenarr from '@/images/green-arr.svg'
import PriceModal from './PriceModal'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

const PricingSec = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);
    const [isMonthly, setIsMonthly] = useState(true);
    const [isIndia, setIsIndia] = useState(true);

    const data1 = [
        "15 masterclasses which are charged separately (total 1,08,000) earlier but you get complete access to all now in the app.",
        "Masterclass on making academics fun",
        "Masterclass on PECS",
        "Masterclass on auditory processing",
        "Teaching toilet and potty training to your child",
        "Masterclass Vestibular Visual Auditory",
        "Masterclass on Vestibular Visual Connections",
        "Youtube live-question and answer session"
    ]

    useEffect(() => {
        const checkLocation = async () => {
            try {
                const response = await fetch('https://ipapi.co/json/');
                const locationData = await response.json();
                setIsIndia(locationData.country === 'IN');
                console.log(locationData.country);
            } catch (error) {
                console.error('Error fetching location data:', error);
            }
        };
        checkLocation();
    }, []);

    const handleClose = (id) => {
        setShow(false);
    }

    const handleShow = (id) => {
        if (id === 'plan1') {
            setData(data1)
        } else {
            setData(data1)
        }
        setShow(true);
    }

    const togglePlan = () => {
        setIsMonthly(!isMonthly);
    }

    return (
        <section className="sec pt-0 pricing-sec">
            <PriceModal handleShow={handleShow} handleClose={handleClose} show={show} data={data} />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mo-checker">
                            <span>Monthly</span>
                            <div className="cus-toggler">
                                <input type="checkbox" id="c" onChange={togglePlan} />
                                <label htmlFor="c">
                                    <span></span>
                                </label>
                            </div>
                            <span>Anually</span>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className='col-12 m-el'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.1,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="sub-card">
                                    <div className="sub-top">
                                        <p>{isMonthly ? 'Monthly' : 'Yearly'}</p>
                                        {/* <h4 className='strike-price'>{isMonthly ? (isIndia ? '₹9,000' : '$120') : (isIndia ? '₹1,08,000' : '$1,440')}</h4> */}
                                        <h3>{isMonthly ? (isIndia ? '₹4,000' : '₹8,000') : (isIndia ? '₹40,000' : '₹80,000')}</h3>
                                    </div>
                                    <h4>
                                        Evolving Plan
                                    </h4>
                                    <div>
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
                                        <button onClick={() => handleShow('plan1')} className='main-btn know-more'>
                                            <span>Know more</span>
                                            <Image src={greenarr} alt='phone' />
                                        </button>
                                    </div>
                                    <Link href='http://app.awetisminsights.com' target='_blank' className='main-btn center'>
                                        <span>Get Started</span>
                                        <Image src={arr} alt='phone' />
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="sub-card">
                                    <div className="sub-top">
                                        <p>{isMonthly ? 'Monthly' : 'Yearly'}</p>
                                        {/* <h4 className='strike-price'>{isMonthly ? (isIndia ? '₹10,000' : '$130') : (isIndia ? '₹1,21,000' : '$1,600')}</h4> */}
                                        <h3>{isMonthly ? (isIndia ? '₹8,000' : '₹16,000') : (isIndia ? '₹80,000' : '₹1,60,000')}</h3>
                                    </div>
                                    <h4>
                                        Empowered Plan
                                    </h4>
                                    <div>
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
                                        <button onClick={() => handleShow('plan2')} className='main-btn know-more'>
                                            <span>Know more</span>
                                            <Image src={greenarr} alt='phone' />
                                        </button>
                                    </div>
                                    <Link href='http://app.awetisminsights.com' target='_blank' className='main-btn center'>
                                        <span>Get Started</span>
                                        <Image src={arr} alt='phone' />
                                    </Link>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="col-lg-4 col-12 d-el">
                        <div className="sub-card">
                            <div className="sub-top">
                                <p>{isMonthly ? 'Monthly' : 'Yearly'}</p>
                                {/* <h4 className='strike-price'>{isMonthly ? (isIndia ? '₹9,000' : '$120') : (isIndia ? '₹1,08,000' : '$1,440')}</h4> */}
                                <h3>{isMonthly ? (isIndia ? '₹4,000' : '₹8,000') : (isIndia ? '₹40,000' : '₹80,000')}</h3>
                            </div>
                            <h4>
                                Evolving Plan
                            </h4>
                            <div>
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
                                <button onClick={() => handleShow('plan1')} className='main-btn know-more'>
                                    <span>Know more</span>
                                    <Image src={greenarr} alt='phone' />
                                </button>
                            </div>
                            <Link href='http://app.awetisminsights.com' target='_blank' className='main-btn center'>
                                <span>Get Started</span>
                                <Image src={arr} alt='phone' />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 d-el">
                        <div className="sub-card">
                            <div className="sub-top">
                                <p>{isMonthly ? 'Monthly' : 'Yearly'}</p>
                                {/* <h4 className='strike-price'>{isMonthly ? (isIndia ? '₹10,000' : '$130') : (isIndia ? '₹1,21,000' : '$1,600')}</h4> */}
                                <h3>{isMonthly ? (isIndia ? '₹8,000' : '₹16,000') : (isIndia ? '₹80,000' : '₹1,60,000')}</h3>
                            </div>
                            <h4>
                                Empowered Plan
                            </h4>
                            <div>
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
                                <button onClick={() => handleShow('plan2')} className='main-btn know-more'>
                                    <span>Know more</span>
                                    <Image src={greenarr} alt='phone' />
                                </button>
                            </div>
                            <Link href='http://app.awetisminsights.com' target='_blank' className='main-btn center'>
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