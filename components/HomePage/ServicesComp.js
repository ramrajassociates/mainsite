import React from "react";
import CardComp from "../CardComp";
import Pulse from "react-reveal/Pulse";
import Link from "next/link";
import { Fade } from "react-reveal";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
function ServicesComp(props) {
  const { className, itemNumber } = props;
  const data = [
    [
      {
        title: "Search Engine Optimization",
        description:
          "Improve your website ranking and generate more leads with the help of our SEO experts, as they know all the technicalities that can raise your business.",
        url: "/digital-marketing-services/seo",
      },
      {
        title: "Social Media Marketing",
        description:
          "Hire the best <strong> digital marketer in Jaipur</strong> and grow your business on online platforms like Facebook, Instagram, Twitter, and more",
        url: "/digital-marketing-services/social-media-marketing",
      },
      {
        title: "Social Media Optimization",
        description:
          "With our unique marketing strategy, grow your business online. Take our <strong>social media optimization service</strong> and enhance your website visibility on online platforms.          ",
        url: "/digital-marketing-services/social-media-marketing",
      },
      {
        title: "PPC Marketing",
        description:
          "Hire the <strong>best digital marketing company in Jaipur</strong> and supercharge your online presence. We meticulously target, optimize, and drive high-quality traffic to grow your business.",
        url: "/digital-marketing-services/ppc-marketing",
      },
      {
        title: "Graphics Design",
        description:
          "Searching for visually compelling designs that can leave a lasting impression? Then, our <strong> digital marketing agency</strong> is here for you to craft impactful visuals that can elevate your business's aesthetics.",
        url: "/digital-marketing-services/graphic-design",
      },
    ],
    [
      {
        title: "Custom Web Development",
        description:
          "Transform your digital vision into reality with our <strong>premium web services</strong>. Get tailored websites that are seamlessly aligned with your business goals.",
        url: "/web-design-and-development/custom-web-development",
      },
      {
        title: "E-commerce Development",
        description:
          "Get quick assistance from our specialized team in creating tailored, user-friendly, and safe & secure e-commerce websites. Join hands with us to revolutionize your online store.",
        url: "/web-design-and-development/e-commerce-website-development",
      },
      {
        title: "Wordpress Development",
        description:
          "Seeking for sleek, responsive, and dynamic WordPress websites? We are here to empower your online journey with expert WordPress development services.",
        url: "/web-design-and-development/wordpress-development",
      },
    ],
    [
      {
        title: "CCTV Installation",
        description:
          "We provide seamless and professional installations of cutting-edge surveillance systems. Thus, safeguard your space with our CCTV installation services—vigilant protection tailored to your security needs.",
        url: "/surveillance-services",
      },
    ],
  ];
  return (
    <div>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
        {data[itemNumber].map((item, index) => {
          return (
            <Pulse key={index} spy={itemNumber + 1} appear={true}>
              <div className="bg-gray-700 px-3 py-7 shadow-lg relative rounded-lg">
                <div className="flex justify-center items-center mb-4 w-10 h-10 absolute -top-5  rounded-full bg-gray-700 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <Link href={item.url}>
                    <LiaExternalLinkAltSolid className="text-main" size={25} />
                  </Link>
                </div>
                <h3 className="mb-2  text-main bg-footerColor px-2 py-1 absolute -top-2 -right-2">
                  {item.title}
                </h3>
                <div className="w-full h-full relative overflow-hidden">
                  <p
                    className="text-main  pl-5 text-left"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                  <Fade bottom delay={1200}>
                    <span className="md:border-l-2 border-l border-action-900 h-full  absolute left-2 top-0 "></span>
                  </Fade>
                </div>
              </div>
            </Pulse>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesComp;
