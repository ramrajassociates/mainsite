import HeaderComp from '@/components/HomePage/HeaderComp'
import ServicesComp from '@/components/HomePage/ServicesComp';
import NavbarComp from '@/components/NavbarComp';
import Head from 'next/head'
import axios from 'axios';
export default function Home({data}) {
  // console.log("data from HomePage", data);
  return (
    <>
      <Head>
      <title>Leading IT Solutions and Consultation firm India | RamRaj Associates</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="RamRaj Associates is a leading IT Solutions and Consulting firm offers Dynamic IT solutions for your business success."></meta>
        <link rel="canonical" href="https://ramrajassociates.com/">
        </link>
        <meta property="og:title" content="Leading IT Solutions and Consultation firm India | RamRaj Associates"/>
        <link rel="icon" href="https://d1efbx4910ct8i.cloudfront.net/Images2/favicon.png" />
      </Head>
      <NavbarComp />

      <main className='overflow-x-hidden'>
        <HeaderComp faqs={data?data.attributes.faqs.questionAnswer:[]}/>
      </main>
    </>
  )
}


export async function getStaticProps() {
  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_ADMIN_URL + "/api/home-page");
    const data = res.data;
    
    return {
      props: {
        data:data.data,
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