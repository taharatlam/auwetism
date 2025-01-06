import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import arr from '@/images/arr.svg'
import headerImg from '@/images/header.png'
import sun from '@/images/sun.png'
import cloud from '@/images/cloud.png'
import greenarr from '@/images/green-arr.svg'
import ab from '@/images/ab.png'


const Banner = () => {
  return (
    <header className='main-header'>
        <Image src={sun} alt='bg' className='sun' />
        <Image src={cloud} alt='bg' className='cloud' />
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-6 col-12'>
                    <div className='banner-content'>
                        <h1>
                            <span>Meet Reena Singh</span>
                        </h1>
                        <h4 className="sub">Occupational Therapist & Founder</h4>
                        <p className='para'>
                        Hi, I’m Reena Singh. Over the past 24 years, I’ve been working with children on the Autism spectrum and their families. When I started as an Occupational Therapist, I was just like many parents I meet today—searching for answers, trying to understand what truly works. Slowly, with years of learning, training, and working hands-on with children and families, I developed a holistic approach that helps children regulate, learn, and communicate while also empowering parents to feel calm and confident. Throughout my journey, I’ve been fortunate to witness incredible transformations. I’ve seen children who struggled to communicate find their voice. I’ve seen families overwhelmed by sensory meltdowns find calm and connection.
                        </p>
                        {/* <Link href='/' className='main-btn know-more pl-0 mb-4' style={{paddingLeft: '0px !important'}}>
                            <span>Read More</span>
                            <Image src={greenarr} alt='phone' />
                        </Link> */}
                        <Link href='http://app.awetisminsights.com' target='_blank' className='main-btn'>
                            <span>Join Awetism Insights Today</span>
                            <Image src={arr} alt='phone' />
                        </Link>
                    </div>
                </div>
                <div className='col-lg-5 offset-lg-1 col-12'>
                    <Image src={ab} className='w-100 h-auto' alt='header' />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Banner