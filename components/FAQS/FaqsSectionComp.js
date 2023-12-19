import React, { useState, useEffect } from "react";
import FaqsComponent from "@/components/FAQS/FaqsComponent";
import Slide from "react-reveal/Slide";
import NavbarCompHomePage from "../HomePage/NavBarCompHomePage";
function FaqsSectionComp({
  faqs,
  className,
  FaqsSectionCompRef,
  SlideNavbarComp,
  height,
}) {
  if (SlideNavbarComp) {
    const [animate, setanimate] = useState(false);
    useEffect(() => {
      if (height <= 10 && height >= -50) {
        setanimate(true);
      } else {
        setanimate(false);
      }
    }, [height]);
    return (
      <div
        className={` lg:min-h-[100vh] bg-gray-200 overflow-y-scroll ${className}`}
        id="FaqsSection"
        ref={FaqsSectionCompRef}
      >
        <div className="min-h-[110px] NavbarComp lg:block hidden  w-full">
          {animate && (
            <Slide top spy={animate} appear duration={700}>
              <NavbarCompHomePage theme="light" textColor="gray-900" />
            </Slide>
          )}
        </div>
        <div className="content flexflex-row  gap-5 items-start  lg:px-24 px-5 ">
          <div className="headingwithImage flex flex-col  justify-center items-start gap-5 p-4 ">
            <div className="heading ">
              <h2 className="text-4xl  font-bold">
                (FAQs)? Frequently Asked Questions{" "}
              </h2>
            </div>
            {/* <div className="content text-gray-900">
              FAQs are a collection of questions and answers that are typically
              serve as a valuable resource for users, customers, or visitors to
              find answers to common inquiries without having to contact support
              or search extensively.
            </div> */}
          </div>
          <div className=" p-4 min-h-full w-full">
            {faqs && <FaqsComponent faqs={faqs} Activeindex={0} />}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`lg:px-10 px-5 flex lg:flex-row flex-col lg:min-h-[100vh] bg-gray-200 gap-5 items-start lg:pt-20 pt-5 overflow-y-scroll ${className}`}
        id="FaqsSection"
        ref={FaqsSectionCompRef}
      >
        <div className="headingwithImage flex flex-col lg:w-1/2 justify-center items-start gap-5 p-4 ">
          <div className="heading ">
            <h2 className="text-4xl text-action-900 font-bold">
              (FAQs) Frequently Asked Questions ?
            </h2>
          </div>
          <div className="content text-gray-900">
            FAQs are a collection of questions and answers that are typically
            serve as a valuable resource for users, customers, or visitors to
            find answers to common inquiries without having to contact support
            or search extensively.
          </div>
        </div>
        <div className="lg:w-1/2 p-4 min-h-full w-full">
          {faqs && <FaqsComponent faqs={faqs} Activeindex={0} />}
        </div>
      </div>
    );
  }
}

export default FaqsSectionComp;
