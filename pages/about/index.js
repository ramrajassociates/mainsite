import AboutHeaderComp from "@/components/AboutusPage/AboutHeaderComp";
import TimeLine from "@/components/AboutusPage/TimeLine";
import NavbarComp from "@/components/NavbarComp";
import React from "react";
import Head from "next/head";
import axios from "axios";
import SeoComp from "@/components/SeoComp";
import FaqsSectionComp from "@/components/FAQS/FaqsSectionComp";
import ClientComponent from "@/components/ClientComponent";
import BlogAndTeamComponent from "@/components/HomePage/BlogAndTeamComponent";
import TeamComp from "@/components/AboutusPage/TeamComp";
function index({ seoInformation }) {
  return (
    <>
      <SeoComp seoInformation={seoInformation}>
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
          content="https://www.ramrajassociates.com/about"
        />

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
        <meta
          name="twitter:image"
          content="https://d1efbx4910ct8i.cloudfront.net/Images2/digital.webp"
        />
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
        <link rel="canonical" href="https://ramrajassociates.com/about"></link>
      </SeoComp>
      <NavbarComp />
      <div className="overflow-x-hidden">
        <AboutHeaderComp />
        {/* <TimeLine /> */}
        {/* <BlogAndTeamComponent/> */}
        <TeamComp />
        {/* <FaqsSectionComp faqs={faqs?faqs:[]}/> */}
        <ClientComponent />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NJQZ3VP2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </div>
    </>
  );
}

export default index;

// export async function getStaticProps() {
//   try {
//     const res = await axios.get(process.env.NEXT_PUBLIC_ADMIN_URL + "/api/about-us");
//     const data = res.data;
//     const seoInformation = data.data.attributes.seoInformation;
//     const faqs = data.data.attributes.faqs.questionAnswer;
//     return {
//       props: {
//         seoInformation,
//         faqs
//       },
//     };
//   } catch (error) {
//     // console.error("Error fetching data:", error);
//     return {
//       props: {
//         seoInformation:null,
//         faqs:null
//       },
//     };
//   }
// }
