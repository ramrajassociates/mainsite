import React from "react";
import { Tabs, Carousel } from "flowbite-react";
import FaqsComp from "../FAQS/faqsComp";
function AboutComp2() {
        const who_we_are = [
            {
                question: "What is Ramraj Associates?",
                answer: "Ramraj Associates is a real estate company that specializes in buying, selling, and renting properties.Ramraj Associates is a real estate company that specializes in buying, selling, and renting properties.Ramraj Associates is a real estate company that specializes in buying, selling, and renting properties."
            },
            {
                question: "How long has Ramraj Associates been in business?",
                answer: "Ramraj Associates has been in business for over 10 years."
            }
        ];

        const why_choose_us = [
            {
                question: "What sets Ramraj Associates apart from other real estate companies?",
                answer: "We have a team of experienced professionals who are dedicated to providing exceptional service to our clients."
            },
            {
                question: "Do you offer any additional services?",
                answer: "Yes, we offer property management services to help our clients manage their properties."
            },
            {
                question: "What areas do you serve?",
                answer: "We serve the entire state of California."
            },
            {
                question: "Do you offer financing options?",
                answer: "Yes, we work with a variety of lenders to help our clients secure financing for their properties."
            }
        ];
    
  return (
    <>
      <div className="flex lg:flex-row flex-col lg:min-h-[100vh] bg-gray-900 gap-5 items-start lg:pt-20 pt-5">
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
        <Tabs.Group aria-label="Tabs with icons" style="pills"  >
              
    
              <Tabs.Item title="WHO WE ARE" active={true} className="bg-white" >
                           <FaqsComp faqs={who_we_are} Activeindex={0} />
              </Tabs.Item>
              <Tabs.Item  title="WHY CHOOSE US" >
             <FaqsComp faqs={why_choose_us} Activeindex={0} />
              </Tabs.Item>
              
            </Tabs.Group>
        </div>
      </div>
    </>
  );
}

export default AboutComp2;
