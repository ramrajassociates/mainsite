import NavbarComp from "@/components/NavbarComp";
import ContactHeaderComp from "@/components/contactusPage/ContactHeaderComp";
import React from "react";
import SeoComp from "@/components/SeoComp";
import FaqsSectionComp from "@/components/FAQS/FaqsSectionComp";
import axios from "axios";
function index({ seoInformation, faqs }) {
  // console.log("Data from contactus page", seoInformation, faqs)
  return (
    <>
      <SeoComp seoInformation={seoInformation}>
        <meta
          name="keywords"
          content="digital marketing services, digital marketing agency in india, digital marketing company in india, digital marketing services in india, digital marketing agency in delhi, digital marketing company in delhi, digital marketing services in delhi, digital marketing agency in noida, digital marketing company in noida, digital marketing services in noida, digital marketing agency in gurgaon, digital marketing company in gurgaon, digital marketing services in gurgaon, digital marketing agency in faridabad, digital marketing company in faridabad, digital marketing services in faridabad, digital marketing agency in ghaziabad, digital marketing company in ghaziabad, digital marketing services in jaipur"
        />
        <meta
          property="og:title"
          content="Digital Marketing Services | Digital Marketing Agency in India"
        />
        <meta
          property="og:description"
          content="We offer a wide range of digital services in India including Social Media Marketing, Search Engine Optimization, Email Marketing, Graphic Design, Content Writing, Content Marketing, Website Design & Development, Application Development, Paid Marketing, Corporate Photoshoot and Others."
        />
        <meta
          property="og:url"
          content="https://www.ramrajassociates.com/contact"
        />
        {/* <meta property="og:image" content="https://www.ramrajassociates.comhttps://d1efbx4910ct8i.cloudfront.net/Images2/digital.webp" /> */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Ramraj Associates" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RamrajAssociate" />
        <meta name="twitter:creator" content="@RamrajAssociate" />
        <meta
          name="twitter:title"
          content="Digital Marketing Services | Digital Marketing Agency in India"
        />
        <meta
          name="twitter:description"
          content="We offer a wide range of digital services in India including Social Media Marketing, Search Engine Optimization, Email Marketing, Graphic Design, Content Writing, Content Marketing, Website Design & Development, Application Development, Paid Marketing, Corporate Photoshoot and Others."
        />
        {/* <meta name="twitter:image" content="https://www.ramrajassociates.comhttps://d1efbx4910ct8i.cloudfront.net/Images2/digital.webp" /> */}
        <link
          rel="canonical"
          href="https://ramrajassociates.com/contact"
        ></link>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NJQZ3VP2');
        `,
          }}
        />
      </SeoComp>
      <NavbarComp />

      <ContactHeaderComp />
      {/* <FaqsSectionComp faqs={faqs?faqs:[]}/> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NJQZ3VP2"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </>
  );
}

export default index;

export async function getStaticProps() {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_ADMIN_URL + "/api/contact-us"
    );
    const data = res.data;
    const seoInformation = data.data.attributes.seoInformation;
    const faqs = data.data.attributes.faqs.questionAnswer;
    return {
      props: {
        seoInformation,
        faqs,
      },
    };
  } catch (error) {
    // console.error("Error fetching data:", error);
    return {
      props: {
        seoInformation: null,
        faqs: null,
      },
    };
  }
}
