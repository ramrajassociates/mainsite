import NavbarComp from '@/components/NavbarComp'
import React,{useState} from 'react'
import Image from 'next/image'
import { Fade } from 'react-reveal'
import Head from 'next/head';
import Link from 'next/link';
import { BiSolidLeftArrow} from 'react-icons/bi';
function index() {
  const [show, setShow] = useState(false);
    return (
        <>
              <Head>

</Head>
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
    console.error("Error fetching data:", error);
    return {
      props: {
        seoInformation:null,
        faqs:null
      },
    };
  }
}