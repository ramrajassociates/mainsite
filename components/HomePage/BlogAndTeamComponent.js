import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Slide } from "react-reveal";
import NavbarCompHomePage from "./NavBarCompHomePage";
function BlogAndTeamComponent({ BlogAndTeamComponentRef, height }) {
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
      className="relative bg-gray-900 text-white  w-screen min-h-screen snap-start snap-always "
      ref={BlogAndTeamComponentRef}
    >
      <div className="min-h-[90px] NavbarComp lg:block hidden w-full">
        {animate && (
          <Slide top spy={animate} appear duration={700}>
            <NavbarCompHomePage theme="dark" textColor="main" />
          </Slide>
        )}
      </div>
      <div className="flex flex-col lg:flex-row lg:px-24  ">
        {/* Blog Section */}
        <div className="w-full lg:w-1/2 p-4 lg:p-0">
          <div className="bg-white bg-opacity-20 p-6 ">
            <Image
              src={"https://d1efbx4910ct8i.cloudfront.net/Images2/c-w.webp"}
              width={500}
              height={400}
              alt="Blog Image"
              className="w-full h-auto rounded-md"
            />
            <h3 className="text-2xl font-bold mt-4">Our Blogs</h3>
            <p className="text-gray-200">Read our latest articles.</p>
            <button className="mt-4   bg-gray-900 text-white py-2 px-4 hover:opacity-80 transition-all duration-300">
              Blog
            </button>
          </div>
        </div>

        {/* Team Section */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 p-4 lg:p-0">
          <div className="bg-white bg-opacity-20 p-6 ">
            <Image
              src={"https://d1efbx4910ct8i.cloudfront.net/Images2/abt1.webp"}
              width={500}
              height={400}
              alt="Team Image"
              className="w-full h-auto rounded-md"
            />
            <h3 className="text-2xl font-bold mt-4">Our Team</h3>
            <p className="text-gray-200">Meet our amazing team members.</p>
            <button
              className="mt-4 bg-gray-900 text-white py-2 px-4 hover:opacity-80 transition-all duration-300 "
              onClick={() => {
                window.location = "/about#teamSection";
              }}
            >
              Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogAndTeamComponent;
