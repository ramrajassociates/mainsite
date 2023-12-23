import NavbarComp from "@/components/NavbarComp";
import React, { useState } from "react";
import Image from "next/image";
import { Fade } from "react-reveal";
import Head from "next/head";
import Link from "next/link";
import { BiSolidLeftArrow } from "react-icons/bi";
import SeoComp from "@/components/SeoComp";
import FaqsSectionComp from "@/components/FAQS/FaqsSectionComp";
import ContentComp1 from "@/components/ContentComp1";
import axios from "axios";
import ClientComponent from "@/components/ClientComponent";
import ProgressSteps from "@/components/ProgreeSteps";
import ContentComp4 from "@/components/ContentComp4";
import { BsArrowRight } from "react-icons/bs";
function index({ seoInformation, faqs }) {
  const [show, setShow] = useState(false);
  const ContentComp = {
    title: "WHAT WE DO AS A MARKETING AGENCY",
    Bigtitle:
      "Our Web Design and Development Services: Bringing Designs to Life",
    content:
      "There are a lot of technicalities in web design and development that include coding, programming, and database management. Moreover, front-end and back-end functionalities play a vital role. This is why you need a full-stack developer who knows all the intricacies and can work according to them. Therefore, to get a seamless blend of both web design and development, get a free consultation from our professional developers.",
    ctaTitle: "Book Your Free Consultation Now",
  };
  const TabsContent = [
    {
      title: "Quick and Reliable Plans",
      content:
        "We are one of the finest web design and development companies in India. Thus, we are offering quick and reliable website hosting plans to our clients at an affordable price. ",
      imageUrl:
        "https://d1efbx4910ct8i.cloudfront.net/Images2/quick-and-reliable-plans.webp",
    },
    {
      title: "SEO-Friendly Website",
      content:
        "We have a team to create SEO-friendly websites, and we never copy-paste content from any source. You will get 100% unique and SEO-oriented content on your website.",
      imageUrl:
        "https://d1efbx4910ct8i.cloudfront.net/Images2/search-engine-optimization.webp",
    },
    {
      title: "Responsive Web Designs",
      content:
        "We develop fully functional and responsive websites for our clients. The website is compatible with all devices, either desktop, laptop, or smartphone.",
      imageUrl:
        "https://d1efbx4910ct8i.cloudfront.net/Images2/responsive-web-design.webp",
    },
  ];
  const TabsTitle =
    "Know the Benefits Of Building Your Website With Our Professionals";
  const stepsContent = [
    {
      title: "Understanding Requirements",
      description:
        "We start web development after understanding our clients' requirements, like business goals, target audience, and other related functionalities.",
      imageUrl:
        "https://d1efbx4910ct8i.cloudfront.net/Images2/requirements.webp",
    },
    {
      title: "Planning ",
      description:
        "Our profound developers create a project plan as per your project.        ",
      imageUrl: "https://d1efbx4910ct8i.cloudfront.net/Images2/planning.webp",
    },
    {
      title: "Design ",
      description:
        "With the help of our web designers, you will get a visually appealing layout.",
      imageUrl: "https://d1efbx4910ct8i.cloudfront.net/Images2/design.webp",
    },
    {
      title: "Front-End Development ",
      description:
        "Our team of front-end developers focuses on designs using HTML, CSS, and Javascript. Also, ensure the website is user-friendly and responsive across all platforms and devices. ",
      imageUrl:
        "https://d1efbx4910ct8i.cloudfront.net/Images2/front-end-dev.webp",
    },
    {
      title: "Back-End Development      ",
      description:
        "The server side of the website is managed by our back-end developers. Also handles the data storage, server configuration, and business logic.",
      imageUrl:
        "https://d1efbx4910ct8i.cloudfront.net/Images2/back-end-dev.webp",
    },
    {
      title: "Database Integration",
      description:
        "Integration of a database to store and manage dynamic content. To establish connections between the server and the database, our developers design and implement the database schema.",
      imageUrl: "https://d1efbx4910ct8i.cloudfront.net/Images2/database.webp",
    },
    {
      title: "Functionality Implementation",
      description:
        "Web developers create a fully functional website that includes user authentication, inquiry forms, e-commerce capabilities, and other essentials. This will bring more visitors to your website and increase the conversion ratio.",
      imageUrl:
        "https://d1efbx4910ct8i.cloudfront.net/Images2/functionality.webp",
    },
    {
      title: "Testing",
      description:
        "Next, our testers begin the testing process and fix bugs to make the website more compatible. During this process, both manual and automated testing tools are used.",
      imageUrl: "https://d1efbx4910ct8i.cloudfront.net/Images2/testing.webp",
    },
    {
      title: "Deployment",
      description:
        "Once the website is completed and checked by the testers, it is deployed to a live server.",
      imageUrl: "https://d1efbx4910ct8i.cloudfront.net/Images2/deployment.webp",
    },
    {
      title: "Optimization",
      description:
        "Now, the developers are starting optimization to improve website performance and speed. Optimization is necessary before the website is live on the server.",
      imageUrl:
        "https://d1efbx4910ct8i.cloudfront.net/Images2/optimization.webp",
    },
    {
      title: "Maintenance and Updates",
      description:
        "Once the website is live, developers begin the ongoing maintenance and monitoring of the website. Also, check if the clients are getting inquiries through forms or not and receiving online payments. ",
      imageUrl:
        "https://d1efbx4910ct8i.cloudfront.net/Images2/maintenance.webp",
    },
    {
      title: "Documentation",
      description:
        "During the entire process, our web developers create a document to note down the technical aspects of the project. This will later help them with updates and maintenance of the website.",
      imageUrl:
        "https://d1efbx4910ct8i.cloudfront.net/Images2/documentation.webp",
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
              "https://d1efbx4910ct8i.cloudfront.net/Images2/web-design-and-development.webp"
            }
            width={1920}
            height={1080}
            alt="Web Design And Development Services"
            className="w-full h-full object-cover sm:object-top object-center  "
          ></Image>
          <div className="bg-gray-600 backdrop-blur rounded-lg absolute h-fit gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-10  bg-opacity-20 lg:left-24 w-10/12 m-3 top-1/3 lg:max-w-[30vw] ">
            <p className="text-main bg-footerColor px-2 py-1 absolute -top-2 -left-2">
              Services
            </p>
            <p className="text-main font-bold text-2xl pt-5">
              Web Design and Development Service
            </p>
            <div className="relative h-fit pl-5">
              <p className="text-xs text-main">
                In this fast-paced digital scenario, a strong and compelling
                online marketing strategy for small as well as large businesses
                is necessary. Thus, by taking advantage of our web design and
                development services, you can quickly craft websites that not
                only look aesthetically pleasing but also work seamlessly. Get
                our web development services now and increase your brand's
                visibility online.
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
        <ContentComp1
          title={ContentComp.title}
          BigTitle={ContentComp.Bigtitle}
          content={ContentComp.content}
          ctaTitle={ContentComp.ctaTitle}
        />

        <div className="sm:px-24 px-1 py-5">
          <div
            className={`sm:grid sm:grid-cols-3 ${
              show ? "sm:grid-rows-2" : "sm:grid-rows-1"
            } gap-5 flex flex-row flex-wrap mt-10`}
          >
            <section className="shadow-xl ImageWithContent col-span-2 col-start-1 row-start-1 flex sm:flex-row flex-col sm:min-h-full h-full w-full">
              <div className="Image object-cover sm:w-1/2 w-full !min-h-full ">
                <Image
                  className="w-full h-full object-cover"
                  src={"https://d1efbx4910ct8i.cloudfront.net/Images2/cs1.webp"}
                  alt="Custom web development"
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
                  Custom Web development
                </h2>
                <div className="w-full py-3">
                  <div className="w-full h-fit relative overflow-hidden flex justify-center items-center ">
                    <p className=" font-thin text-sm  pl-5 overflow-y-scroll scrollbar-hidden">
                      Seeking a custom web development service in Jaipur to
                      achieve your business goals? Ramraj Associates is here for
                      you. Since the last 4 years, we are catering to thousands
                      of businesses and fulfilling their digital requirements.
                      No worries, whether you are a startup or a big
                      organization; our services suit you best. Our experts have
                      been giving their 100% to successfully deliver the
                      projects to their clients.
                    </p>
                    <Fade bottom delay={1200}>
                      <span className=" border-l border-action-900 h-full  absolute left-2 top-0 "></span>
                    </Fade>
                  </div>
                </div>
                <Link
                  href={"/web-design-and-development/custom-web-development"}
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
            <section className="shadow-xl Normal col-span-1 col-start-3  row-start-1 w-full sm:h-full h-64 object-cover relative">
              <Image
                className="absolute w-full h-full object-cover object-center "
                src={
                  "https://d1efbx4910ct8i.cloudfront.net/Images2/e-comm.webp"
                }
                alt="E-Commerce Web Development Service"
                width={520}
                height={500}
              ></Image>
              <div className="absolute w-full h-full z-0 bg-black bg-opacity-50"></div>
              <div className="sm:p-10 p-5 absolute top-0 z-10">
                <h2 className="text-xl font-semibold text-main">
                  E-Commerce Web Development
                </h2>
                <div className="w-full py-3">
                  <div className="w-full h-fit relative overflow-hidden flex justify-center items-center ">
                    <p className=" font-thin text-sm  pl-5 overflow-y-scroll scrollbar-hidden text-main">
                      We have a team of profound eCommerce website developers
                      who have expertise and knowledge in crafting custom and
                      user-centric eCommerce websites. If you are also looking
                      for a tailored and error-free eCommerce website, then book
                      a free slot with our experts. They will help you generate
                      uncountable leads for your business.
                    </p>
                    <Fade bottom delay={1200}>
                      <span className=" border-l border-action-900 h-full  absolute left-2 top-0 "></span>
                    </Fade>
                  </div>
                </div>
                <Link
                  href={
                    "/web-design-and-development/e-commerce-website-development"
                  }
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
              className={`shadow-xl Normal col-span-1 col-start-1 row-start-2   w-full sm:h-full h-64 object-cover relative bg-main ${
                show ? "block" : "hidden"
              }`}
            >
              <div className="sm:p-10 p-5 ">
                <h2 className="text-xl font-semibold text-gray-700">
                  Wordpress Development
                </h2>
                <div className="w-full py-3">
                  <div className="w-full h-fit relative overflow-hidden flex justify-center items-center ">
                    <p className=" font-thin text-sm  pl-5 overflow-y-scroll scrollbar-hidden text-gray-700">
                      Do you also want to create your website on WordPress? Not
                      to worry! Let's develop one WordPress website for your
                      business with the support of our professional WordPress
                      developers. You will get a world-class WordPress website
                      at a pocket-friendly price.
                    </p>
                    <Fade bottom delay={1200}>
                      <span className=" border-l border-action-900 h-full  absolute left-2 top-0 "></span>
                    </Fade>
                  </div>
                </div>
                <Link
                  href={"/web-design-and-development/wordpress-development"}
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
      <div className="lg:px-24 px-5 space-y-7 flex lg:flex-row bg-gray-900 flex-col items-start lg:relative  lg:min-h-screen  ">
        <div className="lg:w-1/3 w-full space-y-7 p-4 lg:sticky lg:top-24">
          <h1 className="text-5xl font-extrabold text-gray-200">
            12-Step Website Development Process Follows By Our Experts
          </h1>
          <p className="text-gray-200">
            Our web developers follow a 12-step process of web development to
            create a functional and visually appealing website for your brand.
            You can trust us, as our process can vary based on the project's
            complexity. Here is a brief overview of our website development
            process.
          </p>
          <div>
            <Link
              href={"/contact"}
              className="px-6 py-2 border border-action-900 transition-all duration-300 hover:bg-action-900  text-main "
            >
              Let's get started!
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
    </>
  );
}

export default index;

export async function getStaticProps() {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_ADMIN_URL + "/api/web-design-and-development"
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
