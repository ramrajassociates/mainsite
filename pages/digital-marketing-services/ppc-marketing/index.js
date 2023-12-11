import NavbarComp from "@/components/NavbarComp";
import React, { useState } from "react";
import Image from "next/image";
import { Fade } from "react-reveal";
import Head from "next/head";
import Link from "next/link";
import { BiSolidLeftArrow } from "react-icons/bi";
import SeoComp from "@/components/SeoComp";
import FaqsSectionComp from "@/components/FAQS/FaqsSectionComp";
import axios from "axios";
import ContentComp2 from "@/components/ContentComp2";
import LetsConnectComp from "@/components/LetsConnectComp";
import ContentComp3 from "@/components/ContentComp3";
import { GiClick } from "react-icons/gi";
function index({ seoInformation, faqs }) {
  const logo = <GiClick className="text-5xl text-action-900" />;
  const content2 = {
    headingText:
      "What is <strong>PPC</strong> or <strong> Pay Per Click</strong> in Digital Marketing?",
    explanation: `This is another type of online marketing. The term "pay-per-click" means that whenever any visitor clicks on an ad, the advertiser has to pay a certain amount of fee for that. This is paid marketing; instead of driving visitors organically, you are paying a certain amount of money to promote your website. This is the most commonly used method to make the website more visible to the targeted audience.`,
    subHeadingText:
      " Ramraj Associates: <span style='color: rgb(197 146 90 / var(--tw-text-opacity));'>One of the Best PPC Marketing Service Providers</span>",
    description:
      "Pay Per Click is the most common and popular digital marketing service. If you know how to use it effectively, you can win the online market. But one mistake can also put your brand at stake. This is why it is very essential to make the correct move and hire a professional PPC management service provider. They will help you generate leads and increase your return on investment.",
    extras:
      "Ramraj Associates is one of the most trusted PPC marketing service providers in Jaipur. They never fail to deliver results, as their team knows the correct PPC strategies. Apart from that, the professionals first create the analysis report before starting any project by using tools such as Google Adwords, Facebook Business, and Yahoo Search Marketing.",
  };

  const content3 = [
    {
      question: "What Are the Benefits of Using PPC Marketing?",
      answer: `No matter if you are running a small, medium, or large organization, PPC marketing is effective for all. Some of the benefits are listed below:
      <ul class="list-disc list-inside">
      <li>Cost-effective</li>
      <li>Your ad can be viewed on the first page when anyone searches related to that.</li>
      <li>Increases brand visibility</li>
      <li>High Conversion Rate</li>
      <li>You can add numerous ads using different ranking keywords.</li>
      <li>Increase in ROI</li>
      <li>Increase in traffic to your website</li>
      </ul>
      These are some of the benefits of PPC marketing. But it is not as simple as it looks; you have to make strong marketing strategies to run campaigns. Thus, if it is difficult for you, contact our specialized experts now.`,
    },
    {
      question: "Who Must Use PPC Marketing?",
      answer: `PPC marketing gives the best results to small business owners because they are low on budget. They can easily promote their brand by investing very little in ads. This will save them money, and they can quickly approach their targeted audiences who want to buy their product.`,
    },
    {
      question: "What PPC Marketing Services Are We Offering?",
      answer: `We are offering you the following PPC marketing services:
      <ul class="list-disc list-inside">
      <li>Search Ads Optimization</li>
      <li>Display Ads Optimization</li>
      <li>Google Shopping Ads</li>
      <li>Video Advertising</li>
      <li>Keyword Management</li>
      <li>Campaign Setup and Ad Copy Creation</li>
      <li>Retargeting</li>
      <li>Performance Tracking </li>
      <li>PPC Campaign Report Creation</li>

      </ul>`,
    },
  ];

  return (
    <>
      <SeoComp seoInformation={seoInformation}></SeoComp>
      <NavbarComp />
      <NavbarComp />
      <div>
        <div className="object-contain  relative h-[100vh]  ">
          <Image
            src={
              "https://d1efbx4910ct8i.cloudfront.net/Images2/ppc-marketing.webp"
            }
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-center  "
          ></Image>
          <div className="bg-gray-600 backdrop-blur rounded-lg absolute h-fit gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-10 p-4  bg-opacity-20 lg:left-24 w-10/12 m-3 top-1/3 lg:max-w-[35vw] ">
            <p className="text-main bg-footerColor px-2 py-1 absolute -top-2 -left-2">
              Services{" > "}Digital Marketing Services
            </p>
            <p className="text-main font-bold text-2xl pt-5">
              PPC Marketing Service
            </p>
            <div className="relative h-fit pl-5">
              <p className="text-xs text-main">
                PPC (Pay-Per-Click) marketing is one of the most powerful
                digital marketing strategies. This helps businesses drive
                traffic to their websites. That's why hiring a PPC marketer can
                bring amazing advantages to the table. Their right strategies
                and result-driven approach can be beneficial for your business.
              </p>
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
    </>
  );
}

export default index;

export async function getStaticProps() {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_ADMIN_URL + "/api/ppc-marketing"
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
