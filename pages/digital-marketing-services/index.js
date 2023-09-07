import NavbarComp from '@/components/NavbarComp'
import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-reveal'
import Head from 'next/head'
function index() {
  return (<>
    <Head>
      <title>Digital Marketing Services | Digital Marketing Agency in India</title>
      <meta name="description" content="We offer a wide range of digital services in India including Social Media Marketing, Search Engine Optimization, Email Marketing, Graphic Design, Content Writing, Content Marketing, Website Design & Development, Application Development, Paid Marketing, Corporate Photoshoot and Others." />
      <meta name="keywords" content="digital marketing services, digital marketing agency in india, digital marketing company in india, digital marketing services in india, digital marketing agency in delhi, digital marketing company in delhi, digital marketing services in delhi, digital marketing agency in noida, digital marketing company in noida, digital marketing services in noida, digital marketing agency in gurgaon, digital marketing company in gurgaon, digital marketing services in gurgaon, digital marketing agency in faridabad, digital marketing company in faridabad, digital marketing services in faridabad, digital marketing agency in ghaziabad, digital marketing company in ghaziabad, digital marketing services in jaipur" />
      <meta property="og:title" content="Digital Marketing Services | Digital Marketing Agency in India" />
      <meta property="og:description" content="We offer a wide range of digital services in India including Social Media Marketing, Search Engine Optimization, Email Marketing, Graphic Design, Content Writing, Content Marketing, Website Design & Development, Application Development, Paid Marketing, Corporate Photoshoot and Others." />
      <meta property="og:url" content="https://www.ramrajassociates.com/digital-marketing-services" />
      {/* <meta property="og:image" content="https://www.ramrajassociates.com/Images/digital.jpg" /> */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Ramraj Associates" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@RamrajAssociate" />
      <meta name="twitter:creator" content="@RamrajAssociate" />
      <meta name="twitter:title" content="Digital Marketing Services | Digital Marketing Agency in India" />
      <meta name="twitter:description" content="We offer a wide range of digital services in India including Social Media Marketing, Search Engine Optimization, Email Marketing, Graphic Design, Content Writing, Content Marketing, Website Design & Development, Application Development, Paid Marketing, Corporate Photoshoot and Others." />
      {/* <meta name="twitter:image" content="https://www.ramrajassociates.com/Images/digital.jpg" /> */}
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
            <div className='object-contain h-[100vh] relative !snap-center '>
        <Image src={'/Images/digital.jpg'} width={1920} height={1080} className='w-full h-full object-cover sm:object-top object-center  '></Image>
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
            <div className='sm:px-24 px-1 !snap-center'>
                <h1 className='text-center text-2xl py-5'>Our Digital Marketing Services</h1>
                <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">

    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class="h-40 rounded w-full object-cover object-center mb-6" src={'/Images/seo.jpg'} alt="Search engine optimization" width={520} height={500}></Image>
         
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Search Engine Optimization</h2>
          <p class="leading-relaxed text-base">Boost your online presence with our SEO expertise. We optimize your website, improve search engine rankings, and drive organic traffic to enhance your digital visibility. Stay ahead in the digital landscape with our proven SEO strategies.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class="h-40 rounded w-full object-cover object-center mb-6" src={'/Images/s-m-o.png'} alt="social media optimization" width={520} height={500}></Image>
          
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Social Media Optimization</h2>
          <p class="leading-relaxed text-base">Elevate your brand's social media presence with our SMO services. We craft compelling content, engage your audience, and enhance your social media profiles to increase brand awareness. Harness the power of social media for business growth with our tailored SMO strategies.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class="h-40 rounded w-full object-cover object-center mb-6" src={'/Images/c-w.jpg'} alt="content" width={520} height={500}></Image>
          
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Content Writing </h2>
          <p class="leading-relaxed text-base">Engage your audience with captivating content. Our expert writers create SEO-friendly blog posts, website copy, articles, and more. Whether you need informative, persuasive, or entertaining content, we deliver quality that resonates with your readers and boosts your online visibility. Let words work wonders for your brand.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class="h-40 rounded w-full object-cover object-center mb-6" src={'/Images/w-d.jpg'} alt="content" width={520} height={500}></Image>
          
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Web Development</h2>
          <p class="leading-relaxed text-base">Transform your ideas into digital reality with our web development expertise. We design and develop responsive, user-friendly websites and web applications tailored to your needs. From e-commerce sites to interactive web platforms, we blend creativity and technology to deliver seamless online experiences that drive business growth. Your online presence, our passion.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class="h-40 rounded w-full object-cover object-center mb-6" src={'/Images/s-e-m.jpg'} alt="content" width={520} height={500}></Image>
          
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Search Engine Marketing</h2>
          <p class="leading-relaxed text-base"> Elevate your online visibility and reach your target audience with our results-driven Search Engine Marketing strategies. We specialize in pay-per-click (PPC) advertising, optimizing your ad campaigns to deliver maximum ROI. Harness the power of search engines to drive qualified traffic and boost your business. Stay ahead of the competition and achieve measurable results with our SEM solutions.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class="h-40 rounded w-full object-cover object-center mb-6" src={'/Images/s-m-m.jpg'} alt="content" width={520} height={500}></Image>
          
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Social Media Marketing</h2>
          <p class="leading-relaxed text-base">Boost your brand's online presence and engagement through strategic social media marketing. We create data-driven campaigns on platforms like Facebook, Instagram, and Twitter to reach your target audience. Our team crafts compelling content, runs targeted ads, and analyzes results to maximize ROI and drive business growth.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class="h-40 rounded w-full object-cover object-center mb-6" src={'/Images/p-a-v.jpg'} alt="content" width={520} height={500}></Image>
          
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Photo & Videography</h2>
          <p class="leading-relaxed text-base">Bring your brand to life with captivating visuals. Our expert photographers and videographers capture the essence of your business, products, and services. From stunning images to compelling videos, we create content that resonates with your audience. Whether it's for marketing campaigns, events, or your website, let us tell your story through the lens.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class="h-40 rounded w-full object-cover object-center mb-6" src={'/Images/g-d.jpg'} alt="content" width={520} height={500}></Image>
          
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Graphic Design</h2>
          <p class="leading-relaxed text-base"> Make a lasting impression with eye-catching visuals. Our talented graphic designers transform ideas into striking designs that communicate your brand's identity. From logos and branding materials to marketing collateral and digital graphics, we craft designs that leave a mark. Elevate your brand's aesthetics with our creative expertise in graphic design.</p>
        </div>
      </div>
    </div>
  </div>
</section>
            </div>
            </div>
            </>
  )
}

export default index