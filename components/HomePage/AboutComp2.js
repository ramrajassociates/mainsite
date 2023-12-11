import React, { useState, useEffect } from "react";
import { Tabs, Carousel } from "flowbite-react";
import FaqsComponent from "../FAQS/FaqsComponent";
import NavbarCompHomePage from "./NavBarCompHomePage";
import { Slide } from "react-reveal";
function AboutComp2({ AboutComp2Ref, height }) {
  const who_we_are = [
    {
      question:
        "Navigating the Digital Landscape: Our Proven Marketing Mastery",
      answer:
        "Ramraj Associates is a reputed Digital Marketing and Website Development Company in Jaipur. We have been serving in this industry for the last 10 years, and now we have a strong and experienced team of professionals. No matter if you are looking for online marketing solutions or need a customized website for your business, we are there to fulfill all your needs.",
    },
    {
      question: "Your Brand, Our Digital Canvas: Painting Success in Pixels",
      answer:
        "Our motto is to transform your brand into a digital masterpiece. We make it possible with our expertise, from pixel-perfect designs to strategic online success. We will open all your doors. So, craft a unique and compelling digital canvas for your brand with the help of our experts. Come and partner with us, and we assure you that your brand will thrive in the vibrant world of pixels.",
    },
  ];

  const why_choose_us = [
    {
      question:
        "What sets Ramraj Associates apart from other real estate companies?",
      answer:
        "We have expertise in conquering the complexities of online marketing. Moreover, we excel at leveraging digital platforms, employing data-driven strategies, and delivering tangible results. Our proven track record showcases a mastery of the dynamic digital landscape, ensuring clients thrive amidst evolving trends.",
    },
    {
      question:
        "Engage. Convert. Succeed: Boost Your Business with Digital Marketing      ",
      answer:
        "We navigate the intricacies of online marketing to elevate brands and drive engagement. Trust us to guide your digital journey with a wealth of experience and a commitment to achieving marketing excellence in the ever-evolving digital realm.",
    },
  ];
  const [animate, setanimate] = useState(false);
  useEffect(() => {
    if (height <= 0 && height >= -50) {
      setanimate(true);
    } else {
      setanimate(false);
    }
  }, [height]);
  return (
    <div
      className="bg-gray-900  w-screen min-h-screen snap-start snap-normal relative"
      ref={AboutComp2Ref}
    >
      <div className="min-h-[110px] NavbarComp lg:block hidden sticky top-0 z-40">
        {animate && (
          <Slide top spy={animate} appear duration={700}>
            <NavbarCompHomePage theme="dark" textColor="main" />
            {/* <p>tect</p> */}
          </Slide>
        )}
      </div>
      <div className="flex lg:flex-row flex-col gap-5 items-start lg:py-0  lg:px-10 px-5 py-20 w-full lg:h-[90vh]">
        <div className="headingwithImage flex flex-col lg:w-1/2 justify-center items-start gap-5 p-4 ">
          <div className="heading underline underline-offset-4 px-4 decoration-action-900">
            <h2 className="text-4xl text-main">Best Solution Provider</h2>
          </div>
          <div className="image ">
            <img
              src="https://d1efbx4910ct8i.cloudfront.net/Images2/web.webp"
              alt="our vision"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="lg:w-1/2 p-4 min-h-full w-full">
          <Tabs.Group aria-label="Tabs with icons" style="pills">
            <Tabs.Item title="WHO WE ARE" active={true} className="bg-white">
              <FaqsComponent faqs={who_we_are} Activeindex={0} />
            </Tabs.Item>
            <Tabs.Item title="WHY CHOOSE US">
              <FaqsComponent faqs={why_choose_us} Activeindex={0} />
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </div>
    </div>
  );
}

export default AboutComp2;
