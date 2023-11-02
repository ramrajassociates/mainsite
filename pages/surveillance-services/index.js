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
    serviceName: 'Surveillance Services',
    explanation: 'Surveillance services encompass a range of solutions designed to monitor and secure various environments and assets. These services utilize advanced technology to capture, analyze, and manage data related to security and surveillance. The primary objective is to provide a secure environment and protect against unauthorized access, theft, and threats to people and property.',
    description: 'Surveillance services may include CCTV (Closed-Circuit Television) systems, access control systems, alarm monitoring, and video analytics. These services are essential for various industries, from commercial and residential properties to government facilities and critical infrastructure. Surveillance technology continues to evolve, incorporating innovations like artificial intelligence and cloud-based solutions for more effective security management.',
    extras: 'Effective surveillance services help organizations and individuals enhance security, deter criminal activities, and respond quickly to incidents. They provide peace of mind and safeguard assets, making them an essential component of comprehensive security solutions.'
  };
  
  const content3 = [
    {
      question: 'What are Surveillance Services?',
      answer: 'Surveillance services encompass a range of solutions designed to monitor and secure various environments and assets. They utilize advanced technology to capture, analyze, and manage data related to security and surveillance, with the primary objective of providing a secure environment and protecting against threats and unauthorized access.',
    },
    {
      question: 'Why are Surveillance Services important?',
      answer: 'Surveillance services are crucial for enhancing security in a wide range of settings, including commercial and residential properties, government facilities, and critical infrastructure. They provide essential tools for monitoring and responding to security threats and protecting assets and people.',
    },
    {
      question: 'What are some common components of Surveillance Services?',
      answer: 'Common components of surveillance services include CCTV (Closed-Circuit Television) systems, access control systems, alarm monitoring, and video analytics. These technologies work together to create comprehensive security solutions tailored to the needs of each environment.',
    },
    {
      question: 'How has surveillance technology evolved over time?',
      answer: 'Surveillance technology has evolved with advancements like artificial intelligence and cloud-based solutions. These innovations enable more efficient and effective security management, including real-time analysis and remote monitoring of surveillance data.',
    }
  ];
  
    return (
        <>
            <SeoComp seoInformation={seoInformation}>

            </SeoComp>
            <NavbarComp />
        <div >
            <div className='object-contain  relative h-[100vh]  '>
        <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/surveillance-services.webp'} width={1920} height={1080} className='w-full h-full object-cover sm:object-top object-center  '></Image>
                <div className='bg-gray-600 backdrop-blur rounded-lg absolute h-fit gap-4 sm:top-32 flex flex-col justify-center items-center sm:p-10 p-4  bg-opacity-20 lg:left-24 w-10/12 m-3 top-1/3 lg:max-w-[30vw] '>
                    <p className='text-main bg-footerColor px-2 py-1 absolute -top-2 -left-2'>Services</p>
                    <p className='text-main font-bold text-2xl pt-5'>Surveillance Service</p>
                    <div className='relative h-fit pl-5'>
<p className='text-xs text-main'> Our surveillance services provide cutting-edge solutions for monitoring and securing your assets, properties, and operations. We offer a range of surveillance technologies and services, including CCTV systems, access control, and remote monitoring. Our goal is to ensure the safety and security of your premises while providing valuable insights and peace of mind.</p>
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
      const res = await axios.get(process.env.NEXT_PUBLIC_ADMIN_URL + "/api/surveillance-service");
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