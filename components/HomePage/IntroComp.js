import React, { useState, useEffect } from "react";
import { Slide } from "react-reveal";
import NavbarCompHomePage from "./NavBarCompHomePage";
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

  return (
    <div
      className=" min-h-screen  w-screen snap-start relative"
      id="Services"
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
      <div className="Content mx-auto overflow-x-hidden lg:px-36 px-10 py-24 lg:py-0">
        <div className="flex flex-col-reverse lg:flex-row justify-between pt-10">
          <div className="w-full lg:w-1/2 p-4 flex flex-col space-y-3">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white ">
              Best Web Development Company
            </h2>
            <hr className="my-5" />
            <p className="text-gray-500 sm:text-md dark:text-gray-400">
              In the realm of web development, identifying the "best" company
              can be subjective, as it often depends on specific needs and
              preferences. However, some companies consistently stand out for
              their expertise, innovation, and client satisfaction. One such
              example is XYZ Web Solutions, renowned for its commitment to
              delivering high-quality websites tailored to clients' unique
              requirements. XYZ's team of skilled developers excels in various
              programming languages like HTML, CSS, JavaScript, and more,
              ensuring versatile and dynamic web solutions. They prioritize
              client collaboration, maintaining open communication throughout
              the development process to guarantee customer satisfaction.
            </p>

            <p className="text-gray-500 sm:text-md dark:text-gray-400">
              PQR's portfolio showcases a diverse range of successful projects,
              reflecting their ability to translate clients' visions into
              engaging online experiences. When seeking a web development
              company that harmonizes design and functionality, PQR Digital
              Studios remains a compelling option.
            </p>
          </div>
          <div className="w-full lg:w-1/2 object-cover ">
            <Image
              height={1080}
              width={1920}
              src={"/Images2/abt1.webp"}
              className="object-cover  w-full h-full rounded-lg shadow-lg"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroComp;
