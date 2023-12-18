import React, { useState, useEffect } from "react";
import { Slide } from "react-reveal";
import NavbarCompHomePage from "./NavBarCompHomePage";
import Link from "next/link";
import Image from "next/image";
function IntroComp({ IntroCompRef, height }) {
  const [itemNumber, setItemNumber] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(0);
  const [animate, setanimate] = useState(false);
  useEffect(() => {
    if (height <= 0 && height >= -50) {
      setanimate(true);
    } else {
      setanimate(false);
    }
  }, [height]);
  function handleSmoothScroll(e) {
    if (window.location.pathname == "/") {
      e.preventDefault(); // Prevent the default behavior of jumping to the anchor.

      const targetId = e.currentTarget.getAttribute("href").split("#")[1]; // Get the target id without the '#'.

      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth", // This triggers smooth scrolling.
          block: "start", // This aligns the top of the target element with the top of the viewport.
        });
      }
    } else {
      return;
    }
  }
  return (
    <div
      className=" min-h-screen  w-screen snap-start relative"
      ref={IntroCompRef}
    >
      <div className="min-h-[110px] NavbarComp lg:block hidden sticky top-0 z-40">
        {animate && (
          <Slide top spy={animate} appear duration={700}>
            <NavbarCompHomePage theme="light" textColor="gray-900" />
            {/* <p>tect</p> */}
          </Slide>
        )}
      </div>
      <div className="Content mx-auto overflow-x-hidden lg:px-36 px-5 py-24 lg:py-0">
        <div className="flex flex-col-reverse lg:flex-row justify-between pt-10">
          <div className="w-full lg:w-1/2 lg:p-10 flex flex-col space-y-3">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white ">
              About <span className="text-action-900"> Ramraj Associates </span>
              - Best digital marketing solution Company In Jaipur
            </h2>
            <hr className="my-5" />
            <p className="text-gray-500 sm:text-md dark:text-gray-400 py-10">
              We are one of the finest and renowned Digital Marketing and Web
              Development Company in India. We are known for the marketing
              strategies and business techniques used by our professionals.
              Another thing that keeps us apart is the pricing we are offering
              across all industries. This is the biggest reason we are able to
              beat our competitors and become the finest digital marketing
              agency in Jaipur. So, fulfill all your digital marketing needs by
              hiring our industry experts, and we will stand by your side until
              you achieve your business goals.
            </p>
            <Link
              href="/aboutus"
              // onClick={handleSmoothScroll}
              className={`my-1 cursor-pointer inline-block rounded bg-info py-4 px-6 text-base font-medium text-white transition hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9 border border-action-900 bg-action-900 w-fit`}
            >
              Explore More
            </Link>
          </div>
          <div className="w-full lg:w-1/2 object-cover ">
            <Image
              height={1080}
              width={1920}
              src={"https://d1efbx4910ct8i.cloudfront.net/Images2/team.webp"}
              className="object-cover  w-full h-full rounded-lg shadow-lg"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroComp;
