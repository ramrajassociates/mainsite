import NavbarComp from "@/components/NavbarComp";
import React, { useState } from "react";
import Image from "next/image";
import { Fade } from "react-reveal";
import Head from "next/head";
import Link from "next/link";
import { BiSolidLeftArrow } from "react-icons/bi";
import SeoComp from "@/components/SeoComp";
import FaqsSectionComp from "@/components/FAQS/FaqsSectionComp";
import LetsConnectComp from "@/components/LetsConnectComp";
import ContentComp2 from "@/components/ContentComp2";
import ContentComp3 from "@/components/ContentComp3";
import { FaCartShopping } from "react-icons/fa6";
import axios from "axios";
import { BsArrowRight } from "react-icons/bs";
function index({ seoInformation, faqs }) {
  const logo = <FaCartShopping className="text-5xl text-action-900" />;
  const content2 = {
    serviceName: "E-Commerce Web Development",
    headingText:
      "Do You Know What <strong>eCommerce Web Services</strong>  Are?",
    explanation: `E-commerce websites allow users to display their products or services online over the internet. There is no requirement for the physical appearance of the stop. You can easily sell your goods or products online. Moreover, the buyer can easily place the order, make an online payment, and get tracking details on your website. This whole process is managed through e-commerce websites. So, build a strong e-commerce website with us.`,
    subHeadingText:
      "Find the Best <span style='color: rgb(197 146 90 / var(--tw-text-opacity));'>E-Commerce Web Development Solutions</span> Here",
    description:
      "Want to create an appealing digital webstore? Also, want to strengthen your brand's online presence? Don't worry! It is easy for us, as for the last 10 years we have been catering to people and helping them build their brand online. With the skills and knowledge of our professionals, we are able to complete our projects on time without hampering their quality. So, if you are planning to launch your business online, come and join hands with us.",
    extras:
      " We plan and build an amazing webstore for you. Get a digitally strong e-commerce website by taking advantage of our best eCommerce web development service.",
    imageUrl: "https://d1efbx4910ct8i.cloudfront.net/Images2/e-comm.webp",
  };

  const content3 = [
    {
      question: "How Much Do You Charge to Develop an eCommerce Website?",
      answer: `It completely depends on what type of e-commerce website you want. If you want to develop a complex website that has more than 5,000 products, then it may cost you more. Generally, an eCommerce website costs between Rs. 30,000 and Rs. 10,00,000.`,
    },
    {
      question: "Do You Give Support After the Website is Developed?",
      answer: `Yes, after developing your e-commerce website, we will share the initial version with you. So, you can check that, and if you want any changes or updates to it, we will do it for you free of charge. But if you want any additions to your website, then it may incur a cost.`,
    },
    {
      question:
        "Do You Know the Reasons for Hiring Our Best eCommerce Website Developer in Jaipur?",
      answer: `We are one of the leading eCommerce web development agencies in Jaipur, with highly qualified UI/UX design and marketing experts. So, avail the best eCommerce web development services at a reasonable price as per your budget. Thus, here are six reasons for hiring our team of professionals:
      <ul class="list-disc list-inside">
      <li>Knowledge of all eCommerce platforms</li>
      <li>Know the integration of Google Analytics.</li>
      <li>Know effective website optimization tactics</li>
      <li>Knowledge of creating an eComm website that can meet future challenges</li>
      <li>Knowledge of creating user-friendly websites without hampering the quality</li>

      </ul>
      So, these are the reasons why you must hire our eCommerce web developers. `,
    },
  ];

  return (
    <>
      <SeoComp seoInformation={seoInformation}>
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
      <NavbarComp />
      <div>
        <div className="object-contain  relative h-[100vh]  ">
          <Image
            src={"https://d1efbx4910ct8i.cloudfront.net/Images2/e-comm.webp"}
            width={1920}
            height={1080}
            alt="E-Commerce Web Development Service"
            className="w-full h-full object-cover sm:object-top object-center  "
          ></Image>
          <div className="bg-gray-600 backdrop-blur rounded-lg absolute h-fit gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-10 p-4  bg-opacity-20 lg:left-24 w-10/12 m-3 top-1/3 lg:max-w-[35vw] ">
            <p className="text-main bg-footerColor px-2 py-1 absolute -top-2 -left-2">
              Services{" > "}Web Design And Development Services
            </p>
            <p className="text-main font-bold text-2xl pt-5">
              E-Commerce Web Development Service
            </p>
            <div className="relative h-fit pl-5">
              <p className="text-xs text-main">
                Ramraj is a digital marketing and web development company. We
                have a team of award-winning industry experts. They are highly
                qualified and can provide the results as per your wants. The
                best part is that our professionals know the market and recent
                trends, and after examining consumer behaviour, they develop an
                e-commerce website for you. Therefore, if you want a tailored
                and error-free e-commerce website that can generate results,
                then call us now and book a free slot for a one-to-one
                discussion.
              </p>
              <Link
                href={"/contact"}
                className=" text-main w-fit flex flex-row justify-center items-center bg-action-900 mt-4 text-s md:font-thin font-semibold py-1 px-3 "
              >
                Talk With Our Experts{" "}
                <BsArrowRight className="ml-2"></BsArrowRight>{" "}
              </Link>
              <Fade bottom delay={1200}>
                <span className="md:border-l-2 border-l border-action-900 h-full absolute left-2 top-0"></span>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <ContentComp2 content={content2} />
      <ContentComp3 content={content3} logo={logo} />
      <LetsConnectComp />
      <FaqsSectionComp faqs={faqs ? faqs : []} />
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
      process.env.NEXT_PUBLIC_ADMIN_URL +
        "/api/e-commerce-website-development-service"
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
