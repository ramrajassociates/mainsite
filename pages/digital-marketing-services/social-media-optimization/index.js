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
    serviceName: 'Social Media Optimization (SMO)',
    explanation: 'Social Media Optimization (SMO) is the practice of enhancing and optimizing a brand\'s presence on social media platforms to increase visibility, engagement, and brand awareness. SMO involves a set of strategies and techniques to make the most of social media channels for marketing and branding. It focuses on optimizing social media profiles, content, and interactions to connect with the target audience effectively.',
    description: 'SMO plays a vital role in creating a strong online presence and fostering a positive brand image. It includes activities like profile optimization, content sharing, community building, and audience engagement. Successful SMO strategies lead to increased organic reach, better user engagement, and a more significant impact on social media platforms. It\'s a valuable tool for businesses looking to enhance their online visibility and reputation.',
    extras: 'Effective SMO strategies encompass activities like creating shareable content, building relationships with followers, utilizing social media analytics, and adapting to platform-specific features. By optimizing social media presence, businesses can enhance their online reputation, attract a loyal following, and encourage brand advocacy among their audience.'
  };
  
  const content3 = [
    {
      question: 'What is Social Media Optimization (SMO)?',
      answer: 'Social Media Optimization (SMO) is the practice of enhancing and optimizing a brand\'s presence on social media platforms to increase visibility, engagement, and brand awareness. It focuses on strategies to maximize the impact of social media channels for marketing and branding.',
    },
    {
      question: 'Why is Social Media Optimization (SMO) important?',
      answer: 'SMO is important because it helps businesses build a strong online presence and connect effectively with their target audience on social media platforms. It enhances organic reach, user engagement, and reputation, contributing to a positive brand image.',
    },
    {
      question: 'What are some key SMO strategies?',
      answer: 'Key SMO strategies include optimizing social media profiles, creating shareable content, fostering audience engagement, and utilizing analytics to measure performance. Businesses can tailor their strategies to each social media platform to maximize results.',
    },
    {
      question: 'Which social media platforms are commonly optimized through SMO?',
      answer: 'SMO can be applied to various social media platforms, including but not limited to Facebook, Instagram, Twitter, LinkedIn, Pinterest, and TikTok. The choice of platforms depends on the brand\'s target audience and marketing goals.',
    }
  ];
  
  
    return (
      <>
        <SeoComp seoInformation={seoInformation}>

</SeoComp>
<NavbarComp />
        <div >
            <div className='object-contain  relative h-[100vh]  '>
        <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/Social-media-optimization.webp'} width={1920} height={1080} className='w-full h-full object-cover sm:object-top object-center  '></Image>
                <div className='bg-gray-600 backdrop-blur rounded-lg absolute h-fit gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-10 p-4  bg-opacity-20 lg:left-24 w-10/12 m-3 top-1/3 lg:max-w-[35vw] '>
              <p className='text-main bg-footerColor px-2 py-1 absolute -top-2 -left-2'>Services{' > '}Digital Marketing Services</p>
                    <p className='text-main font-bold text-2xl pt-5'>Social Media Optimization</p>
                    <div className='relative h-fit pl-5'>
<p className='text-xs text-main'>Social Media Optimization is the process of optimizing your website and content to make it more shareable and visible on social media platforms. This can help you to reach a wider audience, increase brand awareness, and drive traffic to your website.</p>
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
    const res = await axios.get(process.env.NEXT_PUBLIC_ADMIN_URL + "/api/social-media-optimization");
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