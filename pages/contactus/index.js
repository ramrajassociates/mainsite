import NavbarComp from '@/components/NavbarComp'
import ContactHeaderComp from '@/components/contactusPage/ContactHeaderComp'
import React from 'react'
import Head from 'next/head'
function index() {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Office Address - 32, Shastri Nagar, Jaipur| info@ramrajassociates.com | +91-9116145123" />
        <link rel="icon" href="/Images/favicon.png" />
        <meta name="keywords" content="digital marketing services, digital marketing agency in india, digital marketing company in india, digital marketing services in india, digital marketing agency in delhi, digital marketing company in delhi, digital marketing services in delhi, digital marketing agency in noida, digital marketing company in noida, digital marketing services in noida, digital marketing agency in gurgaon, digital marketing company in gurgaon, digital marketing services in gurgaon, digital marketing agency in faridabad, digital marketing company in faridabad, digital marketing services in faridabad, digital marketing agency in ghaziabad, digital marketing company in ghaziabad, digital marketing services in jaipur" />
      <meta property="og:title" content="Digital Marketing Services | Digital Marketing Agency in India" />
      <meta property="og:description" content="We offer a wide range of digital services in India including Social Media Marketing, Search Engine Optimization, Email Marketing, Graphic Design, Content Writing, Content Marketing, Website Design & Development, Application Development, Paid Marketing, Corporate Photoshoot and Others." />
      <meta property="og:url" content="https://www.ramrajassociates.com/contactus" />
      {/* <meta property="og:image" content="https://www.ramrajassociates.com/Images/digital.jpg" /> */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Ramraj Associates" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@RamrajAssociate" />
      <meta name="twitter:creator" content="@RamrajAssociate" />
      <meta name="twitter:title" content="Digital Marketing Services | Digital Marketing Agency in India" />
      <meta name="twitter:description" content="We offer a wide range of digital services in India including Social Media Marketing, Search Engine Optimization, Email Marketing, Graphic Design, Content Writing, Content Marketing, Website Design & Development, Application Development, Paid Marketing, Corporate Photoshoot and Others." />
      {/* <meta name="twitter:image" content="https://www.ramrajassociates.com/Images/digital.jpg" /> */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="slurp" content="index, follow" />
      <meta name="rating" content="general" />
      <meta name="referrer" content="always" />
      <meta name="distribution" content="global" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      <meta name="revisit-after" content="7 days" />
      <meta name="language" content="English" />
        
        </Head>
          <NavbarComp bgColor="black" position="sticky"/>
          <ContactHeaderComp/>
    </div>
  )
}

export default index