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
  let classname = "text-action-900";
  const content2 = {
    headingText: "What is the need for <strong>Graphic Design</strong>?",
    explanation: `"Design is thinking made visual." Visuals can convey your thoughts better than your words. The more powerful your visuals are, the more you can attract your targeted audiences. This is why graphic design services for every kind of business are necessary. A well-designed logo shows your professionalism and credibility. Moreover, if you consistently share appealing visuals, it helps in branding and stands out your business in a competitive market. Thus, no matter if you are a startup or a renowned business owner, investing in professional graphic design services can benefit you a lot.`,
    subHeadingText:
      " Get <span style='color: rgb(197 146 90 / var(--tw-text-opacity));'>Affordable Graphic Designing Services</span> in Jaipur",
    description:
      "We are a growing graphic designing service provider in Jaipur. Our graphic designers can create out-of-the-box visuals for your brand. We always give our best to match your standards and goals and provide you the different results. So, if you need innovative ideas and graphics for your brand, then join hands with us. We have great experience in designing logos, brochures, posters, and much more as per your requirements. So, if you want to give tough competition to your competitors, you can choose our professional graphic design services. Thus, invest a very small amount to get professional designs.",
    extras:
      "Apart from that, the software we use for graphic design are Adobe Photoshop, Canva, Corel Draw, and much more. For more information, you can get in touch with Ramraj Associates to avail of the best graphic design services.",
  };

  const content3 = [
    {
      question: "What Are the Benefits of Hiring Our Graphic Designers?",
      answer: `There are unlimited benefits to hiring our professional graphics designers, which are as follows:
      <ul class="list-disc list-inside">
      <li>Our experts have great experience in designing.</li>
      <li>We provide you the best designs that match your business goals.</li>
      <li>We use the latest tools and techniques to create designs.</li>
      <li>We provide you the best designs at affordable prices.</li>
      </ul>

There are a lot more in the row. You can contact Ramraj Associates to get more information about the services.
        
        
        `,
    },
    {
      question:
        "What Graphic Design Process Do We Follow To Get the Best Visuals?",
      answer: `The process that our experts follow is given below:
      <ul class="list-disc list-inside">
      <li>Firstly, we conduct a meeting to learn the details about your project.</li>
      <li>Then, we prepare a strategy to give you the best results.</li>
      <li>Our experts start planning for your project and bring some unique ideas that represent your brand.</li>
      <li>Then, we create some samples and wait for approval.</li>
      <li>After your confirmation, we start creating final designs for you.</li>
      <li>Lastly, we will deliver the final designs to you.</li>
      
      </ul>`,
    },
    {
      question: "What Are the Services of Graphic Design?",
      answer: `The enlisted services are included in graphic design:
      <ul class="list-disc list-inside">
      <li>Logo Creation</li>
      <li>Business Cards Making</li>
      <li>Stationery Creation</li>
      <li>Letterheads Making</li>
      <li>Envelopes Making</li>
      <li>Book Covers Creation</li>
      <li>Brochures Making</li>
      <li>Banners Making</li>
      <li>Posters Making</li>
      <li>Infographics Creation</li>

      </ul>

      There are many more types of graphics that we can create for you. Contact us now and enjoy our graphic design services.`,
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
              "https://d1efbx4910ct8i.cloudfront.net/Images2/graphic-design.webp"
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
              Graphic Design Service
            </p>
            <div className="relative h-fit pl-5">
              <p className="text-xs text-main">
                "Design is not just what it looks like and feels like. Design is
                how it works." The more stunning and mesmerising your visuals
                and infographics are, the higher the chances of conversions. We
                have a pool of experienced graphic designers who can delve deep
                into the research to create innovative designs. From logos to
                brochures and posters to infographics, we can create anything
                for you. We would be happy to hear from you about your work;
                contact us today!
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
      process.env.NEXT_PUBLIC_ADMIN_URL + "/api/graphic-design"
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
