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
import { MdOutlineDashboardCustomize } from "react-icons/md";
import axios from "axios";
import {BsArrowRight} from "react-icons/bs"
function index({ seoInformation, faqs }) {
  const logo = (
    <MdOutlineDashboardCustomize className="text-4xl text-action-900" />
  );
  const content2 = {
    headingText: "Understand <strong>  Web Design and Development </strong>",
    explanation:
      "The visual elements, layout, color, typography, and everything related to designing available on the website are covered in web design. It is important for businesses to have a well-designed website to attract a large number of visitors to their page. Apart from designing the website, development is also important. Thus, ensure your website is user-friendly and responsive. For the best web design and development, you can hire our experts, and they will work as per your demands.",
    subHeadingText:
      "Reliable Custom Web Development Agency and <span style='color: rgb(197 146 90 / var(--tw-text-opacity));'>Can Drive Results </span>Quickly",
    description:
      "We believe in giving the best services to our clients at an affordable price. This is why we always work with all the companies, whether small, medium, or large. Our professionals plan, design, and develop websites as per client preferences. So, if you are looking for front-end development or back-end development services online, we have a team of specialized designers who can bring unique and successful ideas for your brand. Therefore, create a strong strategy for your website, choose a strong framework, and get the best and most real experience with our team.",
    extras: `You can choose us to get:
      <ul style="list-style:disc;">

      <li>Custom UX/UI Website Design</li>
      <li>Search and Conversion Optimization
      </li>
      <li>End-to-End Development</li>
      </ul>
      `,
    imageUrl:"https://d1efbx4910ct8i.cloudfront.net/Images2/cs1.webp"
  };
  const content3 = [
    {
      question: "What Is The Role of UI/UX Design?",
      answer:
        "UI stands for User Interface, and UX stands for User Experience. UI and UX are both integral to creating websites that are not only visually appealing but also intuitive to navigate. UI focuses on the design elements, while UX is concerned with the overall user journey and satisfaction. This is the reason both are essential to making a strong online presence and can engage and retain visitors.",
    },
    {
      question: "Why Are Content Management Systems (CMS) Important?",
      answer:
        "A content management system is the process of managing and updating website content through different platforms. The most popular and commonly used CMS platforms are WordPress, Joomla, and Drupal. These platforms have so many features that make your work easy, like adding, editing, and removing content from the website. But the most important thing is choosing the correct CMS as per your business for scalability and flexibility.",
    },
    {
      question: " Is Maintenance and Updating Necessary for Websites?",
      answer:
        "Yes, it is necessary to update websites on a regular basis. The more you update your website content, fix bugs, and add new content to your pages, the better the user experience you can provide. And if you are having trouble updating your website regularly, you can contact our team for support.",
    },
    {
      question: "Why Should You Take Web Design and Development Services?",
      answer:
        "Web design and development services are the cornerstones of a successful online presence. From creating visually appealing designs to implementing complex functionalities, these services cater to the diverse needs of businesses and individuals navigating the digital landscape. Staying abreast of evolving technologies and trends is crucial for web professionals, ensuring they deliver websites that not only meet but exceed expectations in this dynamic and competitive environment. Thus, you should hire the best web design and development service provider in Jaipur, as they know how to provide a personalized experience to their clients.",
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
            src={"https://d1efbx4910ct8i.cloudfront.net/Images2/cs1.webp"}
            width={1920}
            height={1080}
            className="w-full h-full object-cover sm:object-top object-center scale-x-[-1]"
          ></Image>
          <div className="bg-gray-600 backdrop-blur rounded-lg absolute h-fit gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-10 p-4  bg-opacity-20 lg:left-24 w-10/12 m-3 top-1/3 lg:max-w-[30vw] ">
            <p className="text-main bg-footerColor px-2 py-1 absolute -top-2 -left-2">
              Services{" > "}Web Design And Development Services
            </p>
            <p className="text-main font-bold text-2xl pt-5">
              Custom Web Development Service
            </p>
            <div className="relative h-fit pl-5">
              <p className="text-xs text-main">
                Partner with the best custom web development company to build a
                high-performance and personalized website. The professionals
                know how to create corporate or complex websites that can drive
                results. Ramraj Associates has a team of certified developers
                who can develop your website from scratch and also help you grow
                and promote our brand online. So, explore our custom web
                development services and get the best digital experience.
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
      process.env.NEXT_PUBLIC_ADMIN_URL + "/api/custom-web-development-service"
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
