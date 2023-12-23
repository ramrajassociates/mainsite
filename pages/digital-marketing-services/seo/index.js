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
import { FaSearchengin } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
function index({ seoInformation, faqs }) {
  const logo = <FaSearchengin className="text-4xl text-action-900" />;
  const content2 = {
    serviceName: "Search Engine Optimization",
    headingText: "What Is <strong> Search Engine Optimization?</strong>",
    explanation:
      "In this digital world, search engine optimization is a strong pillar for online success. The reason is that the SEO-oriented content available on websites improves their ranking on search engine result pages. This is why many organizations ask for <strong> SEO services </strong> to increase organic traffic on their websites.",
    subHeadingText:
      "Ramraj is the <span style='color: rgb(197 146 90 / var(--tw-text-opacity));'>One-Stop Solution</span> for Search Engine Optimization",
    description:
      "Undoubtedly, countless websites provide <strong> professional seo services </strong> in Jaipur. But if you hire Ramraj Associates experts, then this will be an amazing experience for you. The reason is that our team believes in delivering results in no time. Thus, without further delay, take one step ahead to make your website more visible on online platforms. Also, more visibility gives more traffic and immense opportunities to convert visitors into customers",
    extras:
      " Apart from that, there are certainly more questions that may arise in your mind. So, here on this page, you will get all the answers related to search engine optimization. This post delves into the intricacies of SEO, its fundamental workings, and why it is important for the growth and development of all businesses.",
    imageUrl:
      "https://d1efbx4910ct8i.cloudfront.net/Images2/search-engine-optimization.webp",
  };
  const content3 = [
    {
      question: "How Does Search Engine Optimization Work?",
      answer:
        "Search engine optimization (SEO) is the process of making a website more visible on search engines such as Google. To index and rank websites based on a variety of characteristics, search engines use various algorithms. Here are certain other elements like mobile friendliness and site speed, user experience, relevancy, and authority. Moreover, a website can be made to more prominently appear in search results by strategically aligning it with these criteria using SEO.",
    },
    {
      question: "What Is the Importance of SEO for Businesses?",
      answer:
        "Today, there is no life without the Internet. When anything tickles your mind, you start searching for it on the search engines. So, when anyone searches online for your services, they will find your website in the top 5 search results. The majority of online experiences start with a search engine query. If your website doesn't appear in the search results, you're missing out on potential visitors, customers, and opportunities. SEO not only increases your website's visibility but also establishes credibility, trust, and a positive user experience.",
    },
    {
      question: "Is SEO Necessary for Every Kind of Business?",
      answer:
        "Yes, but the marketing strategies may vary from business to business. If a business uses a strong and well-executed SEO strategy, then this can make a substantial difference. Moreover, when our experts work for local business owners, they focus on local SEO and location-specific keywords. Whereas for large businesses, our experts emphasize broader and industry-related keywords. Behind this approach, there is a strong strategy: to connect their business with their targeted audiences.",
    },
    {
      question: "Can An Online Business Quit SEO After It Attains Success?",
      answer:
        "Search Engine Optimization is a long-term process, not a one-time task. To get success on online platforms is dynamic, and search engines continually update their algorithms. That's why stopping SEO may result in a gradual decline in rankings. Also, competitors have a higher chance of success on online platforms. Thus, we can say that “consistency is key.” So, if you maintain and adapt the SEO strategy for the long term, then you will achieve sustainable growth and success.",
    },
    {
      question: "How Do You Find the Genuine SEO Services Company?",
      answer:
        "Finding a genuine <strong> SEO service </strong>provider is essential to your digital success. So, if you are seeking the right <strong> SEO services company </strong> in Jaipur, you must check their proven track record. Also, they follow transparent practices and a result-oriented approach to drive results. Apart from that, before hiring their specialized experts, view their client reports, testimonials, and pricing. Therefore, building effective communication with the <strong> best local seo company</strong> is necessary for a strong partnership.",
    },
    {
      question:
        "What Other Digital Marketing Services Are Required Apart from SEO to Get Success on Online Platforms?",
      answer:
        "Apart from <strong> seo services for small businesses </strong>, social media marketing services, PPC marketing services, and social media optimization services are also necessary. This helps all businesses attain a higher position in search engine result pages (SERP).",
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
              "https://d1efbx4910ct8i.cloudfront.net/Images2/search-engine-optimization.webp"
            }
            width={1920}
            height={1080}
            alt="seo"
            className="w-full h-full object-cover sm:object-top object-center  "
          ></Image>
          <div className="bg-gray-600 backdrop-blur rounded-lg absolute h-fit gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-10 p-4  bg-opacity-20 lg:left-24 w-10/12 m-3 top-1/3 lg:max-w-[35vw] ">
            <p className="text-main bg-footerColor px-2 py-1 absolute -top-2 -left-2">
              Services{" > "}Digital Marketing Services
            </p>
            <p className="text-main font-bold text-2xl pt-5">
              Search Engine Optimization(SEO) Service
            </p>
            <div className="relative h-fit pl-5">
              <p className="text-xs text-main">
                Every second, n number of websites are indexed on Google, and if
                your website is not available there, then you are missing out on
                a large number of customers. So, don't lose your earning
                potential and give us a chance to develop an SEO-optimized
                website for you. We are industry leaders and provide the{" "}
                <strong> best search engine optimization service</strong> in
                Jaipur. Thus, for lead generation and to improve your website's
                ranking, hire our professionals.
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
      process.env.NEXT_PUBLIC_ADMIN_URL + "/api/seo-service"
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
