import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import arr from '@/images/arr.svg'
import headerImg from '@/images/header.png'
import sun from '@/images/sun.png'
import cloud from '@/images/cloud.png'


const Header = () => {
  return (
    <header className='main-header'>
        <Image src={sun} alt='bg' className='sun' />
        <Image src={cloud} alt='bg' className='cloud' />
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-7 col-12'>
                    <div className='banner-content'>
                        <h1>
                            We help parents gain clarity and confidence in managing their child’s sensory issues with <span>Proven Techniques, Emotional Wellness Strategies, and Ongoing Community Support.</span>
                        </h1>
                        <p className='para'>
                            Whether your child has recently been diagnosed with Autism or you've been navigating therapy for years, it's natural to feel overwhelmed and uncertain about the next steps. At Awetism Insights, we’re here to support and empower you every step of the way, helping you find clarity and confidence on this journey. Our mission is to help your child to regulate, learn, interact, and communicate effectively with everyone and in all social situations. We support kids who have a diagnosis of Autism from <span>2-18 years.</span>
                        </p>
                        <Link href='/' className='main-btn'>
                            <span>Let's work together to support your child</span>
                            <Image src={arr} alt='phone' />
                        </Link>
                    </div>
                </div>
                <div className='col-lg-4 offset-lg-1 col-12'>
                    <Image src={headerImg} className='w-100 h-auto' alt='header' />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header