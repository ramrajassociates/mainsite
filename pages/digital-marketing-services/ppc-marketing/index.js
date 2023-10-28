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
    serviceName: 'PPC Marketing',
    explanation: 'PPC (Pay-Per-Click) marketing is an online advertising model in which advertisers pay a fee each time one of their ads is clicked. It\'s a way of buying visits to your website rather than attempting to "earn" those visits organically. PPC is an effective method for driving targeted traffic to your website and can be highly cost-effective when managed efficiently.',
    description: 'PPC marketing involves creating and managing online advertising campaigns, typically on platforms like Google Ads and Bing Ads. Advertisers bid on specific keywords, and their ads appear when users search for those keywords. PPC allows businesses to reach potential customers when they are actively searching for products or services, making it a valuable tool for generating leads and sales.',
    extras: 'PPC marketing requires careful keyword research, ad copywriting, and bid management to optimize the budget and achieve the desired results. It\'s a measurable form of advertising, where advertisers can track the performance of their ads and make adjustments to improve ROI. Businesses can target their ads based on demographics, location, and user behavior, making PPC a versatile and efficient marketing strategy.'
  };
  
  const content3 = [
    {
      question: 'What is PPC Marketing?',
      answer: 'PPC (Pay-Per-Click) marketing is an online advertising model in which advertisers pay a fee each time one of their ads is clicked. It\'s a way of buying visits to your website rather than attempting to "earn" those visits organically. PPC is an effective method for driving targeted traffic to your website and can be highly cost-effective when managed efficiently.',
    },
    {
      question: 'Why is PPC Marketing important?',
      answer: 'PPC marketing is important because it allows businesses to display their ads to a highly targeted audience actively searching for their products or services. It provides quick and measurable results, making it an effective tool for generating leads and conversions. PPC marketing can also be tailored to various business goals, from brand awareness to sales.',
    },
    {
      question: 'How does PPC differ from other forms of advertising?',
      answer: 'PPC differs from traditional advertising in that you only pay when someone clicks on your ad. In contrast, traditional advertising often involves paying a fixed fee regardless of the ad\'s performance. PPC provides real-time data and precise targeting, allowing advertisers to allocate their budget strategically and optimize their campaigns for better results.',
    },
    {
      question: 'What platforms are commonly used for PPC advertising?',
      answer: 'Common platforms for PPC advertising include Google Ads (formerly AdWords), Bing Ads, and social media advertising on platforms like Facebook and Instagram. Each platform has its strengths and audience targeting options, allowing businesses to choose the most suitable platform for their goals and audience.',
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
        <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/ppc-marketing.webp'} width={1920} height={1080} className='w-full h-full object-cover object-center  '></Image>
                <div className='bg-gray-600 backdrop-blur rounded-lg absolute h-fit gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-10 p-4  bg-opacity-20 lg:left-24 w-10/12 m-3 top-1/3 lg:max-w-[35vw] '>
              <p className='text-main bg-footerColor px-2 py-1 absolute -top-2 -left-2'>Services{' > '}Digital Marketing Services</p>
                    <p className='text-main font-bold text-2xl pt-5'>PPC Marketing</p>
                    <div className='relative h-fit pl-5'>
<p className='text-xs text-main'>PPC marketing is a highly effective online advertising strategy where advertisers pay a fee each time their ad is clicked. This model is commonly used on search engines and social media platforms. It offers businesses the opportunity to display their ads to a highly targeted audience, ensuring that they only pay when their ad is clicked, making it a cost-effective and measurable method of driving traffic to websites and achieving marketing goals.</p>
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
    const res = await axios.get(process.env.NEXT_PUBLIC_ADMIN_URL + "/api/ppc-marketing");
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