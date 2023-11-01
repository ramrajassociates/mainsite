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
    serviceName: 'Social Media Marketing',
    explanation: 'Social media marketing is a digital marketing strategy that leverages social media platforms to connect with the target audience and build a brand\'s online presence. It involves creating and sharing engaging content on social networks like Facebook, Instagram, Twitter, and LinkedIn to achieve marketing and branding goals. Social media marketing is essential in today\'s digital landscape, as it enables businesses to interact with customers and prospects directly, fostering relationships and driving engagement.',
    description: 'Social media marketing encompasses various activities, including content creation, community management, advertising, and analytics. It\'s a versatile tool for businesses to increase brand awareness, drive website traffic, and generate leads. Successful social media marketing campaigns are built on a solid understanding of the target audience, strategic content planning, and regular monitoring and optimization.',
    extras: 'The dynamic nature of social media requires businesses to adapt and stay current with the latest trends and algorithms on each platform. Social media marketing is not just about posting content but also about actively engaging with the community, responding to comments, and leveraging user-generated content to build trust and credibility.'
  };
  
  const content3 = [
    {
      question: 'What is Social Media Marketing?',
      answer: 'Social media marketing is a digital marketing strategy that leverages social media platforms to connect with the target audience and build a brand\'s online presence. It involves creating and sharing engaging content on social networks like Facebook, Instagram, Twitter, and LinkedIn to achieve marketing and branding goals.',
    },
    {
      question: 'Why is Social Media Marketing important?',
      answer: 'Social media marketing is important because it provides businesses with a direct channel to interact with their audience, build brand loyalty, and drive engagement. It\'s a cost-effective way to reach a wide range of potential customers and foster community around your brand.',
    },
    {
      question: 'What are some key components of a successful social media strategy?',
      answer: 'A successful social media strategy includes target audience research, content planning, posting schedules, engagement with the community, data analytics, and regular optimization. Businesses should also consider platform-specific strategies as different social networks have unique features and audience behaviors.',
    },
    {
      question: 'Which social media platforms are commonly used for marketing?',
      answer: 'Commonly used social media platforms for marketing include Facebook, Instagram, Twitter, LinkedIn, Pinterest, and TikTok. The choice of platform depends on the nature of the business, its target audience, and its marketing objectives.',
    }
  ];
  
    return (
      <>
        <SeoComp seoInformation={seoInformation}>

</SeoComp>
<NavbarComp />
        <div >
            <div className='object-contain  relative h-[100vh]  '>
        <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/social-media-marketing.webp'} width={1920} height={1080} className='w-full h-full object-cover sm:object-top object-center  '></Image>
                <div className='bg-gray-600 backdrop-blur rounded-lg absolute h-fit gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-10 p-4  bg-opacity-20 lg:left-24 w-10/12 m-3 top-1/3 lg:max-w-[35vw] '>
              <p className='text-main bg-footerColor px-2 py-1 absolute -top-2 -left-2'>Services{' > '}Digital Marketing Services</p>
                    <p className='text-main font-bold text-2xl pt-5'>Social Media Marketing</p>
                    <div className='relative h-fit pl-5'>
<p className='text-xs text-main'>Boost your brand's online presence and engagement through strategic social media marketing. We create data-driven campaigns on platforms like Facebook, Instagram, and Twitter to reach your target audience. Our team crafts compelling content, runs targeted ads, and analyzes results to maximize ROI and drive business growth.</p>
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
    const res = await axios.get(process.env.NEXT_PUBLIC_ADMIN_URL + "/api/social-media-marketing-service");
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