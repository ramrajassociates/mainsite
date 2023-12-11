import React from "react";
import Link from "next/link";
function ContentComp1({ title, BigTitle, content, ctaTitle }) {
  return (
    <>
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:min-h-screen lg:py-1 py-10 lg:px-20 px-5 bg-gray-900 justify-center items-center">
        <div className="lg:w-1/2 w-full h-full flex-col justify-center items-center lg:px-10 px-2 space-y-5">
          <p className="bg-gray-500 w-fit px-4 rounded-lg text-main">{title}</p>
          <p className="lg:text-5xl text-4xl text-gray-200">{BigTitle}</p>
        </div>
        <div className="lg:w-1/2 w-full flex flex-col justify-center items-start space-y-5 px-4">
          <p className="text-gray-300">{content}</p>
          <Link
            href={"/contactus"}
            className="px-3 py-2 bg-action-900 text-black text-lg"
          >
            {ctaTitle ? ctaTitle : "Talk With Our Experts"}
          </Link>
        </div>
      </div>
    </>
  );
}

export default ContentComp1;
