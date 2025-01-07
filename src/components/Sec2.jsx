import React from 'react'
import Image from 'next/image'
import ques from '@/images/ques.svg'
import bulb from '@/images/bulb.svg'

const Sec2 = () => {
  return (
    <section className='sec2 sec'>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-6 col-12 text-center'>
                    <h3 className='sec-head'>
                        Does This Feel Familiar?
                    </h3>
                    <p className='para'>
                        We hear you. These are challenges many parents face, but you don’t have to figure this out on your own.
                    </p>
                </div>
            </div>
            <div className='row row-gap-25'>
                <div className='col-lg-4 col-12'>
                    <div className='ques-card' style={{'--bg': `#A7CF39`}}>
                        <Image src={ques} alt='ques' />
                        <p className='para'>
                            I just want my child to feel calm, communicate their needs, and play with other kids of their age…
                        </p>
                    </div>
                </div>
                <div className='col-lg-4 col-12'>
                    <div className='ques-card' style={{'--bg': `#F6CA83`}}>
                        <Image src={ques} alt='ques' />
                        <p className='para'>
                            There’s so much to learn—I don’t even know where to begin!
                        </p>
                    </div>
                </div>
                <div className='col-lg-4 col-12'>
                    <div className='ques-card' style={{'--bg': `#A7CF39`}}>
                        <Image src={ques} alt='ques' />
                        <p className='para'>
                            I feel alone in this—like no one understands what I’m going through.
                        </p>
                    </div>
                </div>
                <div className='col-lg-12 mt-4 col-12'>
                    <div className='ques-card bulb-card' style={{'--bg': `#F6CA83`}}>
                        <Image src={bulb} alt='ques' />
                        <div className='content'>
                            <h4>
                                We hear you
                            </h4>
                            <p className='para'>
                                These are the challenges every parent faces at the start. But you don’t have to figure this out on your own. Parents who have joined the app are more mindful, calm and confident as they support their child with sensory challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Sec2