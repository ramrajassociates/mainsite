import React from "react";
import { Tabs } from "flowbite-react";
import Image from "next/image";
function ContentComp4({ TabsContent, TabsTitle }) {
  return (
    <div className="py-20 px-4">
      <div className="space-y-5 pb-4">
        <h2 className="text-2xl font-semibold text-action-900 text-center">
          How Do We Work For You?
        </h2>
        <h2 className="text-2xl font-bold text-action-900 text-center">
          {TabsTitle}
        </h2>
      </div>
      <div className="mx-auto w-10/12 flex flex-row justify-center my-5 lg:px-10 TabsCustom">
        <Tabs.Group aria-label="Tabs with icons" style="underline" className="">
          {TabsContent.map((item, index) => {
            return (
              <Tabs.Item
                title={item?.title}
                active={index == 0 ? true : false}
                className="min-w-1/3 "
                key={item?.title}
              >
                <div className="flex flex-col spacey-5 md:flex-row md:space-x-5">
                  <div className="Image md:w-1/3 h-[14rem] w-full object-contain ">
                    <Image
                      src={item?.imageUrl}
                      alt={item?.title}
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover sm:object-top object-center  "
                    ></Image>
                  </div>
                  <div className="Content md:w-2/3 w-full py-5 md:py-0">
                    <h3 className="text-2xl font-semibold text-action-900">
                      {item?.title}
                    </h3>
                    <p className="pt-5">{item?.content}</p>
                  </div>
                </div>
              </Tabs.Item>
            );
          })}
        </Tabs.Group>
      </div>
    </div>
  );
}

export default ContentComp4;
