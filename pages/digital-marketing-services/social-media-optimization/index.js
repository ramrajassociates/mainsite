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
import { SiGoogleoptimize } from "react-icons/si";
import { BsArrowRight } from "react-icons/bs";
function index({ seoInformation, faqs }) {
  const logo = <SiGoogleoptimize className="text-5xl text-action-900" />;
  const content2 = {
    headingText:
      "All You Need to Know About <strong>Social Media Optimization</strong>",
    explanation:
      "The process of optimizing social media platforms for promoting brands and services is known as social media optimization. To capture the digital market, social media channels are the best and easiest way. It gives brands amazing opportunities to target their audiences. This is why social media optimization is necessary to boost sales.",
    subHeadingText:
      "<span style='color: rgb(197 146 90 / var(--tw-text-opacity));'>Building Connections Between Brands and Audiences</span> With Our SMO Services",
    description:
      "Want to boost your brand reach with the help of our experts? Get our <strong>best social media optimization services</strong> in Jaipur. Ramraj helps you maximize your online impact and elevate your brand visibility with our strategic social media optimization. So, if you are looking for tailored solutions for your business, book a free consultation with our experts.",
    extras:
      "Ramraj Associates always uses the latest technology to give you 100 percent results. Apart from that, our hiring process is simple, and our team is 24x7 available to provide instant support. Thus, get our experts advice at an affordable price and propel your business forward.",
    imageUrl:
      "https://d1efbx4910ct8i.cloudfront.net/Images2/Social-media-optimization.webp",
  };
  const content3 = [
    {
      question: "How Can SMO Help Boost the Website's Traffic?",
      answer: `Today, half of the population is available on social media platforms. It is the most convenient way to advertise your website and create brand awareness among people. Also, you can boost traffic on your website, which helps you convert visitors into customers. Through social media optimization, this entire process becomes easy and simple for you.`,
    },
    {
      question: "Why Do SMO Services Need Of An Hour?",
      answer: `Nowadays, social media optimization has become a necessity for small businesses. SMO impacts brand visibility, audience engagement, and the online presence of your brand. There are more reasons, which are as follows:
      <ol class="list-decimal">
      <li>SMO increases brand exposure and awareness.</li>
      <li>For online promotion SMO service is a cost-effective marketing option.</li>
      <li>It helps with brand credibility and trust.</li>
      <li>It allows one-on-one interactions with the audience via comments, messages, and shares.</li>
      <li>It gives you exposure to reach both local and global audiences.</li>
      <li>It is also helpful for SEO as it increases brand visibility on search engine result pages.</li>

     
      </ol>
      There are many more impactful reasons why you should opt for a <strong>social media optimization service</strong>. If you want to give it a try, then you can contact us.`,
    },
    {
      question: "How to Start Social Media Optimization?",
      answer: `Our professionals know the right steps for starting social media optimization. Here are the steps that our social media professionals follow to give you the best results:
      <ul class="list-disc list-inside flex flex-col ">
      <li>First, define the goals as per your requirements.</li>
      <li>Second, match the requirements as per the available resources.</li>
      <li>Third, create engaging content as per the targeted audiences.</li>
      <li>Prepare a social media calendar.</li>
      <li>Run a trial campaign to see the response.</li>
      <li>Make changes and again run the campaign for more results.</li>

      </ul>
      This is the process that our experts follow to give you drastic results. If you are also looking for a <strong>social media optimization service</strong>, you can hire Ramraj Associates experts.
      `,
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
              "https://d1efbx4910ct8i.cloudfront.net/Images2/Social-media-optimization.webp"
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
              Social Media Optimization(SMO) Service
            </p>
            <div className="relative h-fit pl-5">
              <p className="text-xs text-main">
                Elevate your business with our strategic{" "}
                <strong>SMO service</strong>. Ramraj Associates experts have
                knowledge of social media optimization. They know how to prepare
                a unique marketing strategy according to your products, goals,
                and targeted audiences. So, start creating your social media
                presence on all the popular channels with us. We provide
                affordable and the{" "}
                <strong>best social media optimization services</strong> in
                Jaipur. Thus, enhance your business visibility on the internet
                with our team. We put all our efforts into promoting your brand
                online.
              </p>
              <Link
                href={
                  "https://calendly.com/ramrajassociates/book-your-appointment"
                }
                className=" text-main w-fit flex flex-row justify-center items-center bg-action-900 mt-4 text-s md:font-thin font-semibold py-1 px-3 "
              >
                Book Your Appointment!{" "}
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
    </>
  );
}

export default index;

export async function getStaticProps() {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_ADMIN_URL + "/api/social-media-optimization"
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
