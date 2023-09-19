import NavbarComp from '@/components/NavbarComp'
import React,{useState} from 'react'
import Image from 'next/image'
import { Fade } from 'react-reveal'
import Head from 'next/head';
import Link from 'next/link';
import { BiSolidLeftArrow} from 'react-icons/bi';
function index() {
  const [show, setShow] = useState(false);
  return (<>
    <Head>
      <title>Digital Marketing Services | Digital Marketing Agency in India</title>
      <link rel="icon" href="https://d1efbx4910ct8i.cloudfront.net/Images2/favicon.png" />
      <meta name="description" content="We offer a wide range of digital services in India including Social Media Marketing, Search Engine Optimization, Email Marketing, Graphic Design, Content Writing, Content Marketing, Website Design & Development, Application Development, Paid Marketing, Corporate Photoshoot and Others." />
      <meta name="keywords" content="digital marketing services, digital marketing agency in india, digital marketing company in india, digital marketing services in india, digital marketing agency in delhi, digital marketing company in delhi, digital marketing services in delhi, digital marketing agency in noida, digital marketing company in noida, digital marketing services in noida, digital marketing agency in gurgaon, digital marketing company in gurgaon, digital marketing services in gurgaon, digital marketing agency in faridabad, digital marketing company in faridabad, digital marketing services in faridabad, digital marketing agency in ghaziabad, digital marketing company in ghaziabad, digital marketing services in jaipur" />
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
      </Head>
            <NavbarComp />
        <div >
            <div className='object-contain  relative h-[100vh]  '>
        <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/digital.webp'} width={1920} height={1080} className='w-full h-full object-cover sm:object-top object-center  '></Image>
                <div className='bg-gray-600 sm:backdrop-blur rounded-lg absolute h-fit gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-10  bg-opacity-20 sm:left-24 w-10/12 m-3 top-1/3 sm:max-w-[30vw] '>
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
            <div className='sm:px-24 px-1 py-5'>
        <div className={`sm:grid sm:grid-cols-3 ${show?'sm:grid-rows-4':'sm:grid-rows-2'} gap-5 flex flex-row flex-wrap mt-10`}>

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
            <Link href={'/contactus'} className='flex flex-row justify-end'> <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/arrow_icon_yellow.svg'} width={20} height={20}></Image></Link>
            </div>
        </section>
          <section className='shadow-xl Normal col-span-1 col-start-3  row-start-1 w-full sm:h-full h-56 object-cover relative'>
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
        </section>
          <section className='shadow-xl Normal col-span-1 col-start-1 row-start-2   w-full sm:h-full h-56 object-cover relative bg-main'>
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
        <section className='shadow-xl ImageWithContent col-span-2 col-start-2 row-start-2 flex sm:flex-row flex-col sm:min-h-full h-full w-full'>
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
        </section>
        <section className={`shadow-xl ImageWithContent col-span-2 col-start-1 row-start-3 flex sm:flex-row flex-col sm:min-h-full h-full w-full ${show?'block':'hidden'}`}>
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
        </section>
          <section className={`shadow-xl Normal col-span-1 col-start-3  row-start-3 w-full sm:h-full h-56 object-cover relative ${show?'block':'hidden'}`}>
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
            <Link href={'/contactus'} className='flex flex-row justify-end'> <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/arrow_icon_yellow.svg'} width={20} height={20}></Image></Link>
            </div>
        </section>
          <section className={`shadow-xl Normal col-span-1 col-start-1 row-start-4  w-full sm:h-full h-56  object-cover relative bg-main  ${show?'block':'hidden'}`}>
            

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
            <Link href={'/contactus'} className='flex flex-row justify-end'> <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/arrow_icon_yellow.svg'} width={20} height={20}></Image></Link>
            </div>
        </section>
        <section className={`shadow-xl ImageWithContent col-span-2 col-start-2 row-start-4 flex sm:flex-row flex-col sm:min-h-full h-full w-full ${show?'block':'hidden'}`}>
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
        </section>
        </div>
          <div className="flex flex-row justify-center items-center py-4 w-full cursor-pointer ">
          <span className='bg-action-900 text-main px-2 py-1 font-thin text-sm' onClick={()=>setShow(e=>!e)}>{show ?'Load less':'Load more'}</span>
          </div>
         
            </div>
            </div>
            </>
  )
}

export default index