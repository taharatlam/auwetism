'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import arr from '@/images/arr.svg'
import greenarr from '@/images/green-arr.svg'
import PriceModal from './PriceModal'

const PricingSec = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);

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

  const handleClose = (id) => {
    
    setShow(false);
  }
  const handleShow = (id) => {
    if(id == 'plan1'){
        setData(data1)
    }else{
        setData(data1)
    }
    setShow(true);
  }




  return (
    <section className="sec pt-0 pricing-sec">
            <PriceModal handleShow={handleShow} handleClose={handleClose} show={show} data={data} />
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
                                <button onClick={()=>handleShow('plan1')} className='main-btn know-more'>
                                    <span>Know more</span>
                                    <Image src={greenarr} alt='phone' />
                                </button>
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
                                <button onClick={()=>handleShow('plan2')}   className='main-btn know-more'>
                                    <span>Know more</span>
                                    <Image src={greenarr} alt='phone' />
                                </button>
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