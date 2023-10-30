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
import ContentComp2 from '@/components/ContentComp2';
import LetsConnectComp from '@/components/LetsConnectComp';
import ContentComp3 from '@/components/ContentComp3';
function index({seoInformation,faqs}) {
  const [show, setShow] = useState(false);
  const content2 = {
    serviceName: 'Serach Engine Optimization',
    explanation: 'SEO (Search Engine Optimization) is the practice of optimizing a website and its content to improve its visibility and ranking on search engines like Google, Bing, and Yahoo. The primary goal of SEO is to increase organic (non-paid) traffic to a website by achieving higher search engine rankings for relevant keywords and phrases.In the ever-evolving landscape of technology, success hinges on connecting with your audience where they are most active—online. Tech-savvy buyers embark on their journeys through digital pathways, often beginning with a simple Google search or engaging with brands through social media platforms. To effectively capture today\'s tech buyer, you must align with their digital voyage from start to finish.',
    description: 'Digital marketing encompasses a myriad of essential disciplines, spanning the creation of your website to the intricacies of SEO and the power of paid search. It extends further into the realm of eMarketing, leveraging the potential of social media, and the impact of paid advertising. As an integrated B2B marketing agency, we\'ve honed our expertise in each of these facets, and, more importantly, we\'ve mastered the art of weaving them together into a comprehensive 360-degree marketing approach designed to deliver tangible results.',    
    extras:' Digital marketing spans many disciplines from your website to SEO and paid search, from eMarketing through to social and paid media. As an Integrated B2B Agency, we have built expertise in each of these areas. And more importantly, we know how to blend all the aspects of digital marketing to take a 360-degree marketing approach that drives results.'
  }
  const content3 = [
    {
      question: 'What is SEO?',
      answer: 'SEO (Search Engine Optimization) is the practice of optimizing a website and its content to improve its visibility and ranking on search engines like Google, Bing, and Yahoo. The primary goal of SEO is to increase organic (non-paid) traffic to a website by achieving higher search engine rankings for relevant keywords and phrases.',
    },
    {
      question: 'Why is SEO important?',
      answer: 'SEO is important because it helps people find information and discover pages on the world wide web. SEO is especially important for businesses as it ensures they\'re answering their audience\'s biggest questions on search engines, while driving traffic to their products and services.',
    }, {
      question: 'What is the difference between SEO and SEM?',
      answer: 'SEO is the practice of optimizing websites to make them reach a high position in Google\'s - or another search engine\'s - search results. SEM is an umbrella term that covers SEO and PPC (which is paid).',
    }, {
      question: 'What is the difference between SEO and PPC?',
      answer: 'SEO is the practice of optimizing websites to make them reach a high position in Google\'s - or another search engine\'s - search results. SEM is an umbrella term that covers SEO and PPC (which is paid).',
    }
  ]
    return (
        <>
           <SeoComp seoInformation={seoInformation}>

</SeoComp>
<NavbarComp />
<NavbarComp />
        <div >
            <div className='object-contain  relative h-[100vh]  '>
        <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/search-engine-optimization.webp'} width={1920} height={1080} className='w-full h-full object-cover sm:object-top object-center  '></Image>
                <div className='bg-gray-600 backdrop-blur rounded-lg absolute h-fit gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-10 p-4  bg-opacity-20 lg:left-24 w-10/12 m-3 top-1/3 lg:max-w-[35vw] '>
              <p className='text-main bg-footerColor px-2 py-1 absolute -top-2 -left-2'>Services{' > '}Digital Marketing Services</p>
                    <p className='text-main font-bold text-2xl pt-5'>Search Engine Optimization</p>
                    <div className='relative h-fit pl-5'>
<p className='text-xs text-main'>Boost your online presence with our SEO expertise. We optimize your website, improve search engine rankings, and drive organic traffic to enhance your digital visibility. Stay ahead in the digital landscape with our proven SEO strategies.</p>
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
    const res = await axios.get(process.env.NEXT_PUBLIC_ADMIN_URL + "/api/seo-service");
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