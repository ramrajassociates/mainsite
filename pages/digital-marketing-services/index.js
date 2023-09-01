import NavbarComp from '@/components/NavbarComp'
import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-reveal'
function index() {
    return (<>
            <NavbarComp />
        <div className='!snap-y overflow-y-auto'>
            <div className='object-contain h-[100vh] relative !snap-center'>
        <Image src={'/images/digi.jpg'} width={1920} height={1080} className='w-full h-full object-cover sm:object-top   '></Image>
                <div className='bg-gray-600 sm:backdrop-blur rounded-lg absolute h-fit gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-10 w-96 bg-opacity-20 sm:left-24 top-32 sm:max-w-[30vw] '>
                    <p className='text-main bg-footerColor px-2 py-1 absolute -top-2 -left-2'>Services</p>
                    <p className='text-main font-bold text-2xl pt-5'>Digital Marketing Service</p>
                    <div className='relative h-fit pl-5'>
<p className='text-xs text-main'>We offer a wide range of digital services in India including Social Media Marketing, Search Engine Optimization, Email Marketing, Graphic Design, Content Writing, Content Marketing, Website Design & Development, Application Development, Paid Marketing, Corporate Photoshoot and Others.</p>
                    <Fade bottom delay={1200} >
                    <span className="md:border-l-2 border-l border-action-900 h-full absolute left-2 top-0"></span>
                    </Fade>
                    </div>
      </div>
            </div>
            <div className='sm:px-24 px-5 h-[100vh] !snap-center'>
                <h1 className='text-center text-2xl py-5'>Our Digital Marketing Services</h1>

            </div>
            </div>
            </>
  )
}

export default index