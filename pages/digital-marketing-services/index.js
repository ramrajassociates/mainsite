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
import ContentComp1 from "@/components/ContentComp1";
import ClientComponent from "@/components/ClientComponent";
import ProgressSteps from "@/components/ProgreeSteps";
import ContentComp4 from "@/components/ContentComp4";
import { BsArrowRight } from "react-icons/bs";
function index({ seoInformation, faqs }) {
  const [show, setShow] = useState(false);
  const ContentComp = {
    title: "WHAT WE DO AS A MARKETING AGENCY",
    Bigtitle:
      "OUR MOTTO AS A MARKETING AGENCY IS TO PROVIDE 360-DEGREE DIGITAL MARKETING SOLUTIONS",
    content:
      "Ramraj's main aim is to build scalable and result-driven campaigns. We also help small and medium-sized businesses grow their businesses on online platforms. But, how? So, here is the answer. We are industry leaders in creating effective campaigns that drive results. Our experts are best in strategy development, search engine optimization, lead generation, and e-commerce web development. Thus, unlock your potential and hire our multi-talented and smart professionals now. For the details, click on the below tab",
  };
  const TabsContent = [
    {
      title: "Specialized Experts",
      content:
        "We have a team of professionals who have uncountable qualities and have the expertise to work as per client requirements. They know recent trends and all the digital marketing strategies that can grow your business. Moreover, by implementing our plans and innovative strategies, you can boost your online presence. Thus, hire our experts and avail world-class digital marketing services in Jaipur.",
      imageUrl:
        "https://d1efbx4910ct8i.cloudfront.net/Images2/specialized-experts.webp",
    },
    {
      title: "Affordability",
      content:
        "This is the biggest thing that most small businesses demand. The reason is that they are mostly low on budget and can’t invest to promote their business online. So, for those small business owners, we are here for you. Ramraj is one of the most affordable digital marketing service providers in Jaipur. Thus, if you need budget-friendly services, then get in touch with us.",
      imageUrl: "https://d1efbx4910ct8i.cloudfront.net/Images2/affordable.webp",
    },
    {
      title: "Customized and Result-Driven Solutions",
      content:
        "Ramraj Associates always uses a result-driven approach so that we can give you a high ROI. Our experts use recent technology to bring your business online so that it reaches a large number of audiences. Therefore, come and be a part of our family to enter the digital world. We ensure you will get solutions as per your preference and that the project will be completed on time.",
      imageUrl:
        "https://d1efbx4910ct8i.cloudfront.net/Images2/result-driven.webp",
    },
  ];
  const TabsTitle =
    " Why Should Small Businesses Choose Our Digital Marketing Service?";
  const stepsContent = [
    {
      title: "Research",
      description:
        "<strong>Research</strong> your requirements, targeted audiences, goals, and objectives",
      imageUrl: "https://d1efbx4910ct8i.cloudfront.net/Images2/research.webp",
    },
    {
      title: "Analyze ",
      description:
        "<strong>Analyze</strong> your online presence if you have any existing accounts",
      imageUrl: "https://d1efbx4910ct8i.cloudfront.net/Images2/analyze.webp",
    },
    {
      title: "Recommend ",
      description:
        "<strong>Recommend</strong> you solutions and some actionable plans",
      imageUrl: "https://d1efbx4910ct8i.cloudfront.net/Images2/recommend.webp",
    },
    {
      title: "Implement  ",
      description:
        "<strong>Implement </strong> our strategies to see the responses of audiences",
      imageUrl: "https://d1efbx4910ct8i.cloudfront.net/Images2/implement.webp",
    },
    {
      title: "Review ",
      description:
        "<strong>Review  </strong> the live post on a daily, weekly, and monthly basis",
      imageUrl: "https://d1efbx4910ct8i.cloudfront.net/Images2/review.webp",
    },
    {
      title: "Modifications",
      description:
        "Do the <strong>  modifications</strong> if required for lead generation",
      imageUrl:
        "https://d1efbx4910ct8i.cloudfront.net/Images2/modification.webp",
    },
    {
      title: "Optimization",
      description:
        "<strong>Optimization</strong> of all your accounts by making changes as per market preferences",
      imageUrl:
        "https://d1efbx4910ct8i.cloudfront.net/Images2/optimization.webp",
    },
  ];
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
          content="https://www.ramrajassociates.com/digital-marketing-services"
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
      </SeoComp>
      <NavbarComp />
      <div>
        <div className="object-contain  relative h-[100vh]  ">
          <Image
            src={"https://d1efbx4910ct8i.cloudfront.net/Images2/digital.webp"}
            width={1920}
            height={1080}
            alt="Digital Marketing Services"
            className="w-full h-full object-cover sm:object-top object-center  "
          ></Image>
          <div className="bg-gray-600 backdrop-blur rounded-lg absolute h-fit gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-10 p-4  bg-opacity-20 lg:left-24 w-10/12 m-3 top-1/3 lg:max-w-[30vw] ">
            <p className="text-main bg-footerColor px-2 py-1 absolute -top-2 -left-2">
              Services
            </p>
            <p className="text-main font-bold text-2xl pt-5">
              Digital Marketing Services
            </p>
            <div className="relative h-fit pl-5">
              <p className="text-xs text-main">
                Ramraj is one of Jaipur's leading digital marketing service
                providers. We provide a wide range of digital marketing services
                that help you boost your online presence. Moreover, we stand out
                for our innovation, data-driven results, and clear
                communication. Thus, partner with us today to begin your online
                journey toward digital success in Jaipur and beyond.
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
        <ContentComp1
          title={ContentComp.title}
          BigTitle={ContentComp.Bigtitle}
          content={ContentComp.content}
        />
        <div className="sm:px-24 px-1 py-5">
          <div
            className={`lg:grid lg:grid-cols-3 ${
              show ? "lg:grid-rows-3" : "lg:grid-rows-2"
            } gap-5 flex flex-row flex-wrap mt-10`}
          >
            <section className="shadow-xl ImageWithContent col-span-2 col-start-1 row-start-1 flex sm:flex-row flex-col sm:min-h-full h-full w-full">
              <div className="Image object-cover sm:w-1/2 w-full !min-h-full ">
                <Image
                  className="w-full h-full object-cover"
                  src={"https://d1efbx4910ct8i.cloudfront.net/Images2/seo.webp"}
                  alt="Search engine optimization"
                  width={520}
                  height={500}
                ></Image>
              </div>
              <div className="content sm:w-1/2 w-full relative bg-main hover:bg-gray-200 transition-all duration-300 group sm:p-10 p-5 !min-h-full">
                <BiSolidLeftArrow
                  className="text-main group-hover:text-gray-200 absolute transition-all duration-300  sm:-left-8 sm:top-10 left-10 -top-8 rotate-90 sm:rotate-0 "
                  size={50}
                ></BiSolidLeftArrow>
                <h2 className="text-xl font-semibold">
                  Search Engine Optimization
                </h2>
                <div className="w-full py-3">
                  <div className="w-full h-fit relative overflow-hidden flex justify-center items-center ">
                    <p className=" font-thin text-sm  pl-5 overflow-y-scroll scrollbar-hidden">
                      Want to surpass your industry-related competitors on
                      search engines? Elevate your brand's visibility with
                      Ramraj Associates. Our professionals can increase your
                      website ranking, bring organic website traffic, and a
                      boost to your online presence. Thus, experience the power
                      of SEO by taking a step ahead towards digital success.
                    </p>
                    <Fade bottom delay={1200}>
                      <span className=" border-l border-action-900 h-full  absolute left-2 top-0 "></span>
                    </Fade>
                  </div>
                </div>
                <Link
                  href={"/digital-marketing-services/seo"}
                  className="flex flex-row justify-end"
                >
                  {" "}
                  <Image
                    src={
                      "https://d1efbx4910ct8i.cloudfront.net/Images2/arrow_icon_yellow.svg"
                    }
                    width={20}
                    height={20}
                    alt="arrow icon"
                  ></Image>
                </Link>
              </div>
            </section>
            <section
              className={`shadow-xl Normal col-span-1   w-full sm:h-full h-64  object-cover relative bg-main  `}
            >
              <div className="sm:p-10 p-5 ">
                <h2 className="text-xl font-semibold text-gray-700">
                  Social Media Marketing
                </h2>
                <div className="w-full py-3">
                  <div className="w-full h-fit relative overflow-hidden flex justify-center items-center ">
                    <p className=" font-thin text-sm  pl-5 overflow-y-scroll scrollbar-hidden text-gray-700">
                      We are a leading social media marketing service provider
                      in Jaipur. So, build your brand with us and increase your
                      social media network. This will help you get connected
                      with your targeted audiences. Therefore, make a strong
                      online presence on social media platforms such as
                      Facebook, Instagram, Twitter, and so on.
                    </p>
                    <Fade bottom delay={1200}>
                      <span className=" border-l border-action-900 h-full  absolute left-2 top-0 "></span>
                    </Fade>
                  </div>
                </div>
                <Link
                  href={"/digital-marketing-services/social-media-marketing"}
                  className="flex flex-row justify-end"
                >
                  {" "}
                  <Image
                    src={
                      "https://d1efbx4910ct8i.cloudfront.net/Images2/arrow_icon_yellow.svg"
                    }
                    width={20}
                    height={20}
                    alt="arrow icon"
                  ></Image>
                </Link>
              </div>
            </section>

            <section
              className={`shadow-xl Normal col-span-1 w-full sm:h-full h-64 object-cover relative `}
            >
              <Image
                className="absolute w-full h-full object-cover object-center "
                src={"https://d1efbx4910ct8i.cloudfront.net/Images2/g-d.webp"}
                alt="graphic design"
                width={520}
                height={500}
              ></Image>
              <div className="absolute w-full h-full z-0 bg-black bg-opacity-50"></div>
              <div className="sm:p-10 p-5 absolute top-0 z-10">
                <h2 className="text-xl font-semibold text-main">
                  Graphic Design
                </h2>
                <div className="w-full py-3">
                  <div className="w-full h-fit relative overflow-hidden flex justify-center items-center ">
                    <p className=" font-thin text-sm  pl-5 overflow-y-scroll scrollbar-hidden text-main">
                      Searching for speedy and high-quality graphic design
                      services in Jaipur? Not to worry! We are a tech-enabled
                      company and can bring out-of-the box ideas for your
                      brands. You just tell us what you want, and our team will
                      develop amazing visuals according to that.
                    </p>
                    <Fade bottom delay={1200}>
                      <span className=" border-l border-action-900 h-full  absolute left-2 top-0 "></span>
                    </Fade>
                  </div>
                </div>
                <Link
                  href={"/digital-marketing-services/graphic-design"}
                  className="flex flex-row justify-end"
                >
                  {" "}
                  <Image
                    src={
                      "https://d1efbx4910ct8i.cloudfront.net/Images2/arrow_icon_yellow.svg"
                    }
                    width={20}
                    height={20}
                    alt="arrow icon"
                  ></Image>
                </Link>
              </div>
            </section>
            <section className="shadow-xl ImageWithContent col-span-2 flex sm:flex-row flex-col sm:min-h-full h-full w-full">
              <div className="Image object-cover sm:w-1/2 w-full !min-h-full ">
                <Image
                  className="w-full h-full object-cover"
                  src={
                    "https://d1efbx4910ct8i.cloudfront.net/Images2/ppc-marketing.webp"
                  }
                  alt="ppc marketing"
                  width={520}
                  height={500}
                ></Image>
              </div>
              <div className="content sm:w-1/2 w-full relative bg-main hover:bg-gray-200 transition-all duration-300 group sm:p-10 p-5 !min-h-full">
                <BiSolidLeftArrow
                  className="text-main group-hover:text-gray-200 absolute transition-all duration-300  sm:-left-8 sm:top-10 left-10 -top-8 rotate-90 sm:rotate-0 "
                  size={50}
                ></BiSolidLeftArrow>
                <h2 className="text-xl font-semibold">PPC Marketing</h2>
                <div className="w-full py-3">
                  <div className="w-full h-fit relative overflow-hidden flex justify-center items-center ">
                    <p className=" font-thin text-sm  pl-5 overflow-y-scroll scrollbar-hidden">
                      Our customer-centric approach can increase conversion
                      rates and generate higher revenues. Get our PPC marketing
                      service and push your brand to the top. It is one of the
                      best paid forms of marketing and can bring instant traffic
                      to your website.
                    </p>
                    <Fade bottom delay={1200}>
                      <span className=" border-l border-action-900 h-full  absolute left-2 top-0 "></span>
                    </Fade>
                  </div>
                </div>
                <Link
                  href={"/digital-marketing-services/ppc-marketing"}
                  className="flex flex-row justify-end"
                >
                  {" "}
                  <Image
                    src={
                      "https://d1efbx4910ct8i.cloudfront.net/Images2/arrow_icon_yellow.svg"
                    }
                    width={20}
                    height={20}
                    alt="arrow icon"
                  ></Image>
                </Link>
              </div>
            </section>
            <section
              className={`shadow-xl Normal col-span-1   w-full sm:h-full h-64 object-cover relative bg-main ${
                show ? "block" : "hidden"
              }`}
            >
              <div className="sm:p-10 p-5 ">
                <h2 className="text-xl font-semibold text-gray-700">
                  Social Media Optimization
                </h2>
                <div className="w-full py-3">
                  <div className="w-full h-fit relative overflow-hidden flex justify-center items-center ">
                    <p className=" font-thin text-sm  pl-5 overflow-y-scroll scrollbar-hidden text-gray-700">
                      Building trust online with your customers through social
                      media optimization services. Ramraj offers you the best
                      SMO services and also helps you promote your brand on all
                      social media channels. Thus, increase your brand
                      visibility with the help of our experts. Get a free
                      consultation service now!
                    </p>
                    <Fade bottom delay={1200}>
                      <span className=" border-l border-action-900 h-full  absolute left-2 top-0 "></span>
                    </Fade>
                  </div>
                </div>
                <Link href={"/contact"} className="flex flex-row justify-end">
                  {" "}
                  <Image
                    src={
                      "https://d1efbx4910ct8i.cloudfront.net/Images2/arrow_icon_yellow.svg"
                    }
                    width={20}
                    height={20}
                    alt="arrow icon"
                  ></Image>
                </Link>
              </div>
            </section>
          </div>
          <div className="flex flex-row justify-center items-center py-4 w-full cursor-pointer ">
            <span
              className="bg-action-900 text-main px-2 py-1 font-thin text-sm"
              onClick={() => setShow((e) => !e)}
            >
              {show ? "Load less" : "Load more"}
            </span>
          </div>
        </div>
      </div>
      {/* Content Component */}
      <ContentComp4 TabsContent={TabsContent} TabsTitle={TabsTitle} />
      {/* Content Component */}
      {/* Progress Steps */}
      <div className="lg:px-24 px-5 py-5 space-y-7 flex lg:flex-row bg-gray-900 flex-col items-start lg:relative lg:min-h-screen  ">
        <div className="lg:w-1/3 w-full space-y-7 p-4 lg:sticky lg:top-24">
          <h2 className="text-5xl font-extrabold text-gray-200">
            OUR DIGITAL MARKETING PROCESS
          </h2>
          <p className="text-gray-200">
            What makes us one of the top digital marketing services providers in
            Jaipur? This is our easy and quick digital marketing process. Ramraj
            believes in evaluating each and every step in detail so that we can
            give you 100% satisfaction. We know every business, brand, product,
            or individual wants the proper digital marketing process for their
            growth. Thus, we also work accordingly to satisfy their wants. Join
            hands with Ramaj Associates and bring your business online by taking
            advantage of our affordable digital marketing service.
          </p>
          <div>
            <Link
              href={"/contact"}
              className="px-6 py-2 border border-action-900 transition-all duration-300 hover:bg-action-900  text-main "
            >
              Getting started !
            </Link>
          </div>
        </div>
        <div className="lg:w-2/3 w-full">
          <ProgressSteps content={stepsContent} />
        </div>
      </div>
      {/* Progress Steps */}

      <FaqsSectionComp faqs={faqs ? faqs : []} />
      <ClientComponent />
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
      process.env.NEXT_PUBLIC_ADMIN_URL + "/api/digital-marketing-service"
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
