import Image from "next/image";
import React from "react";

function BlogAndTeamComponent() {
  return (
    <div className="relative bg-gradient-to-r from-action-700 to-action-900 text-white py-16 w-screen min-h-screen snap-start snap-always ">
        <div className="flex flex-col lg:flex-row">
          {/* Blog Section */}
          <div className="w-full lg:w-1/2 p-4">
            <div className="bg-white bg-opacity-20 p-6 ">
              <Image
                              src={"https://d1efbx4910ct8i.cloudfront.net/Images2/c-w.webp"}
                              width={500}
                              height={400}
                alt="Blog Image"
                className="w-full h-auto rounded-md"
              />
              <h3 className="text-2xl font-bold mt-4">Our Blogs</h3>
              <p className="text-gray-200">Short description of the blog.</p>
              <button className="mt-4   bg-gray-900 text-white py-2 px-4 hover:opacity-80 transition-all duration-300">
                Blog
              </button>
            </div>
          </div>

          {/* Team Section */}
          <div className="w-full lg:w-1/2 p-4 mt-8 lg:mt-0">
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
              <button className="mt-4 bg-gray-900 text-white py-2 px-4 hover:opacity-80 transition-all duration-300 ">
                Team
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default BlogAndTeamComponent;
