import { useState, useEffect, useRef } from 'react';
import HeaderComp from '@/components/HomePage/HeaderComp'
import ServicesComp from '@/components/HomePage/ServicesComp';
import NavbarComp from '@/components/NavbarComp';
import Head from 'next/head'
import axios from 'axios';
import SeoComp from '@/components/SeoComp';
import AboutComp from "@components/HomePage/AboutComp";
import ServiceCarousel from "@components/HomePage/ServiceCarousel";
import ServiceCompParent from "@components/HomePage/ServiceCompParent";
import AboutComp2 from "@components/HomePage/AboutComp2";
import BlogAndTeamComponent from "@components/HomePage/BlogAndTeamComponent";
import FaqsSectionComp from "@components/FAQS/FaqsSectionComp";
import FooterCompWithCta from '@/components/HomePage/FooterCompWithCta';
import { Main } from 'next/document';
export default function Home({seoInformation,faqs}) {
  const serviceFaqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a wide range of services, including web design and development, SEO, PPC marketing, social media management, and more. You can explore our full list of services on our Services page.'
    },
    {
      question: 'How do I request a quote for your services?',
      answer: 'To request a quote for any of our services, simply visit the Contact Us page and fill out the inquiry form. Our team will get back to you with a customized quote based on your specific needs.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We have experience serving clients across various industries, including e-commerce, healthcare, finance, and more. Our team of experts can tailor our services to suit your industry and business goals.'
    },
    {
      question: 'Can you handle custom development projects?',
      answer: 'Yes, we specialize in custom web development and software solutions. Whether you need a unique web application or a tailored software solution, our team can bring your vision to life.'
    },
    {
      question: 'What sets your services apart from the competition?',
      answer: 'Our commitment to quality, innovation, and client satisfaction sets us apart. We work closely with our clients to deliver customized solutions, staying at the forefront of industry trends and technologies.'
    }
  ];
  // For Navbar
  const MainDivRef=useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const handleScroll = () => {
    // console.log("Scrolling inside div , height :", MainDivRef.current.scrollTop);
    if (MainDivRef.current.scrollTop > 50) {
      setIsSticky(true);
    }
    else {
      setIsSticky(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []);
  // For Navbar
  return (
    <div>
      <SeoComp seoInformation={seoInformation}>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ramrajassociates.com/">
        </link>
        <meta property="og:title" content="Leading IT Solutions and Consultation firm India | RamRaj Associates"/>
        <link rel="icon" href="https://d1efbx4910ct8i.cloudfront.net/Images2/favicon.png" />
      </SeoComp>

      <main className='w-screen h-screen snap-y snap-proximity overflow-y-scroll overflow-x-hidden ' ref={MainDivRef} onScroll={handleScroll}>
        <NavbarComp position={isSticky} />
        <HeaderComp/>
        <ServiceCompParent />
       <AboutComp className=" " />
        <AboutComp2 />
        <ServiceCarousel className="" />
        <BlogAndTeamComponent />
        <FaqsSectionComp faqs={faqs} className="w-screen lg:min-h-screen snap-start" />
        <FooterCompWithCta/>
      </main>
    </div>
  )
}


export async function getStaticProps() {
  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_ADMIN_URL + "/api/home-page");
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
        data: null, // You can handle this in your component if data is null
      },
    };
  }
}