import HeaderComp from '@/components/HomePage/HeaderComp'
import ServicesComp from '@/components/HomePage/ServicesComp'
import Head from 'next/head'

export default function Home() {
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
        <link rel="icon" href="/Images/favicon.png" />
      </Head>
      <main className='overflow-x-hidden'>
        <HeaderComp />
    </main>
    </>
  )
}
