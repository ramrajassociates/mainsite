import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Slide } from "react-reveal";
import { FaUserCheck, FaPlay } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import Link from "next/link";
import { Fade } from "react-reveal";
import { BsArrowRight } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import NavbarComp from "../NavbarComp";
import { Carousel } from "flowbite-react";
import { AiOutlineTeam } from "react-icons/ai";
import { FaAward, FaHandshake } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter, FiFacebook } from "react-icons/fi";
import NavbarCompHomePage from "./NavBarCompHomePage";
function AboutComp(props) {
  const { className, AboutCompRef, height } = props;
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
      className=" w-screen min-h-screen lg:snap-start lg:snap-always relative"
      ref={AboutCompRef}
    >
      <div className="min-h-[110px] NavbarComp lg:block hidden sticky top-0 z-40">
        {animate && (
          <Slide top spy={animate} appear duration={700}>
            <NavbarCompHomePage theme="light" textColor="gray-900" />
            {/* <p>tect</p> */}
          </Slide>
        )}
      </div>
      <div className="lg:px-32 lg:h-[80vh] py-20 lg:py-0 sm:px-10 px-0 sm:grid sm:grid-cols-2 flex flex-col  sm:grid-rows-2 sm:gap-5 space-y-5 ">
        <div className="testimonials sm:col-start-2 h-[24rem] sm:h-auto w-11/12 sm:w-full mx-auto sm:row-start-2 sm:col-span-1 sm:row-span-1 shadow-xl relative bg-gray-900 ">
          <div className="bg-footerColor px-2 py-1 absolute -left-3 -top-3 text-main z-10">
            Testimonials
          </div>
          <Carousel
            // indicators={false}
            slideInterval={7000}
            className="w-full h-full [&>*]:rounded-none"
          >
            <section className="">
              <div className="max-w-screen-xl px-4 py-4 mx-auto text-center lg:py-16 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                  <svg
                    className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p className="text-md font-thin text-gray-200">
                      "Ordered my first IT brand building project like mobile
                      app & web development to RamRaj Associates. I was an
                      inexperienced contractor but they carefully listened to my
                      request and try to deliver the best quality of service.
                      All phone calls and emails are answered very
                      professionally. "
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                   
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div className="pr-3 font-medium text-gray-200 ">
                        Sailesh Shukla
                      </div>
                      <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                        Business Head
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
            <section className="">
              <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                  <svg
                    className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p className="text-md font-thin text-gray-200">
                      "I am running my social media campaigns through Ramraj
                      Associates, I am getting good outcomes for my social
                      campaigns"
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    {/* <Image className="w-6 h-6 rounded-full" src={"https://d1efbx4910ct8i.cloudfront.net/Images2/abt1.webp"} width={50} height={50} alt="profile picture"></Image> */}
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div className="pr-3 font-medium text-gray-200 ">
                        Kuldeep Singh
                      </div>
                      <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                        Jan Sewak
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
            <section className="">
              <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                  <svg
                    className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p className="text-md font-thin text-gray-200">
                      "We assigned them Rajasthan government project and their
                      team work hard 24X7 to deliver value for us and we are so
                      delighted with their handwork, now we are getting desired
                      outcomes"
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    {/* <Image className="w-6 h-6 rounded-full" src={"https://d1efbx4910ct8i.cloudfront.net/Images2/abt1.webp"} width={50} height={50} alt="profile picture"></Image> */}
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div className="pr-3 font-medium text-gray-200 ">
                        Himanshu Sharma
                      </div>
                      <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                        Project Head
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
            <section className="">
              <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                  <svg
                    className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p className="text-md font-thin text-gray-200">
                      "They are handling my online brand image nicely and
                      generating business for us by creating awareness about
                      yoga and its benefits."
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    {/* <Image className="w-6 h-6 rounded-full" src={"https://d1efbx4910ct8i.cloudfront.net/Images2/abt1.webp"} width={50} height={50} alt="profile picture"></Image> */}
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div className="pr-3 font-medium text-gray-200 ">
                        Dhakaram (Yogapeace)
                      </div>
                      <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                        Yogacharya
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </Carousel>
        </div>
        <div className="w-11/12 mx-auto sm:w-full bg-white border  border-gray-200 relative  shadow-xl dark:bg-gray-800 dark:border-gray-700 sm:col-start-1 sm:col-span-2 sm:row-span-1 sm:row-start-1 p-4 pt-8 sm:p-auto">
          <div className="bg-footerColor px-2 py-1 absolute -left-3 -top-3 text-main">
            By Numbers
          </div>
          <div className="mx-auto flex flex-row items-center flex-wrap space-y-3 sm:space-y-0 [&>*]:py-1 text-center w-full h-full">
            <div className="sm:w-1/4 w-full border border-gray-200 rounded-lg sm:rounded-none sm:border-none p-2  ">
              <div className=" h-full text-center">
                {/* <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/team.webp'} width={50} height={50} className='mx-auto'></Image> */}
                <AiOutlineTeam
                  className="mx-auto text-5xl text-footerColor"
                  size={40}
                  color="#0d4970"
                ></AiOutlineTeam>
                <h2 className="title-font font-medium sm;text-md  md:text-xl text-gray-900">
                  105+
                </h2>
                <p className="leading-relaxed sm:text-sm">Members</p>
              </div>
            </div>
            <div className="sm:w-1/4 w-full border border-gray-200 rounded-lg sm:rounded-none sm:border-none p-2  ">
              <div className=" h-full text-center">
                {/* <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/award.webp'} width={50} height={50} className='mx-auto'></Image> */}
                <FaAward
                  className="mx-auto text-5xl text-footerColor"
                  size={40}
                  color="#0d4970"
                ></FaAward>

                <h2 className="title-font font-medium sm;text-md  md:text-xl text-gray-900">
                  15+
                </h2>
                <p className="leading-relaxed sm:text-sm">Winning Awards</p>
              </div>
            </div>
            <div className="sm:w-1/4 w-full border border-gray-200 rounded-lg sm:rounded-none sm:border-none p-2  ">
              <div className=" h-full text-center">
                {/* <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/project.webp'} width={50} height={50} className='mx-auto'></Image> */}
                <FaHandshake
                  className="mx-auto text-5xl text-footerColor"
                  size={40}
                  color="#0d4970"
                ></FaHandshake>

                <h2 className="title-font font-medium sm;text-md  md:text-xl text-gray-900">
                  10k+
                </h2>
                <p className="leading-relaxed sm:text-sm">Completed Projects</p>
              </div>
            </div>
            <div className="sm:w-1/4 w-full border border-gray-200 rounded-lg sm:rounded-none sm:border-none p-2  ">
              <div className=" h-full text-center">
                {/* <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/reviews.webp'} width={50} height={50} className='mx-auto'></Image> */}
                <MdOutlineReviews
                  className="mx-auto text-5xl text-footerColor"
                  size={40}
                  color="#0d4970"
                ></MdOutlineReviews>

                <h2 className="title-font font-medium sm;text-md  md:text-xl text-gray-900">
                  850+
                </h2>
                <p className="leading-relaxed sm:text-sm">Client's Reviews</p>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:col-start-1 w-11/12 sm:w-full mx-auto sm:row-start-2 sm:col-span-1 sm:row-span-1 row-start-4 relative">
          <div className="bg-footerColor px-2 py-1 absolute -left-3 -top-4 text-main">
            Follow Us
          </div>
          <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-2">
            <Link
              href={
                "https://www.facebook.com/people/RamRaj-Associates/100090712463855/"
              }
              className="hover:!shadow-inner-lg group flex flex-col justify-center items-start row-span-1 cursor-pointer gap-5 col-span-1 col-start-1 row-start-2 border-l border-b p-5 bg-[#585caa]"
            >
              <FiFacebook className="text-white text-start  text-4xl group-hover:text-white transition-all duration-300  ease-in-out"></FiFacebook>
              <div className="w-full h-full relative overflow-hidden flex justify-center items-center ">
                <p className="text-main font-thin text-xs  dark:text-gray-400 pl-5 overflow-y-scroll scrollbar-hidden">
                  Stay connected with us on Facebook for the latest marketing
                  insights and innovative software solutions.
                </p>
                <Fade bottom delay={1200}>
                  <span className=" border-l border-main h-full  absolute left-2 top-0 "></span>
                </Fade>
              </div>
            </Link>
            <Link
              href={"https://www.instagram.com/ramraj_associates/"}
              className="hover:!shadow-inner-lg group flex flex-col justify-center items-start row-span-1 cursor-pointer  col-span-2 col-start-1 row-start-1 border-l border-b p-5 bg-gradient-to-r to-indigo-600 gap-2  from-orange-500"
            >
              <BsInstagram className="text-white text-4xl group-hover:text-white transition-all duration-300  ease-in-out"></BsInstagram>
              <div className="w-fit h-full relative overflow-hidden flex justify-center items-center">
                <p className="text-main font-thin text-xs  dark:text-gray-400 pl-5 overflow-y-scroll scrollbar-hidden">
                  Explore our world of marketing creativity and cutting-edge
                  software solutions. Follow us on Instagram for a visual
                  journey: @RamrajAssociates.
                </p>
                <Fade bottom delay={1200}>
                  <span className=" border-l border-main h-full  absolute left-2 top-0 "></span>
                </Fade>
              </div>
            </Link>
            <Link
              href={"https://twitter.com/ramrajassociate"}
              className="hover:!shadow-inner-lg group flex flex-col justify-center items-start row-span-1 cursor-pointer gap-2  col-span-1 col-start-2 row-start-2 border-l border-b p-5 bg-[#307fe2]"
            >
              <FiTwitter className="text-white text-4xl group-hover:text-white transition-all duration-300  ease-in-out"></FiTwitter>
              <div className="w-full h-full relative overflow-hidden flex justify-center items-center">
                <p className="text-main font-thin text-xs  dark:text-gray-400 pl-5 overflow-y-scroll scrollbar-hidden">
                  Join the conversation! Follow us on Twitter for real-time
                  updates on marketing trends and software innovations.
                </p>
                <Fade bottom delay={1200}>
                  <span className=" border-l border-main h-full  absolute left-2 top-0 "></span>
                </Fade>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComp;
