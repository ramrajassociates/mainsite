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
import { GiCctvCamera } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
import axios from "axios";
function index({ seoInformation, faqs }) {
  const logo = <GiCctvCamera className="text-5xl text-action-900" />;
  const content2 = {
    serviceName: "Surveillance Services",
    headingText: "What are <strong>Surveillance Services?</strong>",
    explanation:
      "Surveillance services generally refer to the activities and systems designed to monitor and observe people, places, or activities for different reasons. They cover a wide range of activities and technologies meant to gather information and maintain security. These systems have become popular for security and monitoring in a wide range of locations including residences, companies, public areas, and government sites. The fundamental goal is to offer a safe environment that is free of unwanted access, theft, and dangers to persons and property.",
    subHeadingText:
      "<span style='color: rgb(197 146 90 / var(--tw-text-opacity));'>Your Safety, Our Priority-</span>Your All-In-One Surveillance Solution ",
    description:
      "We understand the importance of maintaining safety in your work and living spaces, and that’s why we are here to offer our top-notch Surveillance Service. Our goal is to ensure the safety and security of your premises while providing valuable insights and peace of mind. We provide total security and surveillance to secure your valuable facilities around the clock, using cutting-edge technology and high-quality video footage.",
    extras:
      "We understand the importance of maintaining a secure environment, and our dedicated approach is geared toward meeting and exceeding your expectations. With our Surveillance Service, you can trust that your valued premises are under constant watch, allowing you to focus on your activities with confidence and assurance.",
    imageUrl:
      "https://d1efbx4910ct8i.cloudfront.net/Images2/surveillance-services.webp",
  };
  const content3 = [
    {
      question: "Features of Surveillance Service",
      answer: `Our service features a host of impressive offerings, including but certainly not limited to:
      <ul class="list-disc list-inside flex flex-col ">
      <li>Real-time monitoring: Constantly keep an eye on your premises 24/7/365.</li>
      <li>Multiple site view: Supervise multiple locations simultaneously.</li>
      <li>Insights into your business: Leverage valuable information from surveillance data.</li>
      <li>Integrates with existing system: No need for disruptive overhauls or upgrades.</li>
      <li>Easily accessible footage: Quick, convenient access to surveillance records.</li>
      <li>2-way communication system: Enhance coordination & response with our interactive communication platform</li>


      </ul>
     
      `,
    },
    {
      question: "Benefits of Surveillance Service",
      answer: `With Surveillance Service, gain a helpful edge in managing your premises and ensure the following perks:
      <ul class="list-disc list-inside flex flex-col ">
      <li>Employee management: Monitor staff activities for optimal productivity and organisational harmony.</li>
      <li>24*7*365 surveillance: Rest assured of our unwavering vigilance to detect any suspicious activities.</li>
      <li>Reduce Shrinkage: Identify, prevent, and reduce losses from theft or fraud.</li>
      <li>High-definition video evidence: Collate high-quality visual proof for any investigations or audits.</li>
      <li>High availability & accessibility: Avail our services anytime, anywhere, from any of your devices.</li>
      <li>POS integration: Seamlessly integrate with your Point-of-Sale systems for better transactional visibility.</li>



      </ul>
      `,
    },
    {
      question: "Why Choose a Surveillance Service?",
      answer: `WWhen it comes to reliable CCTV services, Surveillance Service is a name you can trust for unbeatable quality and service excellence. Our wealth of experience in providing surveillance solutions is reflected in our varied portfolio of happy customers, including office buildings, hotels, stores, and residential houses. What defines us is not just our cutting-edge technology, but also our dedication to ensuring your complete peace of mind.`,
    },
    {
      question: "Secure Your Space Today",
      answer: `Be proactive in ensuring the safety of your surroundings with Surveillance Service. Invest in a surveillance solution that guarantees 24/7 vigilance, high-definition evidence, and seamless integration with existing systems. Join the myriad of offices, hotels, stores, and houses that entrust their security to Surveillance Service today. <br />
      For a more secure tomorrow, contact us now and explore how Surveillance Service can serve your unique surveillance needs.
      `,
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
        <link
          rel="canonical"
          href="https://ramrajassociates.com/surveillance-services"
        ></link>
      </SeoComp>
      <NavbarComp />
      <div>
        <div className="object-contain  relative h-[100vh]  ">
          <Image
            src={
              "https://d1efbx4910ct8i.cloudfront.net/Images2/surveillance-services.webp"
            }
            width={1920}
            height={1080}
            alt="Surveillance Services"
            className="w-full h-full object-cover sm:object-top object-center  "
          ></Image>
          <div className="bg-gray-600 backdrop-blur rounded-lg absolute h-fit gap-4 sm:top-32 flex flex-col justify-center items-center sm:p-10 p-4  bg-opacity-20 lg:left-24 w-10/12 m-3 top-1/3 lg:max-w-[30vw] ">
            <p className="text-main bg-footerColor px-2 py-1 absolute -top-2 -left-2">
              Services
            </p>
            <h1 className="text-main font-bold text-2xl pt-5">
              Surveillance Service
            </h1>
            <div className="relative h-fit pl-5">
              <p className="text-xs text-main">
                {" "}
                We are a leading surveillance services provider. We provide
                cutting-edge solutions for monitoring and securing your assets,
                properties, and operations. We offer a range of surveillance
                technologies and services, for all types of offices, hotels,
                stores, houses, and more. We provide expert surveillance camera
                service, including CCTV installations and real-time monitoring
                for an enhanced security cover that you can trust.
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
      process.env.NEXT_PUBLIC_ADMIN_URL + "/api/surveillance-service"
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
