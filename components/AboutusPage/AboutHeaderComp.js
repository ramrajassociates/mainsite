import React from 'react'
import Image from 'next/image';
import { Fade } from 'react-reveal';
function AboutHeaderComp() {
  return (
    <div>
    <div className='object-contain h-[100vh] relative !snap-center'>
        <Image src={'/images/abtbg.jpg'} width={1920} height={1080} className='w-full h-full object-cover sm:object-top   '></Image>
                <div className='bg-gray-600 sm:backdrop-blur rounded-lg absolute h-fit gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-10 w-96 bg-opacity-20 sm:left-24 top-20 sm:max-w-[30vw] '>
                    <p className='text-main bg-footerColor px-2 py-1 absolute -top-2 -left-2'>About Us</p>
                    <p className='text-main font-bold text-2xl pt-5'>Ramraj Associates</p>
                    <div className='relative h-fit pl-5'>
<p className='text-xs text-main'>We offer a wide range of digital services in India including Social Media Marketing, Search Engine Optimization, Email Marketing, Graphic Design, Content Writing, Content Marketing, Website Design & Development, Application Development, Paid Marketing, Corporate Photoshoot and Others.</p>
                    <Fade bottom delay={1200} >
                    <span className="md:border-l-2 border-l border-action-900 h-full absolute left-2 top-0"></span>
                    </Fade>
                    </div>
      </div>
            </div>
      <div className="content mx-auto sm:px-24">
        
<div  class="flex flex-col items-center  md:flex-row gap-5 sm:max-w-full">
    <Image width={1920} height={1080} class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-l-lg" src="/images/abt1.jpg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Our Mission</h5>
        <p class="mb-3  text-gray-700 dark:text-gray-400 font-thin text-xl p-5">
At Ramraj Associates, we're dedicated to delivering innovative IT solutions for businesses of all sizes. Our focus is on tailoring high-quality solutions to our clients' needs, aiming to exceed expectations in every project. We prioritize trust, transparency, and communication, fostering strong client relationships. Our experienced team ensures exceptional service and results, while staying updated with industry trends. Through a culture of innovation, we're committed to being a trusted global partner, empowering businesses with technology to succeed. Your satisfaction drives our passion and commitment.</p>
    </div>
</div>
<div  class="flex flex-col items-center  md:flex-row-reverse gap-5 sm:max-w-full  ">
    <Image width={1920} height={1080} class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-l-lg" src="/images/abt2.jpg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Our Vision</h5>
        <p class="mb-3  text-gray-700 dark:text-gray-400 font-thin text-xl p-5">
At Ramraj Associates, we're dedicated to delivering innovative IT solutions for businesses of all sizes. Our focus is on tailoring high-quality solutions to our clients' needs, aiming to exceed expectations in every project. We prioritize trust, transparency, and communication, fostering strong client relationships. Our experienced team ensures exceptional service and results, while staying updated with industry trends. Through a culture of innovation, we're committed to being a trusted global partner, empowering businesses with technology to succeed. Your satisfaction drives our passion and commitment.</p>
    </div>
</div>
<div  class="flex flex-col items-center  md:flex-row gap-5 sm:max-w-full  ">
    <Image width={1920} height={1080} class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-l-lg" src="/images/abt3.jpg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Our Value</h5>
        <p class="mb-3  text-gray-700 dark:text-gray-400 font-thin  text-xl p-5">
At Ramraj Associates, we're dedicated to delivering innovative IT solutions for businesses of all sizes. Our focus is on tailoring high-quality solutions to our clients' needs, aiming to exceed expectations in every project. We prioritize trust, transparency, and communication, fostering strong client relationships. Our experienced team ensures exceptional service and results, while staying updated with industry trends. Through a culture of innovation, we're committed to being a trusted global partner, empowering businesses with technology to succeed. Your satisfaction drives our passion and commitment.</p>
    </div>
</div>

      </div>
    </div>
  )
}

export default AboutHeaderComp