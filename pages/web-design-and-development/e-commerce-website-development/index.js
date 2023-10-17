import NavbarComp from '@/components/NavbarComp'
import React,{useState} from 'react'
import Image from 'next/image'
import { Fade } from 'react-reveal'
import Head from 'next/head';
import Link from 'next/link';
import { BiSolidLeftArrow} from 'react-icons/bi';
function index() {
  const [show, setShow] = useState(false);
    return (
        <>
              <Head>

</Head>
<NavbarComp />
<NavbarComp />
        <div >
            <div className='object-contain  relative h-[100vh]  '>
        <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/e-comm.webp'} width={1920} height={1080} className='w-full h-full object-cover sm:object-top object-center  '></Image>
                <div className='bg-gray-600 backdrop-blur rounded-lg absolute h-fit gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-10 p-4  bg-opacity-20 lg:left-24 w-10/12 m-3 top-1/3 lg:max-w-[35vw] '>
              <p className='text-main bg-footerColor px-2 py-1 absolute -top-2 -left-2'>Services{' > '}Web Design And Development</p>
                    <p className='text-main font-bold text-2xl pt-5'>E-commerce Website Development</p>
                    <div className='relative h-fit pl-5'>
<p className='text-xs text-main'>E-commerce development focuses on creating online stores and marketplaces. We design and develop robust e-commerce solutions that offer a seamless shopping experience for customers. From product listings to secure payment processing, we cover every aspect of online selling.</p>
                    <Fade bottom delay={1200} >
                    <span className="md:border-l-2 border-l border-action-900 h-full absolute left-2 top-0"></span>
                    </Fade>
                    </div>
      </div>
            </div>
            
            </div>
      </>
  )
}

export default index