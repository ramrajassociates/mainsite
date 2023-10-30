import NavbarComp from '@/components/NavbarComp'
import React,{useState} from 'react'
import Image from 'next/image'
import { Fade } from 'react-reveal'
import Head from 'next/head';
import Link from 'next/link';
import { BiSolidLeftArrow } from 'react-icons/bi';
import SeoComp from '@/components/SeoComp';
import FaqsSectionComp from '@/components/FAQS/FaqsSectionComp';
import axios from 'axios';
import ContentComp2 from '@/components/ContentComp2';
import LetsConnectComp from '@/components/LetsConnectComp';
import ContentComp3 from '@/components/ContentComp3';
function index({seoInformation,faqs}) {
  const [show, setShow] = useState(false);
  const content2 = {
    serviceName: 'Graphic Design',
    explanation: 'Graphic design is the art of creating visual content to communicate messages effectively. It involves the use of various elements such as images, typography, and colors to create designs that can be used in various mediums, including print and digital. Graphic designers use their creative skills to convey ideas, information, and emotions through visually appealing designs.',
    description: 'Graphic design is a crucial aspect of branding and marketing. It plays a significant role in creating a strong visual identity for businesses. Whether it\'s designing logos, marketing materials, or website graphics, graphic design helps companies establish a consistent and memorable image that resonates with their target audience.',
    extras: 'Graphic designers are skilled in a wide range of tools and techniques, from Adobe Photoshop and Illustrator to layout design and color theory. They work closely with clients to understand their design needs and transform concepts into stunning visuals. Graphic design is not just about aesthetics; it\'s about conveying messages effectively through captivating and memorable designs.'
  };
  
  const content3 = [
    {
      question: 'What is Graphic Design?',
      answer: 'Graphic design is the art of creating visual content to communicate messages effectively. It involves the use of various elements such as images, typography, and colors to create designs that can be used in various mediums, including print and digital. Graphic designers use their creative skills to convey ideas, information, and emotions through visually appealing designs.',
    },
    {
      question: 'Why is Graphic Design important?',
      answer: 'Graphic design is important because it helps businesses and individuals create a visual identity that stands out and leaves a lasting impression. It\'s a powerful tool for conveying messages, building brand recognition, and connecting with an audience on an emotional level.',
    },
    {
      question: 'What skills do Graphic Designers possess?',
      answer: 'Graphic designers have a diverse skill set that includes proficiency in design software such as Adobe Creative Suite, an understanding of layout design, typography, color theory, and the ability to turn abstract ideas into compelling visual representations.',
    },
    {
      question: 'How does Graphic Design contribute to branding?',
      answer: 'Graphic design plays a crucial role in branding by creating logos, marketing materials, and visual elements that define a company\'s identity. A well-designed brand image helps establish trust, recognition, and differentiation in the market.',
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
        <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/graphic-design.webp'} width={1920} height={1080} className='w-full h-full object-cover sm:object-top object-center  '></Image>
                <div className='bg-gray-600 backdrop-blur rounded-lg absolute h-fit gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-10 p-4  bg-opacity-20 lg:left-24 w-10/12 m-3 top-1/3 lg:max-w-[35vw] '>
              <p className='text-main bg-footerColor px-2 py-1 absolute -top-2 -left-2'>Services{' > '}Digital Marketing Services</p>
                    <p className='text-main font-bold text-2xl pt-5'>Graphic Design</p>
                    <div className='relative h-fit pl-5'>
<p className='text-xs text-main'>Make a lasting impression with eye-catching visuals. Our talented graphic designers transform ideas into striking designs that communicate your brand's identity. From logos and branding materials to marketing collateral and digital graphics, we craft designs that leave a mark. Elevate your brand's aesthetics with our creative expertise in graphic design.</p>
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
    const res = await axios.get(process.env.NEXT_PUBLIC_ADMIN_URL + "/api/graphic-design");
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