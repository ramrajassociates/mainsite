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
        <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/ppc-marketing.webp'} width={1920} height={1080} className='w-full h-full object-cover object-center  '></Image>
                <div className='bg-gray-600 backdrop-blur rounded-lg absolute h-fit gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-10 p-4  bg-opacity-20 lg:left-24 w-10/12 m-3 top-1/3 lg:max-w-[35vw] '>
              <p className='text-main bg-footerColor px-2 py-1 absolute -top-2 -left-2'>Services{' > '}Digital Marketing Services</p>
                    <p className='text-main font-bold text-2xl pt-5'>PPC Marketing</p>
                    <div className='relative h-fit pl-5'>
<p className='text-xs text-main'>PPC marketing is a highly effective online advertising strategy where advertisers pay a fee each time their ad is clicked. This model is commonly used on search engines and social media platforms. It offers businesses the opportunity to display their ads to a highly targeted audience, ensuring that they only pay when their ad is clicked, making it a cost-effective and measurable method of driving traffic to websites and achieving marketing goals.</p>
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