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
    serviceName: 'WordPress Development',
    explanation: 'WordPress development involves creating websites and online platforms using the WordPress content management system (CMS). It is a versatile and user-friendly platform that allows for the efficient development of websites, blogs, and e-commerce stores. WordPress development includes themes, plugins, customization, and optimization to achieve the desired functionality and design.',
    description: 'WordPress is a popular choice for businesses and individuals looking to establish an online presence quickly. It offers a wide range of themes and plugins, making it highly customizable to meet specific requirements. WordPress development encompasses design, content creation, and technical aspects to deliver websites that are easy to manage and update.',
    extras: 'WordPress development provides the advantage of scalability, SEO optimization, and a user-friendly interface. It is suitable for various types of websites, from blogs and small business sites to large e-commerce platforms.'
  };
  
  const content3 = [
    {
      question: 'What is WordPress Development?',
      answer: 'WordPress development involves creating websites and online platforms using the WordPress content management system (CMS). It encompasses the customization of themes, integration of plugins, and optimization to achieve specific design and functionality goals.',
    },
    {
      question: 'Why is WordPress Development important?',
      answer: 'WordPress development is important because it offers a versatile and user-friendly platform for building websites, blogs, and e-commerce stores. It allows for customization, scalability, and easy management, making it a popular choice for online presence.',
    },
    {
      question: 'What are the key features of WordPress Development?',
      answer: 'Key features of WordPress development include a wide range of themes and plugins, scalability, SEO optimization, and a user-friendly interface. It is suitable for various types of websites and allows for easy content management.',
    },
    {
      question: 'How can businesses benefit from WordPress Development?',
      answer: 'Businesses can benefit from WordPress development by quickly establishing an online presence, customizing websites to their specific needs, and optimizing for search engines. It offers a user-friendly content management system and is suitable for various business types.',
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
        <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/wordpress.webp'} width={1920} height={1080} className='w-full h-full object-cover sm:object-top object-center  '></Image>
                <div className='bg-gray-600 backdrop-blur rounded-lg absolute h-fit gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-10 p-4  bg-opacity-20 lg:left-24 w-10/12 m-3 top-1/3 lg:max-w-[35vw] '>
              <p className='text-main bg-footerColor px-2 py-1 absolute -top-2 -left-2'>Services{' > '}Web Design And Development</p>
                    <p className='text-main font-bold text-2xl pt-5'>Wordpress Development</p>
                    <div className='relative h-fit pl-5'>
<p className='text-xs text-main'>WordPress development leverages the power of the world's most popular content management system. We create custom WordPress websites, themes, and plugins to meet your specific needs. Whether it's a blog, portfolio, or corporate site, our experts craft WordPress solutions that are highly functional and visually appealing.</p>
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
    const res = await axios.get(process.env.NEXT_PUBLIC_ADMIN_URL + "/api/wordpress-development-service");
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