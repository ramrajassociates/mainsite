import NavbarComp from '@/components/NavbarComp'
import React,{useState} from 'react'
import Image from 'next/image'
import { Fade } from 'react-reveal'
import Head from 'next/head';
import Link from 'next/link';
import { BiSolidLeftArrow } from 'react-icons/bi';
import SeoComp from '@/components/SeoComp';
import FaqsSectionComp from '@/components/FAQS/FaqsSectionComp';
import ContentComp1 from '@/components/ContentComp1';
import axios from 'axios'
import ClientComponent from '@/components/ClientComponent';
import ProgressSteps from '@/components/ProgreeSteps';
import ContentComp4 from '@/components/ContentComp4';
function index({seoInformation,faqs}) {
  const [show, setShow] = useState(false);
  const ContentComp = {
    title: 'WHAT WE DO AS A MARKETING AGENCY',
    Bigtitle: 'SOLUTIONS FOR INCREASED TRAFFIC AND HIGHER SALES',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore accusamus suscipit ut reiciendis similique quod reprehenderit, hic numquam dignissimos nihil fugit voluptas, unde a!'
  }
  const stepsContent = [
    {
      title: 'CLIENT KICK-OFF',
      description: 'We spend dedicated time getting to know you and your team, your organization, and the products or services you offer.',
      imageUrl:'https://d1efbx4910ct8i.cloudfront.net/Images2/digital.webp'
    },
    {
      title: 'CLIENT KICK-OFF',
      description: 'We spend dedicated time getting to know you and your team, your organization, and the products or services you offer.',
      imageUrl:'https://d1efbx4910ct8i.cloudfront.net/Images2/digital.webp'
    }
  ]
    return (
        <>
              <SeoComp seoInformation={seoInformation}>

</SeoComp>
<NavbarComp />
<NavbarComp />
        <div>
            <div className='object-contain  relative h-[100vh]  '>
        <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/web-design-and-development.webp'} width={1920} height={1080} className='w-full h-full object-cover sm:object-top object-center  '></Image>
                <div className='bg-gray-600 backdrop-blur rounded-lg absolute h-fit gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-10  bg-opacity-20 lg:left-24 w-10/12 m-3 top-1/3 lg:max-w-[30vw] '>
                    <p className='text-main bg-footerColor px-2 py-1 absolute -top-2 -left-2'>Services</p>
                    <p className='text-main font-bold text-2xl pt-5'>Web Design And Development</p>
                    <div className='relative h-fit pl-5'>
<p className='text-xs text-main'>Our this services encompass a wide range of solutions designed to help your business establish and expand its online presence. Whether you're looking to create a unique custom website, set up an e-commerce platform to sell products online, or harness the flexibility of WordPress for your online needs, our team of experts is here to deliver innovative and impactful solutions.</p>
                    <Fade bottom delay={1200} >
                    <span className="md:border-l-2 border-l border-action-900 h-full absolute left-2 top-0"></span>
                    </Fade>
                    </div>
      </div>
          </div>
      <ContentComp1 title={ContentComp.title} BigTitle={ContentComp.Bigtitle} content={ContentComp.content}/>
          
            <div className='sm:px-24 px-1 py-5'>
        <div className={`sm:grid sm:grid-cols-3 ${show?'sm:grid-rows-4':'sm:grid-rows-2'} gap-5 flex flex-row flex-wrap mt-10`}>

        <section className='shadow-xl ImageWithContent col-span-2 col-start-1 row-start-1 flex sm:flex-row flex-col sm:min-h-full h-full w-full'>
            <div className='Image object-cover sm:w-1/2 w-full !min-h-full '>
              <Image className='w-full h-full object-cover'src={'https://d1efbx4910ct8i.cloudfront.net/Images2/cs1.webp'} alt="Custom web development" width={520} height={500} ></Image>
            </div>
            <div className='content sm:w-1/2 w-full relative bg-main hover:bg-gray-200 transition-all duration-300 group sm:p-10 p-5 !min-h-full'>
              <BiSolidLeftArrow className='text-main group-hover:text-gray-200 absolute transition-all duration-300  sm:-left-8 sm:top-10 left-10 -top-8 rotate-90 sm:rotate-0 ' size={50}></BiSolidLeftArrow>
              <h2 className='text-xl font-semibold'>Custom Web development</h2>
              <div className='w-full py-3'>
              <div className="w-full h-fit relative overflow-hidden flex justify-center items-center ">
                                    
                                    <p className=" font-thin text-sm  pl-5 overflow-y-scroll scrollbar-hidden">
                                    Custom web development involves creating unique, tailor-made websites from the ground up. Our expert developers work closely with clients to understand their specific needs, goals, and branding, resulting in a fully customized web solution. We utilize the latest technologies and best practices to build websites that are not only visually stunning but also highly functional and user-friendly.
                                  </p>
                                  <Fade bottom delay={1200} >
                        <span className=" border-l border-action-900 h-full  absolute left-2 top-0 "></span>
                        </Fade>
                                  </div>
                                  </div>
            <Link href={'/web-design-and-development/custom-web-development'} className='flex flex-row justify-end'> <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/arrow_icon_yellow.svg'} width={20} height={20}></Image></Link>
            </div>
        </section>
          <section className='shadow-xl Normal col-span-1 col-start-3  row-start-1 w-full sm:h-full h-64 object-cover relative'>
            <Image className="absolute w-full h-full object-cover object-center " src={'https://d1efbx4910ct8i.cloudfront.net/Images2/e-comm.webp'} alt="content" width={520} height={500}></Image>
            <div className='absolute w-full h-full z-0 bg-black bg-opacity-50'></div>
            <div className='sm:p-10 p-5 absolute top-0 z-10'>

        <h2 className='text-xl font-semibold text-main'>E-commerce website</h2>
              <div className='w-full py-3'>
              <div className="w-full h-fit relative overflow-hidden flex justify-center items-center ">
                                    
                                    <p className=" font-thin text-sm  pl-5 overflow-y-scroll scrollbar-hidden text-main">
                                    E-commerce development focuses on creating online stores and marketplaces. We design and develop robust e-commerce solutions that offer a seamless shopping experience for customers. From product listings to secure payment processing, we cover every aspect of online selling.
                                  </p>
                                  <Fade bottom delay={1200} >
                        <span className=" border-l border-action-900 h-full  absolute left-2 top-0 "></span>
                        </Fade>
                                  </div>
                                  </div>
            <Link href={'/web-design-and-development/e-commerce-website-development'} className='flex flex-row justify-end'> <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/arrow_icon_yellow.svg'} width={20} height={20}></Image></Link>
            </div>
        </section>
          <section className='shadow-xl Normal col-span-1 col-start-1 row-start-2   w-full sm:h-full h-64 object-cover relative bg-main'>
            <div className='sm:p-10 p-5 '>

        <h2 className='text-xl font-semibold text-gray-700'>Wordpress Development</h2>
              <div className='w-full py-3'>
              <div className="w-full h-fit relative overflow-hidden flex justify-center items-center ">
                                    
                                    <p className=" font-thin text-sm  pl-5 overflow-y-scroll scrollbar-hidden text-gray-700">
                                    WordPress development leverages the power of the world's most popular content management system. We create custom WordPress websites, themes, and plugins to meet your specific needs. Whether it's a blog, portfolio, or corporate site, our experts craft WordPress solutions that are highly functional and visually appealing.
                                  </p>
                                  <Fade bottom delay={1200} >
                        <span className=" border-l border-action-900 h-full  absolute left-2 top-0 "></span>
                        </Fade>
                                  </div>
                                  </div>
            <Link href={'/web-design-and-development/wordpress-development'} className='flex flex-row justify-end'> <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/arrow_icon_yellow.svg'} width={20} height={20}></Image></Link>
            </div>
        </section>
        {/* <section className='shadow-xl ImageWithContent col-span-2 col-start-2 row-start-2 flex sm:flex-row flex-col sm:min-h-full h-full w-full'>
            <div className='Image object-cover sm:w-1/2 w-full !min-h-full '>
              <Image className='w-full h-full object-cover'src={'https://d1efbx4910ct8i.cloudfront.net/Images2/w-d.webp'} alt="Search engine optimization" width={520} height={500} ></Image>
            </div>
            <div className='content sm:w-1/2 w-full relative bg-main hover:bg-gray-200 transition-all duration-300 group sm:p-10 p-5 !min-h-full'>
              <BiSolidLeftArrow className='text-main group-hover:text-gray-200 absolute transition-all duration-300  sm:-left-8 sm:top-10 left-10 -top-8 rotate-90 sm:rotate-0 ' size={50}></BiSolidLeftArrow>
              <h2 className='text-xl font-semibold'>Web Development</h2>
              <div className='w-full py-3'>
              <div className="w-full h-fit relative overflow-hidden flex justify-center items-center ">
                                    
                                    <p className=" font-thin text-sm  pl-5 overflow-y-scroll scrollbar-hidden">
                                    Transform your ideas into digital reality with our web development expertise. We design and develop responsive, user-friendly websites and web applications tailored to your needs. From e-commerce sites to interactive web platforms, we blend creativity and technology to deliver seamless online experiences that drive business growth. Your online presence, our passion.
                                  </p>
                                  <Fade bottom delay={1200} >
                        <span className=" border-l border-action-900 h-full  absolute left-2 top-0 "></span>
                        </Fade>
                                  </div>
                                  </div>
            <Link href={'/contactus'} className='flex flex-row justify-end'> <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/arrow_icon_yellow.svg'} width={20} height={20}></Image></Link>
            </div>
        </section> */}
      
        </div>
          {/* <div className="flex flex-row justify-center items-center py-4 w-full cursor-pointer ">
          <span className='bg-action-900 text-main px-2 py-1 font-thin text-sm' onClick={()=>setShow(e=>!e)}>{show ?'Load less':'Load more'}</span>
          </div> */}
         
            </div>
        </div>
        {/* Content Component */}
    <ContentComp4 />
    {/* Content Component */}
        {/* Progress Steps */}
        <div className='lg:px-24 px-5 space-y-7 flex lg:flex-row bg-gray-900 flex-col items-center lg:min-h-screen  '>
      <div className='lg:w-1/3 w-full space-y-7 p-4 '>
        <h1 className='text-6xl font-extrabold text-gray-200'>Website Development Process</h1>
        <p className='text-gray-200'>Website development involves a series of steps that are essential to creating a functional and visually appealing website. The first step is planning, where the website's purpose, target audience, and content are determined. This is followed by designing the website's layout, including the color scheme, typography, and overall look and feel.</p>
        <div>

        <Link href={'/contactus'} className='px-6 py-2 border border-action-900 transition-all duration-300 hover:bg-action-900  text-main '>Getting started !</Link>
        </div>
    </div>
      <div className='lg:w-2/3 w-full' >
    <ProgressSteps content={stepsContent}/>
        
    </div>
        </div>
        {/* Progress Steps */}

        <FaqsSectionComp faqs={faqs?faqs:[]}/>
        <ClientComponent/>
      </>
  )
}

export default index

export async function getStaticProps() {
  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_ADMIN_URL + "/api/web-design-and-development");
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



