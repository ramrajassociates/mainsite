import Link from "next/link";
import React from "react";
import { FaNetworkWired } from "react-icons/fa";
import { HiDocumentPlus } from "react-icons/hi2";
function LetsConnectComp() {
  return (
    <>
      <h2 className="sm:text-3xl text-xl text-center font-semibold py-4 text-action-900 ">
        Lets Start your project with us
      </h2>
      <div className="flex sm:flex-row flex-col justify-around gap-10  lg:px-24 px-10 sm:py-24 py-4">
        <Link
          href={"/contact"}
          className="flex flex-col items-center lg:w-3/12 sm:w-5/12 w-full hover:opacity-75 justify-center bg-gray-900 [&>*]:text-main p-10 rounded-lg"
        >
          <div className="icon">
            <HiDocumentPlus size={50}></HiDocumentPlus>
          </div>
          <div>Start a new Project</div>
        </Link>
        <Link
          href={"/contact"}
          className="flex flex-col items-center lg:w-3/12 sm:w-5/12 w-full justify-center hover:opacity-75 bg-action-900 [&>*]:text-main p-10 rounded-lg"
        >
          <div className="icon">
            <FaNetworkWired size={50}></FaNetworkWired>
          </div>
          <div>Do you have existing project</div>
        </Link>
      </div>
    </>
  );
}

export default LetsConnectComp;
