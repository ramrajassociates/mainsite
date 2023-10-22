import React,{useState,useEffect} from "react";
import { Tabs, Carousel } from "flowbite-react";
import FaqsComp from "../FAQS/FaqsComp";
import NavbarCompHomePage from './NavBarCompHomePage';
import { Slide } from "react-reveal";
function AboutComp2({AboutComp2Ref,height}) {
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
                answer: "Yes, we offer servillance services for property protection."
            },
            {
                question: "What areas do you serve?",
                answer: "We serve globally. Also we have a team of experienced professionals who are dedicated to providing exceptional service to our clients"
            }
           
        ];
    const [animate, setanimate] = useState(false)
    useEffect(() => {
        if (height <=0 && height >=-50) {
            setanimate(true);
        } else {
            setanimate(false);
        }
    }, [height])
  return (
  
    <div className="bg-gray-900  w-screen min-h-screen snap-start snap-normal relative" ref={AboutComp2Ref}>
       <div className='min-h-[110px] NavbarComp lg:block hidden sticky top-0 z-40'>
              
              {animate && <Slide top spy={animate} appear duration={700}>
                   <NavbarCompHomePage theme='dark' textColor='main' />
                   {/* <p>tect</p> */}
             </Slide>}
               </div>
      <div className="flex lg:flex-row flex-col gap-5 items-start lg:py-0  py-20 w-full lg:h-[90vh]">

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
      </div>
  );
}

export default AboutComp2;
