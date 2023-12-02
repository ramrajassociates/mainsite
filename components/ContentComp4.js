import React from "react";
import { Tabs } from "flowbite-react";
import Image from "next/image";
function ContentComp4() {
  return (
    <div className="py-20 px-4">
      <div className="space-y-5 pb-4">
        <h2 className="text-2xl font-semibold text-action-900 text-center">
          How Do We Work For You?
        </h2>
        <h2 className="text-2xl font-bold text-action-900 text-center">
          Why Should Small Businesses Choose Our Digital Marketing Service?
        </h2>
      </div>
      <div className="mx-auto w-10/12 flex flex-row justify-center my-5 lg:px-10 TabsCustom">
        <Tabs.Group aria-label="Tabs with icons" style="underline" className="">
          <Tabs.Item
            title="Specialized Experts"
            active={true}
            className="min-w-1/3 "
          >
            <div className="flex flex-col spacey-5 md:flex-row md:space-x-5">
              <div className="Image md:w-1/3 w-full object-cover ">
                <Image
                  src={
                    "https://d1efbx4910ct8i.cloudfront.net/Images2/search-engine-optimization.webp"
                  }
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover sm:object-top object-center  "
                ></Image>
              </div>
              <div className="Content md:w-2/3 w-full py-5 md:py-0">
                <h1 className="text-2xl font-semibold text-action-900">
                  Specialized Experts
                </h1>
                <p className="pt-5">
                  We have a team of professionals who have uncountable qualities
                  and have the expertise to work as per client requirements.
                  They know recent trends and all the digital marketing
                  strategies that can grow your business. Moreover, by
                  implementing our plans and innovative strategies, you can
                  boost your online presence. Thus, hire our experts and avail
                  world-class digital marketing services in Jaipur.
                </p>
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Affordability" className="min-w-1/3">
            <div className="flex flex-col spacey-5 md:flex-row md:space-x-5">
              <div className="Image md:w-1/3 w-full object-cover ">
                <Image
                  src={
                    "https://d1efbx4910ct8i.cloudfront.net/Images2/search-engine-optimization.webp"
                  }
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover sm:object-top object-center  "
                ></Image>
              </div>
              <div className="Content md:w-2/3 w-full py-5 md:py-0">
                <h1 className="text-2xl font-semibold text-action-900">
                  Affordability
                </h1>
                <p className="pt-5">
                  This is the biggest thing that most small businesses demand.
                  The reason is that they are mostly low on budget and can’t
                  invest to promote their business online. So, for those small
                  business owners, we are here for you. Ramraj is one of the
                  most affordable digital marketing service providers in Jaipur.
                  Thus, if you need budget-friendly services, then get in touch
                  with us.
                </p>
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item
            title="Customized and Result-Driven Solutions"
            className="min-w-1/3"
          >
            <div className="flex flex-col spacey-5 md:flex-row md:space-x-5">
              <div className="Image md:w-1/3 w-full object-cover ">
                <Image
                  src={
                    "https://d1efbx4910ct8i.cloudfront.net/Images2/search-engine-optimization.webp"
                  }
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover sm:object-top object-center  "
                ></Image>
              </div>
              <div className="Content md:w-2/3 w-full py-5 md:py-0">
                <h1 className="text-2xl font-semibold text-action-900">
                  Customized and Result-Driven Solutions
                </h1>
                <p className="pt-5">
                  Ramraj Associates always uses a result-driven approach so that
                  we can give you a high ROI. Our experts use recent technology
                  to bring your business online so that it reaches a large
                  number of audiences. Therefore, come and be a part of our
                  family to enter the digital world. We ensure you will get
                  solutions as per your preference and that the project will be
                  completed on time.
                </p>
              </div>
            </div>
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  );
}

export default ContentComp4;
