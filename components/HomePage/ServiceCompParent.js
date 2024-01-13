import React, { useState, useEffect } from "react";
import ServicesComp from "./ServicesComp";
import Link from "next/link";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { Slide } from "react-reveal";
import NavbarCompHomePage from "./NavBarCompHomePage";
function ServiceCompParent({ ServiceCompRef, height }) {
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
      className=" lg:min-h-screen  w-screen snap-start relative bg-gray-900"
      id="Services"
      ref={ServiceCompRef}
    >
      <div className="min-h-[110px] NavbarComp lg:block hidden sticky top-0 z-40">
        {animate && (
          <Slide top spy={animate} appear duration={700}>
            <NavbarCompHomePage />
            {/* <p>tect</p> */}
          </Slide>
        )}
      </div>
      <div className="Content mx-auto overflow-x-hidden lg:px-36 px-10 py-24 lg:py-0">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-bold  text-white">
            What We Offer:
          </h2>
          <p className="text-gray-200 sm:text-md">
            Ramraj is one of the best digital marketing company in Jaipur that
            focuses on providing results-driven growth with our powerful
            services. We have a team of multi-talented experts who will work for
            you to grow your business. Explore more and see below what services
            we are offering:
          </p>
        </div>
        <div className="flex flex-row gap-4 ">
          <div className="flex flex-col lg:w-1/3 w-full gap-2">
            <div
              className={`menuItems select-none rounded-xl  cursor-pointer flex justify-between ${
                itemNumber === 0
                  ? "bg-footerColor text-main"
                  : " text-active bg-white"
              } p-5 hover:bg-footerColor hover:text-main`}
              onClick={() => {
                setItemNumber(0);
              }}
            >
              <div className="flex gap-2">
                <h2> Digital Marketing Services </h2>
                <Link href={"/digital-marketing-services"}>
                  <LiaExternalLinkAltSolid className="text-main" size={25} />
                </Link>
              </div>
              <span
                onClick={() =>
                  setShowMobileMenu((prevState) => (prevState === 0 ? 1 : 0))
                }
                className="cursor-pointer lg:hidden block select-none"
              >
                {showMobileMenu === 1 ? "-" : "+"}
              </span>
            </div>
            <div
              className={`itemMenu1 sele lg:hidden overflow-hidden transition-all duration-700 ease-in-out ${
                showMobileMenu === 1 ? "max-h-full py-10 px-2" : "max-h-0"
              }`}
            >
              {showMobileMenu != 0 && (
                <ServicesComp itemNumber={showMobileMenu - 1} />
              )}
            </div>
            <div
              className={`menuItems select-none rounded-xl  cursor-pointer flex justify-between ${
                itemNumber === 1
                  ? "bg-footerColor text-main"
                  : " text-active bg-white"
              } p-5 hover:bg-footerColor hover:text-main`}
              onClick={() => {
                setItemNumber(1);
              }}
            >
              <div className="flex gap-2">
                <h2> Web development</h2>
                <Link href={"/web-design-and-development"}>
                  <LiaExternalLinkAltSolid className="text-main" size={25} />
                </Link>
              </div>
              <span
                onClick={() =>
                  setShowMobileMenu((prevState) => (prevState === 0 ? 2 : 0))
                }
                className="cursor-pointer lg:hidden block select-none"
              >
                {showMobileMenu === 2 ? "-" : "+"}
              </span>
            </div>
            <div
              className={`itemMenu1 sele lg:hidden overflow-hidden transition-all duration-700 ease-in-out ${
                showMobileMenu === 2 ? "max-h-full py-10 px-2" : "max-h-0"
              }`}
            >
              {showMobileMenu != 0 && (
                <ServicesComp itemNumber={showMobileMenu - 1} />
              )}
            </div>
            <div
              className={`menuItems select-none rounded-xl  cursor-pointer flex justify-between  ${
                itemNumber === 2
                  ? "bg-footerColor text-main"
                  : " text-active bg-white"
              } p-5 hover:bg-footerColor hover:text-main`}
              onClick={() => {
                setItemNumber(2);
              }}
            >
              <div className="flex gap-2">
                <h2> Surveillance services</h2>
                <Link href={"/surveillance-services"}>
                  <LiaExternalLinkAltSolid className="text-main" size={25} />
                </Link>
              </div>
              <span
                onClick={() =>
                  setShowMobileMenu((prevState) => (prevState === 0 ? 3 : 0))
                }
                className="cursor-pointer lg:hidden block select-none"
              >
                {showMobileMenu === 3 ? "-" : "+"}
              </span>
            </div>
            <div
              className={`itemMenu1 sele lg:hidden overflow-hidden transition-all duration-700 ease-in-out ${
                showMobileMenu === 3 ? "max-h-full py-10 px-2" : "max-h-0"
              }`}
            >
              {showMobileMenu != 0 && (
                <ServicesComp itemNumber={showMobileMenu - 1} />
              )}
            </div>
          </div>
          <div className="w-2/3 text-center lg:block hidden overflow-hidden p-6">
            <ServicesComp itemNumber={itemNumber} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCompParent;
