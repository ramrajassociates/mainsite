import NavbarComp from '@/components/NavbarComp'
import React,{useState} from 'react'
import Image from 'next/image'
import { Fade } from 'react-reveal'
import Head from 'next/head';
import Link from 'next/link';
import { BiSolidLeftArrow } from 'react-icons/bi';
import SeoComp from '@/components/SeoComp';
import FaqsSectionComp from '@/components/FAQS/FaqsSectionComp';
import axios from 'axios'
function index({seoInformation,faqs}) {
  const [show, setShow] = useState(false);
    return (
        <>
              <SeoComp seoInformation={seoInformation}>

</SeoComp>
<NavbarComp />
<NavbarComp />
        <div >
            <div className='object-contain  relative h-[100vh]  '>
        <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/cs1.webp'} width={1920} height={1080} className='w-full h-full object-cover sm:object-top object-center scale-x-[-1]'></Image>
                <div className='bg-gray-600 backdrop-blur rounded-lg absolute h-fit gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-10 p-4  bg-opacity-20 lg:left-24 w-10/12 m-3 top-1/3 lg:max-w-[30vw] '>
              <p className='text-main bg-footerColor px-2 py-1 absolute -top-2 -left-2'>Services{' > '}Web Design And Development</p>
                    <p className='text-main font-bold text-2xl pt-5'>Custom Web Development</p>
                    <div className='relative h-fit pl-5'>
<p className='text-xs text-main'>Custom web development involves creating unique, tailor-made websites from the ground up. Our expert developers work closely with clients to understand their specific needs, goals, and branding, resulting in a fully customized web solution. We utilize the latest technologies and best practices to build websites that are not only visually stunning but also highly functional and user-friendly.</p>
                    <Fade bottom delay={1200} >
                    <span className="md:border-l-2 border-l border-action-900 h-full absolute left-2 top-0"></span>
                    </Fade>
                    </div>
      </div>
            </div>
            
        </div>
      <FaqsSectionComp faqs={faqs?faqs:[]}/>
        
      </>
  )
}

export default index

export async function getStaticProps() {
  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_ADMIN_URL + "/api/custom-web-development-service");
    const data = res.data;
    const seoInformation = data.data.attributes.seoInformation;
    const faqs = data.data.attributes.faqs.questionAnswer;
    return {
      props: {
        seoInformation,
        faqs
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        seoInformation:null,
        faqs:null
      },
    };
  }
}