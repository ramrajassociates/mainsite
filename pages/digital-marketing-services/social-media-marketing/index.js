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
function index({ seoInformation, faqs }) {
  const [show, setShow] = useState(false);
  const content2 = {
    headingText:
      "What Do You Understand About<strong> Social Media Marketing?</strong>",
    explanation:
      "Social media marketing, the term itself says marketing done on social media platforms. When the user uses social media platforms to build social networks and promote their business and product to drive sales, this is known as social media marketing. Nowadays, it is one of the most popular methods to promote a business or brand on online platforms. There are so many startups, small and large size business owners available on social media platforms to engage with existing customers and reach new ones too.",
    subHeadingText:
      "<span style='color: rgb(197 146 90 / var(--tw-text-opacity));'>Make Social Media Marketing Easy</span> with Ramraj Associates",
    description:
      "In today's scenario,<strong> social media advertising services</strong> have become so popular that it gives business owners a chance to make connections with their targeted audiences, which was quite impossible earlier. But are you doing it in the right way? No? Then, it is best to outsource your work to a trusted <strong>social media marketing agency</strong>. They will handle all your social media accounts and run different marketing campaigns to increase engagement on your accounts. So, if you also want to outsource your work to grow your business quickly on online platforms, then you can hire our professionals.",
    extras:
      "Ramraj Associates has a team of experienced <strong> social media marketing experts</strong>. They will not only increase the visibility of your channel but also increase the conversion ratio and ROI.",
  };
  const content3 = [
    {
      question: "How Much Does Social Media Marketing Cost?",
      answer: `It's quite difficult to determine the exact pricing for <strong>social media marketing consulting</strong> as it may vary from business to business. Also, certain factors must be considered while examining its costs, which are:
      <ol class="list-decimal">
      <li>How many social media account management do you want?</li>
      <li>What is your budget for <strong>SMM service? </strong></li>
      <li>How many posts do you want in a month?</li>
      <li>Do you want changes to your website as per your social media posts or accounts?</li>
     
      </ol>
      These are certain questions that any <strong>social media marketing agency</strong> can ask you. So, if you want to hire someone who can work for you, then you must be clear with them.`,
    },
    {
      question: "Which Platforms Can You Use for Social Media Marketing?",
      answer: `Nowadays, five social media platforms are gaining popularity among people. If you advertise your business on these platforms, then there are high chances of getting conversions. The channels are listed below:
      <ul class="list-disc list-inside flex flex-col space-y-5 py-5">
      <li>Facebook
          <ul>
          <li>Active Users: 2.7 Billion</li>
          <li>Reasons to choose:</li>
          <li>Good for building relationships</li>
          <li>Helps in building brand loyalty          </li>
          </ul>
      </li>
      <li>Instagram
      <ul>
      <li>Active Users: 1.2 Billion</li>
      <li>Reasons to choose:</li>
      <li>Good for building relationships and high conversions</li>
      <li>It helps in lead generation and business promotions</li>
      
      </ul>
      </li>
      <li>Twitter
      <ul>
      <li>Active Users: 353 Million</li>
      <li>Reasons to choose:</li>
      <li>Good for branding and public relations</li>

      
      </ul>
      </li>
      <li>YouTube
        <ul>
        <li>Active Users: 2.3 Billion</li>
        <li>Reasons to choose:</li>
        <li>It's good to promote your brand through videos</li>
        <li>Increase brand awareness</li>
        <li>It helps in lead generation</li>

        </ul>
      </li>
      <li>LinkedIn
      <ul>
      <li>Active Users: 740 Million</li>
      <li>Reasons to choose:</li>
      <li>Good for Networking</li>
      <li>Best for business development and brand awareness</li>

      </ul>
      </li>
      </ul>
      These are a few popular social media platforms where you can start promoting your brand. But if you are facing challenges, our professionals are there to rescue you.
      `,
    },
    {
      question:
        "Are You Searching for a Social Media Marketing Service Provider in Jaipur?",
      answer: `Ramraj Associates is capturing a huge market by providing the <strong> best social media marketing service</strong> at affordable prices. Moreover, we have a team of social media marketers who can bring about a drastic change in your marketing strategies. Thus, hire our experts and give us a chance to work for you and your company.`,
    },
  ];

  return (
    <>
      <SeoComp seoInformation={seoInformation}></SeoComp>
      <NavbarComp />
      <div>
        <div className="object-contain  relative h-[100vh]  ">
          <Image
            src={
              "https://d1efbx4910ct8i.cloudfront.net/Images2/social-media-marketing.webp"
            }
            width={1920}
            height={1080}
            className="w-full h-full object-cover sm:object-top object-center  "
          ></Image>
          <div className="bg-gray-600 backdrop-blur rounded-lg absolute h-fit gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-10 p-4  bg-opacity-20 lg:left-24 w-10/12 m-3 top-1/3 lg:max-w-[35vw] ">
            <p className="text-main bg-footerColor px-2 py-1 absolute -top-2 -left-2">
              Services{" > "}Digital Marketing Services
            </p>
            <p className="text-main font-bold text-2xl pt-5">
              Social Media Marketing (SMM) Service
            </p>
            <div className="relative h-fit pl-5">
              <p className="text-xs text-main">
                Want to grow your business online? But don't know where to
                start. Not to worry; we can help you find the best option. To
                grow your business online, social media marketing is the perfect
                option. It helps you build brand awareness and improves customer
                satisfaction as well. So, what are you waiting for? Contact
                Ramraj Associates to get the{" "}
                <strong> best social media marketing service </strong> at an
                affordable price
              </p>
              <Fade bottom delay={1200}>
                <span className="md:border-l-2 border-l border-action-900 h-full absolute left-2 top-0"></span>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <ContentComp2 content={content2} />
      <ContentComp3 content={content3} />
      <LetsConnectComp />
      <FaqsSectionComp faqs={faqs ? faqs : []} />
    </>
  );
}

export default index;

export async function getStaticProps() {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_ADMIN_URL + "/api/social-media-marketing-service"
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
