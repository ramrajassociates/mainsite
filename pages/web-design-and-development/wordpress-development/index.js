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
import { FaWordpress } from "react-icons/fa6";
import axios from "axios";
import { BsArrowRight } from "react-icons/bs";
function index({ seoInformation, faqs }) {
  const logo = <FaWordpress className="text-5xl text-action-900" />;
  const content2 = {
    serviceName: "WordPress Development",
    headingText:
      "What Do You Know About <strong>WordPress Development?</strong>",
    explanation: `WordPress is one of the most renowned and commonly used content management systems. To build a highly functional website, you can choose WordPress, as it's free, easy to install, and easy to upgrade. Our professional team knows the current trends and how to use them to raise your brand's popularity. Moreover, our main motto is to serve all small, medium, and large businesses; this is why we provide pocket-friendly WordPress development services online.
    `,
    subHeadingText:
      "<span style='color: rgb(197 146 90 / var(--tw-text-opacity));'>Pixel-Perfect Excellence:</span> Unleashing Digital Brilliance Through Our WordPress Developers",
    description:
      "Seeking someone who can transform your ideas into WordPress wonders? We can do it for you. Our professionals can craft seamless designs with powerful functionality. From sleek designs to a magical user experience, we can turn everything into reality. We can give you assurance that your website stands out from the crowd. So, be ready to elevate your brand with our WordPress mastery and empower your brand to shine. Let's begin your journey with us.",
    extras:
      "Book your free consultation with our experts now and craft a digital masterpiece with WordPress magic.",
    imageUrl: "https://d1efbx4910ct8i.cloudfront.net/Images2/wordpress.webp",
  };

  const content3 = [
    {
      question:
        "Do Your Professional Web Developers Know How to Create Responsive Web Designs with WordPress?",
      answer: `Yes, our experts are highly qualified and well-versed in creating responsive web designs with WordPress. They also ensure that their crafted websites can adapt and display seamlessly on all types of devices and screen sizes. And with WordPress, it is more convenient because it is highly adaptable to responsive design principles. <br />
      Here are the skills that our professionals have:
   
      <ul class="list-decimal list-inside mt-5">
      <li>They know how to choose and implement responsive themes.</li>
      <li>They know how to modify and optimize CSS to create responsive layouts.</li>
      <li>They know how to optimize images for different devices.</li>
      <li>They know how to implement flexible grid systems.</li>
      <li>They know how to make use of media queries in CSS to apply specific styles based on device characteristics.</li>
      <li>They know how to thoroughly test websites on distinct browsers and devices.</li>
      

      </ul>
      So, these are the skills that our professionals have. They know that responsive web designs are necessary to provide users with a flawless experience no matter which device they are using. `,
    },
    {
      question: "Why Custom WordPress Themes Are Important?",
      answer: `There are many reasons why custom wordpress themes are important which are as follows:
      <br />
      <br />
      
        <div className="mt-5">
        <strong>1. Improves Brand Identity:</strong>
        <p>It allows businesses to create a unique and distinctive identity on online platforms. The more aligned your website design is with brand colors, fonts, and overall aesthetics, the more you can make a strong impression on visitors.
        </p>
        </div>
        <div>
        <strong>2. Enhanced User Experience:</strong>
        <p>Custom WordPress themes allow developers to optimize the UI and experience as per their target audience.
        </p>
        </div>
        <div>
        <strong>3. SEO Optimization:</strong>
        <p>It improves search engine rankings and a brand's visibility on online platforms.
        </p>
        </div>
        <div>
        <strong>4. Performance Optimization:</strong>
        <p>The WordPress themes are fully optimized and have ready-to-use codes and structures for performance. This improves website speed and responsiveness
        </p>
        </div>
        <div>
        <strong>5. Other Reasons:</strong>
       <ul  style="list-style:disc;margin-left:30px;">
       <li>Scalability</li>
       <li>Security</li>
       <li>Updates & Maintenance</li>
       <li>Exclusivity</li>
       <li>Flexibility & Ownership</li>
       </ul>
        </div>
        This is why WordPress development services are important for businesses to have a strong online presence. Thus, hire our experts and get the best service from us.
      `,
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
            src={"https://d1efbx4910ct8i.cloudfront.net/Images2/wordpress.webp"}
            width={1920}
            height={1080}
            alt="WordPress Development Service"
            className="w-full h-full object-cover sm:object-top object-center  "
          ></Image>
          <div className="bg-gray-600 backdrop-blur rounded-lg absolute h-fit gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-10 p-4  bg-opacity-20 lg:left-24 w-10/12 m-3 top-1/3 lg:max-w-[35vw] ">
            <p className="text-main bg-footerColor px-2 py-1 absolute -top-2 -left-2">
              Services{" > "}Web Design And Development Services
            </p>
            <p className="text-main font-bold text-2xl pt-5">
              WordPress Development Service
            </p>
            <div className="relative h-fit pl-5">
              <p className="text-xs text-main">
                WordPress is one of the most renowned and commonly used content
                management systems. To build a highly functional website, you
                can choose WordPress, as it's free, easy to install, and easy to
                upgrade. Our professional team knows the current trends and how
                to use them to raise your brand's popularity. Moreover, our main
                motto is to serve all small, medium, and large business owners.
                This is why we provide pocket-friendly WordPress development
                services online.
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
      process.env.NEXT_PUBLIC_ADMIN_URL + "/api/wordpress-development-service"
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
