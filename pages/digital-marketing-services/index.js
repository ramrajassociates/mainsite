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
import ContentComp1 from '@/components/ContentComp1';
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
  return (<>
    <SeoComp seoInformation={seoInformation}>
      <meta property="og:title" content="Digital Marketing Services | Digital Marketing Agency in India" />
      <meta property="og:description" content="We offer a wide range of digital services in India including Social Media Marketing, Search Engine Optimization, Email Marketing, Graphic Design, Content Writing, Content Marketing, Website Design & Development, Application Development, Paid Marketing, Corporate Photoshoot and Others." />
      <meta property="og:url" content="https://www.ramrajassociates.com/digital-marketing-services" />
      {/* <meta property="og:image" content="https://www.ramrajassociates.comhttps://d1efbx4910ct8i.cloudfront.net/Images2/digital.webp" /> */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Ramraj Associates" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@RamrajAssociate" />
      <meta name="twitter:creator" content="@RamrajAssociate" />
      <meta name="twitter:title" content="Digital Marketing Services | Digital Marketing Agency in India" />
      <meta name="twitter:description" content="We offer a wide range of digital services in India including Social Media Marketing, Search Engine Optimization, Email Marketing, Graphic Design, Content Writing, Content Marketing, Website Design & Development, Application Development, Paid Marketing, Corporate Photoshoot and Others." />
      {/* <meta name="twitter:image" content="https://www.ramrajassociates.comhttps://d1efbx4910ct8i.cloudfront.net/Images2/digital.webp" /> */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="slurp" content="index, follow" />
      <meta name="rating" content="general" />
      <meta name="referrer" content="always" />
      <meta name="distribution" content="global" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      <meta name="revisit-after" content="7 days" />
      <meta name="language" content="English" />
      </SeoComp>
    <NavbarComp />
        <div>
            <div className='object-contain  relative h-[100vh]  '>
        <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/digital.webp'} width={1920} height={1080} className='w-full h-full object-cover sm:object-top object-center  '></Image>
                <div className='bg-gray-600 backdrop-blur rounded-lg absolute h-fit gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-10 p-4  bg-opacity-20 lg:left-24 w-10/12 m-3 top-1/3 lg:max-w-[30vw] '>
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
      <ContentComp1 title={ContentComp.title} BigTitle={ContentComp.Bigtitle} content={ContentComp.content}/>
            <div className='sm:px-24 px-1 py-5'>
        <div className={`sm:grid sm:grid-cols-3 ${show?'sm:grid-rows-3':'sm:grid-rows-2'} gap-5 flex flex-row flex-wrap mt-10`}>

        <section className='shadow-xl ImageWithContent col-span-2 col-start-1 row-start-1 flex sm:flex-row flex-col sm:min-h-full h-full w-full'>
            <div className='Image object-cover sm:w-1/2 w-full !min-h-full '>
              <Image className='w-full h-full object-cover'src={'https://d1efbx4910ct8i.cloudfront.net/Images2/seo.webp'} alt="Search engine optimization" width={520} height={500} ></Image>
            </div>
            <div className='content sm:w-1/2 w-full relative bg-main hover:bg-gray-200 transition-all duration-300 group sm:p-10 p-5 !min-h-full'>
              <BiSolidLeftArrow className='text-main group-hover:text-gray-200 absolute transition-all duration-300  sm:-left-8 sm:top-10 left-10 -top-8 rotate-90 sm:rotate-0 ' size={50}></BiSolidLeftArrow>
              <h2 className='text-xl font-semibold'>Search Engine Optimization</h2>
              <div className='w-full py-3'>
              <div className="w-full h-fit relative overflow-hidden flex justify-center items-center ">
                                    
                                    <p className=" font-thin text-sm  pl-5 overflow-y-scroll scrollbar-hidden">
                                    Boost your online presence with our SEO expertise. We optimize your website, improve search engine rankings, and drive organic traffic to enhance your digital visibility. Stay ahead in the digital landscape with our proven SEO strategies.
                                  </p>
                                  <Fade bottom delay={1200} >
                        <span className=" border-l border-action-900 h-full  absolute left-2 top-0 "></span>
                        </Fade>
                                  </div>
                                  </div>
            <Link href={'/digital-marketing-services/seo'} className='flex flex-row justify-end'> <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/arrow_icon_yellow.svg'} width={20} height={20}></Image></Link>
            </div>
          </section>
          <section className={`shadow-xl Normal col-span-1   w-full sm:h-full h-64  object-cover relative bg-main  `}>
            

            <div className='sm:p-10 p-5 '>

        <h2 className='text-xl font-semibold text-gray-700'>Social Media Marketing</h2>
              <div className='w-full py-3'>
              <div className="w-full h-fit relative overflow-hidden flex justify-center items-center ">
                                    
                                    <p className=" font-thin text-sm  pl-5 overflow-y-scroll scrollbar-hidden text-gray-700">
                                    Boost your brand's online presence and engagement through strategic social media marketing. We create data-driven campaigns on platforms like Facebook, Instagram, and Twitter to reach your target audience. Our team crafts compelling content, runs targeted ads, and analyzes results to maximize ROI and drive business growth.
                                  </p>
                                  <Fade bottom delay={1200} >
                        <span className=" border-l border-action-900 h-full  absolute left-2 top-0 "></span>
                        </Fade>
                                  </div>
                                  </div>
            <Link href={'/digital-marketing-services/social-media-marketing'} className='flex flex-row justify-end'> <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/arrow_icon_yellow.svg'} width={20} height={20}></Image></Link>
            </div>
        </section>
          {/* <section className='shadow-xl Normal col-span-1 col-start-3  row-start-1 w-full sm:h-full h-64 object-cover relative'>
            <Image className="absolute w-full h-full object-cover object-center " src={'https://d1efbx4910ct8i.cloudfront.net/Images2/c-w.webp'} alt="content" width={520} height={500}></Image>
            <div className='absolute w-full h-full z-0 bg-black bg-opacity-50'></div>
            <div className='sm:p-10 p-5 absolute top-0 z-10'>

        <h2 className='text-xl font-semibold text-main'>Content Writing</h2>
              <div className='w-full py-3'>
              <div className="w-full h-fit relative overflow-hidden flex justify-center items-center ">
                                    
                                    <p className=" font-thin text-sm  pl-5 overflow-y-scroll scrollbar-hidden text-main">
                                    Boost your online presence with our SEO expertise. We optimize your website, improve search engine rankings, and drive organic traffic to enhance your digital visibility. Stay ahead in the digital landscape with our proven SEO strategies.
                                  </p>
                                  <Fade bottom delay={1200} >
                        <span className=" border-l border-action-900 h-full  absolute left-2 top-0 "></span>
                        </Fade>
                                  </div>
                                  </div>
            <Link href={'/contactus'} className='flex flex-row justify-end'> <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/arrow_icon_yellow.svg'} width={20} height={20}></Image></Link>
            </div>
        </section> */}
        
          <section className={`shadow-xl Normal col-span-1 w-full sm:h-full h-64 object-cover relative `}>
            <Image className="absolute w-full h-full object-cover object-center " src={'https://d1efbx4910ct8i.cloudfront.net/Images2/g-d.webp'} alt="content" width={520} height={500}></Image>
            <div className='absolute w-full h-full z-0 bg-black bg-opacity-50'></div>
            <div className='sm:p-10 p-5 absolute top-0 z-10'>

        <h2 className='text-xl font-semibold text-main'>Graphic Design</h2>
              <div className='w-full py-3'>
              <div className="w-full h-fit relative overflow-hidden flex justify-center items-center ">
                                    
                                    <p className=" font-thin text-sm  pl-5 overflow-y-scroll scrollbar-hidden text-main">
                                    Make a lasting impression with eye-catching visuals. Our talented graphic designers transform ideas into striking designs that communicate your brand's identity. From logos and branding materials to marketing collateral and digital graphics, we craft designs that leave a mark. Elevate your brand's aesthetics with our creative expertise in graphic design.
                                  </p>
                                  <Fade bottom delay={1200} >
                        <span className=" border-l border-action-900 h-full  absolute left-2 top-0 "></span>
                        </Fade>
                                  </div>
                                  </div>
            <Link href={'/digital-marketing-services/graphic-design'} className='flex flex-row justify-end'> <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/arrow_icon_yellow.svg'} width={20} height={20}></Image></Link>
            </div>
        </section>
        <section className='shadow-xl ImageWithContent col-span-2 flex sm:flex-row flex-col sm:min-h-full h-full w-full'>
            <div className='Image object-cover sm:w-1/2 w-full !min-h-full '>
              <Image className='w-full h-full object-cover'src={'https://d1efbx4910ct8i.cloudfront.net/Images2/ppc-marketing.webp'} alt="ppc marketing" width={520} height={500} ></Image>
            </div>
            <div className='content sm:w-1/2 w-full relative bg-main hover:bg-gray-200 transition-all duration-300 group sm:p-10 p-5 !min-h-full'>
              <BiSolidLeftArrow className='text-main group-hover:text-gray-200 absolute transition-all duration-300  sm:-left-8 sm:top-10 left-10 -top-8 rotate-90 sm:rotate-0 ' size={50}></BiSolidLeftArrow>
              <h2 className='text-xl font-semibold'>PPC Marketing</h2>
              <div className='w-full py-3'>
              <div className="w-full h-fit relative overflow-hidden flex justify-center items-center ">
                                    
                                    <p className=" font-thin text-sm  pl-5 overflow-y-scroll scrollbar-hidden">
                                    PPC marketing is a highly effective online advertising strategy where advertisers pay a fee each time their ad is clicked. This model is commonly used on search engines and social media platforms. It offers businesses the opportunity to display their ads to a highly targeted audience, ensuring that they only pay when their ad is clicked, making it a cost-effective and measurable method of driving traffic to websites and achieving marketing goals.
                                  </p>
                                  <Fade bottom delay={1200} >
                        <span className=" border-l border-action-900 h-full  absolute left-2 top-0 "></span>
                        </Fade>
                                  </div>
                                  </div>
            <Link href={'/digital-marketing-services/ppc-marketing'} className='flex flex-row justify-end'> <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/arrow_icon_yellow.svg'} width={20} height={20}></Image></Link>
            </div>
          </section>
          <section className={`shadow-xl Normal col-span-1   w-full sm:h-full h-64 object-cover relative bg-main ${show?'block':'hidden'}`}>
            <div className='sm:p-10 p-5 '>

        <h2 className='text-xl font-semibold text-gray-700'>Social Media Optimization</h2>
              <div className='w-full py-3'>
              <div className="w-full h-fit relative overflow-hidden flex justify-center items-center ">
                                    
                                    <p className=" font-thin text-sm  pl-5 overflow-y-scroll scrollbar-hidden text-gray-700">
                                    Elevate your brand's social media presence with our SMO services. We craft compelling content, engage your audience, and enhance your social media profiles to increase brand awareness. Harness the power of social media for business growth with our tailored SMO strategies.
                                  </p>
                                  <Fade bottom delay={1200} >
                        <span className=" border-l border-action-900 h-full  absolute left-2 top-0 "></span>
                        </Fade>
                                  </div>
                                  </div>
            <Link href={'/contactus'} className='flex flex-row justify-end'> <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/arrow_icon_yellow.svg'} width={20} height={20}></Image></Link>
            </div>
          </section>
        {/* <section className={`shadow-xl ImageWithContent col-span-2  flex sm:flex-row flex-col sm:min-h-full h-full w-full ${show?'block':'hidden'}`}>
            <div className='Image object-cover sm:w-1/2 w-full !min-h-full '>
              <Image className='w-full h-full object-cover'src={'https://d1efbx4910ct8i.cloudfront.net/Images2/p-a-v.webp'} alt="Search engine optimization" width={520} height={500} ></Image>
            </div>
            <div className='content sm:w-1/2 w-full relative bg-main hover:bg-gray-200 transition-all duration-300 group sm:p-10 p-5 !min-h-full'>
              <BiSolidLeftArrow className='text-main group-hover:text-gray-200 absolute transition-all duration-300  sm:-left-8 sm:top-10 left-10 -top-8 rotate-90 sm:rotate-0 ' size={50}></BiSolidLeftArrow>
              <h2 className='text-xl font-semibold'>Photo & Videography</h2>
              <div className='w-full py-3'>
              <div className="w-full h-fit relative overflow-hidden flex justify-center items-center ">
                                    
                                    <p className=" font-thin text-sm  pl-5 overflow-y-scroll scrollbar-hidden">
                                    Bring your brand to life with captivating visuals. Our expert photographers and videographers capture the essence of your business, products, and services. From stunning images to compelling videos, we create content that resonates with your audience. Whether it's for marketing campaigns, events, or your website, let us tell your story through the lens.
                                  </p>
                                  <Fade bottom delay={1200} >
                        <span className=" border-l border-action-900 h-full  absolute left-2 top-0 "></span>
                        </Fade>
                                  </div>
                                  </div>
            <Link href={'/contactus'} className='flex flex-row justify-end'> <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/arrow_icon_yellow.svg'} width={20} height={20}></Image></Link>
            </div>
        </section> */}
         
      
        {/* <section className={`shadow-xl ImageWithContent col-span-2 flex sm:flex-row flex-col sm:min-h-full h-full w-full ${show?'block':'hidden'}`}>
            <div className='Image object-cover sm:w-1/2 w-full !min-h-full '>
              <Image className='w-full h-full object-cover'src={'https://d1efbx4910ct8i.cloudfront.net/Images2/s-e-m.webp'} alt="Search engine optimization" width={520} height={500} ></Image>
            </div>
            <div className='content sm:w-1/2 w-full relative bg-main hover:bg-gray-200 transition-all duration-300 group sm:p-10 p-5 !min-h-full'>
              <BiSolidLeftArrow className='text-main group-hover:text-gray-200 absolute transition-all duration-300  sm:-left-8 sm:top-10 left-10 -top-8 rotate-90 sm:rotate-0 ' size={50}></BiSolidLeftArrow>
              <h2 className='text-xl font-semibold'>Search Engine Marketing</h2>
              <div className='w-full py-3'>
              <div className="w-full h-fit relative overflow-hidden flex justify-center items-center ">
                                    
                                    <p className=" font-thin text-sm  pl-5 overflow-y-scroll scrollbar-hidden">
                                    Elevate your online visibility and reach your target audience with our results-driven Search Engine Marketing strategies. We specialize in pay-per-click (PPC) advertising, optimizing your ad campaigns to deliver maximum ROI. Harness the power of search engines to drive qualified traffic and boost your business. Stay ahead of the competition and achieve measurable results with our SEM solutions.
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
          <div className="flex flex-row justify-center items-center py-4 w-full cursor-pointer ">
          <span className='bg-action-900 text-main px-2 py-1 font-thin text-sm' onClick={()=>setShow(e=>!e)}>{show ?'Load less':'Load more'}</span>
          </div>
         
            </div>
    </div>
    {/* Content Component */}
    <ContentComp4 />
    {/* Content Component */}
    {/* Progress Steps */}
    <div className='lg:px-24 px-5 space-y-7 flex lg:flex-row bg-gray-900 flex-col items-center lg:min-h-screen  '>
      <div className='lg:w-1/3 w-full space-y-7 p-4 '>
        <h1 className='text-6xl font-extrabold text-gray-200'>Digital Marketing Process</h1>
        <p className='text-gray-200'>When you work with a top-tier digital advertising company like Lounge Lizard, your business becomes an essential collaborator in the design and creation of your digital marketing services. We make sure that you and your new website have our entire attention from the very beginning to every last detail.</p>
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
  <ClientComponent />
            </>
  )
}

export default index


export async function getStaticProps() {
  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_ADMIN_URL + "/api/digital-marketing-service");
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