import { useState, useEffect, useRef } from "react";
import HeaderComp from "@/components/HomePage/HeaderComp";
import ServicesComp from "@/components/HomePage/ServicesComp";
import NavbarComp from "@/components/NavbarComp";
import Head from "next/head";
import axios from "axios";
import SeoComp from "@/components/SeoComp";
import AboutComp from "@components/HomePage/AboutComp";
import ServiceCarousel from "@components/HomePage/ServiceCarousel";
import ServiceCompParent from "@components/HomePage/ServiceCompParent";
import AboutComp2 from "@components/HomePage/AboutComp2";
import BlogAndTeamComponent from "@components/HomePage/BlogAndTeamComponent";
import FaqsSectionComp from "@components/FAQS/FaqsSectionComp";
import FooterCompWithCta from "@/components/HomePage/FooterCompWithCta";
import { Main } from "next/document";
import IntroComp from "@/components/HomePage/IntroComp";
export default function Home({ seoInformation, faqs }) {
  const serviceFaqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of services, including web design and development, SEO, PPC marketing, social media management, and more. You can explore our full list of services on our Services page.",
    },
    {
      question: "How do I request a quote for your services?",
      answer:
        "To request a quote for any of our services, simply visit the Contact Us page and fill out the inquiry form. Our team will get back to you with a customized quote based on your specific needs.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We have experience serving clients across various industries, including e-commerce, healthcare, finance, and more. Our team of experts can tailor our services to suit your industry and business goals.",
    },
    {
      question: "Can you handle custom development projects?",
      answer:
        "Yes, we specialize in custom web development and software solutions. Whether you need a unique web application or a tailored software solution, our team can bring your vision to life.",
    },
    {
      question: "What sets your services apart from the competition?",
      answer:
        "Our commitment to quality, innovation, and client satisfaction sets us apart. We work closely with our clients to deliver customized solutions, staying at the forefront of industry trends and technologies.",
    },
  ];
  // For Navbar
  const MainDivRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [HeaderCompHeight, setHeaderCompHeight] = useState(0);
  const [IntroCompHeight, setIntroCompHeight] = useState(0);
  const [ServiceCompHeight, setServiceCompHeight] = useState(0);
  const [AboutCompHeight, setAboutCompHeight] = useState(0);
  const [AboutComp2Height, setAboutComp2Height] = useState(0);
  const [ServiceCarouselHeight, setServiceCarouselHeight] = useState(0);
  const [BlogAndTeamComponentHeight, setBlogAndTeamComponentHeight] =
    useState(0);
  const [FaqsSectionCompHeight, setFaqsSectionCompHeight] = useState(0);
  const [FooterCompWithCtaHeight, setFooterCompWithCtaHeight] = useState(0);
  const HeaderCompRef = useRef();
  const IntroCompRef = useRef();
  const ServiceCompRef = useRef();
  const AboutCompRef = useRef();
  const AboutComp2Ref = useRef();
  const ServiceCarouselRef = useRef();
  const BlogAndTeamComponentRef = useRef();
  const FaqsSectionCompRef = useRef();
  const FooterCompWithCtaRef = useRef();
  // const handleScroll = () => {
  //   // console.log("Scrolling inside div , height :", MainDivRef.current.scrollTop);
  //   // ================== Example ====================
  //   // const serviceCompParentRef = ServiceCompRef.current;
  //   // const { top } = serviceCompParentRef.getBoundingClientRect();
  //   // console.log("service Component height",top); // logs the distance from the top of the page to the ServiceCompParent component
  //   // ================== Example ====================
  //   setHeaderCompHeight(HeaderCompRef.current.getBoundingClientRect().top);
  //   setIntroCompHeight(IntroCompRef.current.getBoundingClientRect().top);
  //   setServiceCompHeight(ServiceCompRef.current.getBoundingClientRect().top);
  //   setAboutCompHeight(AboutCompRef.current.getBoundingClientRect().top);
  //   setAboutComp2Height(AboutComp2Ref.current.getBoundingClientRect().top);
  //   setServiceCarouselHeight(
  //     ServiceCarouselRef.current.getBoundingClientRect().top
  //   );
  //   setBlogAndTeamComponentHeight(
  //     BlogAndTeamComponentRef.current.getBoundingClientRect().top
  //   );
  //   setFaqsSectionCompHeight(
  //     FaqsSectionCompRef.current.getBoundingClientRect().top
  //   );
  //   setFooterCompWithCtaHeight(
  //     FooterCompWithCtaRef.current.getBoundingClientRect().top
  //   );
  //   console.log("Service comp height", ServiceCompHeight);
  //   if (MainDivRef.current.scrollTop > 50) {
  //     setIsSticky(true);
  //   } else {
  //     setIsSticky(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // For Navbar
  return (
    <>
      <SeoComp seoInformation={seoInformation}>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="WgDzxripQiv3a90_Hbm8maInLnNAgmJpp2ENQXc9AcQ"
        />
        <link rel="canonical" href="https://ramrajassociates.com/"></link>
        <meta
          property="og:title"
          content="Leading IT Solutions and Consultation firm India | RamRaj Associates"
        />
        <link
          rel="icon"
          href="https://d1efbx4910ct8i.cloudfront.net/Images2/favicon.png"
        />
      </SeoComp>
      <NavbarComp />
      <div className="overflow-x-hidden overflow-y-hidden">
        <HeaderComp />
        <IntroComp />
        <ServiceCompParent />
        <AboutComp />
        <AboutComp2 />
        <div className="flex flex-col justify-center items-center py-10">
          <h2 className="text-4xl font-bold">Our Work</h2>
          <h3 className="text-3xl text-action-900 font-bold">
            Grow Your Business
          </h3>
        </div>
        <ServiceCarousel />
        <BlogAndTeamComponent />
        <FaqsSectionComp faqs={faqs} SlideNavbarComp={true} />
        <FooterCompWithCta />
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_ADMIN_URL + "/api/home-page"
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
        data: null, // You can handle this in your component if data is null
      },
    };
  }
}
