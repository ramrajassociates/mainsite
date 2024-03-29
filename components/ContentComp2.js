import React from "react";
import Image from "next/image";
function ContentComp2({ content }) {
  return (
    <>
      <div className="bg-main p-10 py-12 space-y-4">
        <h2
          className="text-3xl text-center  "
          dangerouslySetInnerHTML={{ __html: content.headingText }}
        ></h2>
        <p
          className=""
          dangerouslySetInnerHTML={{ __html: content.explanation }}
        ></p>
      </div>
      <div className="flex lg:flex-row flex-col bg-gray-900 lg:space-x-5 space-y-5 relative py-14 p-10 items-center">
        <div className="lg:w-2/3 w-full [&>*]:text-main flex flex-col justify-start space-y-4">
          <h2
            className="text-4xl font-semibold"
            dangerouslySetInnerHTML={{ __html: content.subHeadingText }}
          ></h2>
          <p dangerouslySetInnerHTML={{ __html: content.description }}></p>
          <p dangerouslySetInnerHTML={{ __html: content.extras }}></p>
        </div>
        <div className="lg:w-2/3 w-full relative flex justify-center ">
          <div className="sm:w-96 sm:h-96 w-48 h-48 bg-transparent border border-white rounded-full z-10 absolute sm:top-10 sm:right-32 right-5"></div>
          <div className="sm:w-96 sm:h-96 w-48 h-48 bg-gray-700 rounded-full"></div>
          <div className="sm:w-96 sm:h-96 w-48 h-48 z-[10] absolute top-10 left-20 rounded-full">
            <Image
              src={content?.imageUrl}
              alt={content?.serviceName}
              width={500}
              height={500}
              className="w-full h-full object-cover sm:object-top object-center rounded-full "
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentComp2;
