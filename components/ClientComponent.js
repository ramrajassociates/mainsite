import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import { isMobile, isTablet, isBrowser } from "react-device-detect";
import "react-multi-carousel/lib/styles.css";
const ClientComponent = () => {
  let deviceType;
  if (isMobile) {
    deviceType = "mobile";
  } else if (isTablet) {
    deviceType = "tablet";
  } else if (isBrowser) {
    deviceType = "desktop";
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };
  return (
    <div className=" flex items-center justify-center pt-10 overflow-x-hidden">
      {/* Clients */}
      <div className="w-full py-10  lg:py-14 ">
        {/* Title */}
        <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
          <h2 className="text-xl font-semibold md:text-2xl md:leading-tight ">
            Trusted by enterprise like -
          </h2>
        </div>
        {/* lg screens */}
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px flex flex-row justify-center py-5"
        >
          <Image
            src={"https://d1efbx4910ct8i.cloudfront.net/Customer/1.webp"}
            width={100}
            height={100}
            className="w-30 h-30"
          ></Image>
          <Image
            src={"https://d1efbx4910ct8i.cloudfront.net/Customer/2.webp"}
            width={100}
            height={100}
            className="w-30 h-30"
          ></Image>
          <Image
            src={"https://d1efbx4910ct8i.cloudfront.net/Customer/3.webp"}
            width={100}
            height={100}
            className="w-30 h-30"
          ></Image>
          <Image
            src={"https://d1efbx4910ct8i.cloudfront.net/Customer/4.webp"}
            width={100}
            height={100}
            className="w-30 h-30"
          ></Image>
          <Image
            src={"https://d1efbx4910ct8i.cloudfront.net/Customer/5.webp"}
            width={100}
            height={100}
            className="w-30 h-30"
          ></Image>

          <Image
            src={"https://d1efbx4910ct8i.cloudfront.net/Customer/6.webp"}
            width={100}
            height={100}
            className="w-30 h-30"
          ></Image>
          <Image
            src={"https://d1efbx4910ct8i.cloudfront.net/Customer/7.webp"}
            width={100}
            height={100}
            className="w-30 h-30"
          ></Image>
          <Image
            src={"https://d1efbx4910ct8i.cloudfront.net/Customer/8.webp"}
            width={100}
            height={100}
            className="w-30 h-30"
          ></Image>
          <Image
            src={"https://d1efbx4910ct8i.cloudfront.net/Customer/9.webp"}
            width={100}
            height={100}
            className="w-30 h-30"
          ></Image>
          <Image
            src={"https://d1efbx4910ct8i.cloudfront.net/Customer/10.webp"}
            width={100}
            height={100}
            className="w-30 h-30"
          ></Image>
        </Carousel>
        {/* lg screens */}
      </div>
      {/* End Clients */}
    </div>
  );
};

export default ClientComponent;
