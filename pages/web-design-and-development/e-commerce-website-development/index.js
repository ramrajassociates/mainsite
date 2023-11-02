import NavbarComp from '@/components/NavbarComp'
import React,{useState} from 'react'
import Image from 'next/image'
import { Fade } from 'react-reveal'
import Head from 'next/head';
import Link from 'next/link';
import { BiSolidLeftArrow } from 'react-icons/bi';
import SeoComp from '@/components/SeoComp';
import FaqsSectionComp from '@/components/FAQS/FaqsSectionComp';
import LetsConnectComp from '@/components/LetsConnectComp';
import ContentComp2 from '@/components/ContentComp2';
import ContentComp3 from '@/components/ContentComp3';
import axios from 'axios'
function index({seoInformation,faqs}) {
  const [show, setShow] = useState(false);
  const content2 = {
    serviceName: 'E-commerce Website Development',
    explanation: 'E-commerce website development is the process of creating online stores and platforms to facilitate buying and selling products or services over the internet. It involves designing and building websites with features like product listings, shopping carts, secure payment gateways, and inventory management. E-commerce development ensures a seamless and secure shopping experience for both businesses and consumers.',
    description: 'E-commerce websites are essential for businesses looking to expand their reach and increase sales in the digital age. They provide a platform to showcase products, manage orders, and offer a convenient shopping experience to customers. E-commerce development includes customization, integration of e-commerce tools, and optimization for search engines and user experience.',
    extras: 'E-commerce website development empowers businesses to reach a global audience, improve customer engagement, and boost revenue. It offers features like easy product management, order tracking, secure transactions, and the ability to adapt to evolving e-commerce trends.'
  };
  
  const content3 = [
    {
      question: 'What is E-commerce Website Development?',
      answer: 'E-commerce website development is the process of creating online platforms that enable businesses to sell products or services over the internet. It involves building websites with features like product listings, shopping carts, secure payment processing, and inventory management.',
    },
    {
      question: 'Why is E-commerce Website Development important?',
      answer: 'E-commerce website development is crucial for businesses seeking to expand their online presence and increase sales. It provides a platform for showcasing products, managing orders, and offering a convenient shopping experience to customers.',
    },
    {
      question: 'What are the key features of E-commerce Website Development?',
      answer: 'Key features of e-commerce website development include product management, order tracking, secure transactions, easy checkout processes, and optimization for search engines and user experience. It empowers businesses to reach a broader customer base and drive revenue growth.',
    },
    {
      question: 'How does E-commerce Development benefit businesses?',
      answer: 'E-commerce development benefits businesses by improving customer engagement, reaching a global audience, and boosting revenue. It offers a convenient shopping experience for customers and adapts to changing e-commerce trends.',
    }
  ];
  
  
    return (
        <>
              <SeoComp seoInformation={seoInformation}>

</SeoComp>
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
        <ContentComp2 content={content2} />
        <ContentComp3 content={content3} />
        <LetsConnectComp/>
      <FaqsSectionComp faqs={faqs?faqs:[]}/>
        
      </>
  )
}

export default index


export async function getStaticProps() {
  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_ADMIN_URL + "/api/e-commerce-website-development-service");
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
    // console.error("Error fetching data:", error);
    return {
      props: {
        seoInformation:null,
        faqs:null
      },
    };
  }
}