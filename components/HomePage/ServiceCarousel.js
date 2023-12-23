import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import "flowbite";
import Slide from "react-reveal/Slide";
import NavbarCompHomePage from "./NavBarCompHomePage";
import Image from "next/image";
function ServiceCarousel(props) {
  const { className, ServiceCarouselRef, height } = props;
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
      className="relative w-screen lg:min-h-screen h-fit"
      data-carousel="slide"
      ref={ServiceCarouselRef}
    >
      <div className="min-h-[110px] NavbarComp lg:block hidden absolute top-0 z-[50] w-full">
        {animate && (
          <Slide top spy={animate} appear duration={700}>
            <NavbarCompHomePage theme="dark" textColor="main" />
          </Slide>
        )}
      </div>
      <div className="relative overflow-hidden h-[30rem] sm:h-[40vh] lg:h-[100vh]  object-cover">
        <div
          className="hidden duration-700 ease-in-out relative"
          data-carousel-item
        >
          <Image
            src={
              "https://d1efbx4910ct8i.cloudfront.net/Images2/portfolio/1.webp"
            }
            width={1920}
            height={1080}
            alt="portfolio image..."
            className="absolute block  -translate-x-1/2  top-1/2 left-1/2 brightness-50 object-cover h-[27rem] sm:h-[40vh] lg:h-[100vh]"
          ></Image>
          <div className="absolute top-0 w-full h-full z-30 md:p-48 ">
            {/* <span className="font-semibold text-action-900 px-3 py-1 bg-gray-100 text-center w-fit ">
              Our Work
            </span>
            <p className="text-main font-thin pt-5 pl-5 sm:text-xl text-sm ">
              We help businesses to grow online with our years of <br />
              expertise in Digital Marketing
            </p> */}
          </div>
        </div>
        <div
          className="hidden duration-700 ease-in-out relative"
          data-carousel-item
        >
          <Image
            src={
              "https://d1efbx4910ct8i.cloudfront.net/Images2/portfolio/2.webp"
            }
            width={1920}
            height={1080}
            alt="Porfolio image"
            className="absolute block  -translate-x-1/2  top-1/2 left-1/2 brightness-50 object-cover h-[27rem] sm:h-[40vh] lg:h-[100vh]"
          ></Image>
          <div className="absolute top-0 w-full h-full z-30 md:p-48 ">
            {/* <span className="font-semibold text-action-900 px-3 py-1 bg-gray-100 text-center w-fit ">
              Computer & Peripherals
            </span>
            <p className="text-main font-thin pt-5 pl-5 sm:text-xl text-sm ">
              We identify the problems and provide the cost effective & <br />
              long run computer & peripherals solutions
            </p> */}
          </div>
        </div>
        <div
          className="hidden duration-700 ease-in-out relative"
          data-carousel-item
        >
          <Image
            src={
              "https://d1efbx4910ct8i.cloudfront.net/Images2/portfolio/3.webp"
            }
            width={1920}
            height={1080}
            alt="Porfolio image"
            className="absolute block  -translate-x-1/2  top-1/2 left-1/2 brightness-50 object-cover h-[27rem] sm:h-[40vh] lg:h-[100vh]"
          ></Image>
          <div className="absolute top-0 w-full h-full z-30 md:p-48 ">
            {/* <span className="font-semibold text-action-900 px-3 py-1 bg-gray-100 text-center w-fit ">
              Web Development
            </span>
            <p className="text-main font-thin pt-5 pl-5 sm:text-xl text-sm ">
              Fast and responsive web development services with <br />
              years of expertise in development services
            </p> */}
          </div>
        </div>
        <div
          className="hidden duration-700 ease-in-out relative"
          data-carousel-item
        >
          <Image
            src={
              "https://d1efbx4910ct8i.cloudfront.net/Images2/portfolio/4.webp"
            }
            width={1920}
            height={1080}
            alt="Porfolio image"
            className="absolute block  -translate-x-1/2  top-1/2 left-1/2 brightness-50  object-cover h-[27rem] sm:h-[40vh] lg:h-[100vh]"
          ></Image>
          <div className="absolute top-0 w-full h-full z-30 md:p-48 ">
            {/* <span className="font-semibold text-action-900 px-3 py-1 bg-gray-100 text-center w-fit ">
              Business Planning
            </span>
            <p className="text-main font-thin pt-5 pl-5 sm:text-xl text-sm ">
              We have deep rooted experience in
              <br />
              Telecommunication Consultancy
            </p> */}
          </div>
        </div>
      </div>
      <div className="absolute z-30 h-auto flex  space-x-3 flex-row overflow-x-scroll scrollbar-hidden  overflow-y-hidden bottom-0 justify-center pb-2 w-full bg-black sm:bg-gray-600 sm:bg-opacity-40 sm:pt-10 pt-5 px-10 ">
        <div
          className="sm:w-48 sm:h-24  min-h-20 group cursor-pointer object-contain relative hover:-translate-y-3 transition-all duration-500"
          aria-current="true"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        >
          <Image
            src={"uparrow.svg"}
            width={50}
            height={100}
            alt="up arrow"
            className="absolute w-full brightness-50 group-hover:-translate-y-3 hidden group-hover:block"
          ></Image>
          <Image
            src={
              "https://d1efbx4910ct8i.cloudfront.net/Images2/portfolio/1.webp"
            }
            width={1920}
            height={1080}
            className="h-full w-full group-hover:brightness-50"
            alt="Porfolio image"
          ></Image>
          {/* <p className="text-main text-sm absolute text-center z-40 top-0 p-10  hidden group-hover:block font-semibold">
            Our Work
          </p> */}
        </div>
        <div
          className="sm:w-48 sm:h-24 min-h-20 group cursor-pointer object-contain relative hover:-translate-y-3 transition-all duration-500"
          aria-current="true"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        >
          <Image
            src={"uparrow.svg"}
            width={50}
            height={100}
            alt="up arrow"
            className="absolute w-full brightness-50 group-hover:-translate-y-3 hidden group-hover:block"
          ></Image>
          <Image
            src={
              "https://d1efbx4910ct8i.cloudfront.net/Images2/portfolio/2.webp"
            }
            width={1920}
            height={1080}
            className="h-full w-full group-hover:brightness-50"
            alt="Porfolio image"
          ></Image>
          {/* <p className="text-main text-sm absolute text-center z-40 top-0 p-10  hidden group-hover:block font-semibold">
            Our Work
          </p> */}
        </div>
        <div
          className="sm:w-48 sm:h-24 min-h-20 group cursor-pointer object-contain relative hover:-translate-y-3 transition-all duration-500"
          aria-current="true"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        >
          <Image
            src={"uparrow.svg"}
            width={50}
            height={100}
            alt="up arrow"
            className="absolute w-full brightness-50 group-hover:-translate-y-3 hidden group-hover:block"
          ></Image>
          <Image
            src={
              "https://d1efbx4910ct8i.cloudfront.net/Images2/portfolio/3.webp"
            }
            width={1920}
            height={1080}
            className="h-full w-full group-hover:brightness-50"
            alt="Porfolio image"
          ></Image>
          {/* <p className="text-main text-sm absolute text-center z-40 top-0 p-10  hidden group-hover:block font-semibold">
            Our Work
          </p> */}
        </div>
        <div
          className="sm:w-48 sm:h-24 min-h-20 group cursor-pointer object-contain relative hover:-translate-y-3 transition-all duration-500"
          aria-current="true"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        >
          <Image
            src={"uparrow.svg"}
            width={50}
            height={100}
            alt="up arrow"
            className="absolute w-full brightness-50 group-hover:-translate-y-3 hidden group-hover:block"
          ></Image>
          <Image
            src={
              "https://d1efbx4910ct8i.cloudfront.net/Images2/portfolio/4.webp"
            }
            width={1920}
            height={1080}
            className="h-full w-full group-hover:brightness-50"
            alt="Porfolio image"
          ></Image>
          {/* <p className="text-main text-sm absolute text-center z-40 top-0 p-10  hidden group-hover:block font-semibold">
            Our Work
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default ServiceCarousel;
