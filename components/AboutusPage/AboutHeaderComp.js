import React from "react";
import Image from "next/image";
import { Fade } from "react-reveal";
function AboutHeaderComp() {
  return (
    <div>
      <div className="object-contain h-[100vh] relative !snap-center">
        <Image
          src={"https://d1efbx4910ct8i.cloudfront.net/Images2/abtbg.webp"}
          width={1920}
          height={1080}
          className="w-full h-full object-cover sm:object-top   "
        ></Image>
        <div className="bg-gray-600 backdrop-blur rounded-lg absolute h-fit gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-10 p-4 bg-opacity-20 sm:left-24  w-10/12 m-3 top-1/3   sm:max-w-[30vw] ">
          <p className="text-main bg-footerColor px-2 py-1 absolute -top-2 -left-2">
            About Us
          </p>
          <p className="text-main font-bold text-2xl pt-5">Ramraj Associates</p>
          <div className="relative h-fit pl-5">
            <p className="text-xs text-main">
              At Ramraj Associates, we're here to help you with Digital
              Marketing. We started with a big idea: to give unique and helpful
              Digital Marketing strategies to all kinds of businesses. Our
              purpose is to assist you in meeting your objectives and improving
              your business. We specialise in bringing your website to the top
              of search results (SEO), ads that you pay for each click (PPC),
              using social media for marketing, and developing outstanding
              online content to help your business stand out online. We're happy
              to have carved out a niche in the business by consistently
              providing high-quality services that are tailored to our clients'
              specific requirements.
            </p>
            <Fade bottom delay={1200}>
              <span className="md:border-l-2 border-l border-action-900 h-full absolute left-2 top-0"></span>
            </Fade>
          </div>
        </div>
      </div>
      <div className="content mx-auto sm:px-24">
        <div className="flex flex-col items-center  md:flex-row gap-5 sm:max-w-full">
          <Image
            width={1920}
            height={1080}
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"
            src="https://d1efbx4910ct8i.cloudfront.net/Images2/our-mission.webp"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              Our Mission
            </h5>
            <p className="mb-3  text-gray-700 dark:text-gray-400 font-thin text-xl p-5">
              At Ram Raj Associates, our mission is to provide tailored digital
              marketing strategies that align with your unique business goals.
              We believe in a client-centric approach, where your success
              defines ours. Our mission steers us towards delivering impactful
              results, ensuring each campaign we undertake maximizes your
              digital footprint and market reach. We prioritize trust,
              transparency, and communication, fostering strong client
              relationships. Our experienced team ensures exceptional service
              and results, while staying updated with industry trends. we're
              committed to being a trusted global partner, empowering businesses
              with technology to succeed. Your satisfaction drives our passion
              and commitment.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center  md:flex-row-reverse gap-5 sm:max-w-full  ">
          <Image
            width={1920}
            height={1080}
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"
            src="https://d1efbx4910ct8i.cloudfront.net/Images2/abt2.webp"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              Our Vision
            </h5>
            <p className="mb-3  text-gray-700 dark:text-gray-400 font-thin text-xl p-5">
              We see a future in which Ram Raj Associates is an established name
              in digital marketing. We aim to stay current with the evolving
              internet world by using new technology and ideas to give the
              finest services possible. Our mission is to assist our clients in
              growing and to be a pioneer in digital marketing innovation. We
              prioritize being up to date on the newest trends and training our
              personnel. We believe that maintaining positive ties with our
              clients is critical. We want to be a leader in our sector via
              loyalty, professionalism, and honesty, trying to provide excellent
              service, be inventive, and satisfy our consumers.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center  md:flex-row gap-5 sm:max-w-full  ">
          <Image
            width={1920}
            height={1080}
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"
            src="https://d1efbx4910ct8i.cloudfront.net/Images2/abt3.webp"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              Our Value
            </h5>
            <p className="mb-3  text-gray-700 dark:text-gray-400 font-thin  text-xl p-5 flex flex-col space-y-3 py-3">
              <strong>Innovation:</strong>
              At Ram Raj Associates, innovation is the cornerstone of our
              approach. We are committed to staying ahead of the competition by
              implementing cutting-edge technologies and new marketing methods.
              <strong> Integrity:</strong> Integrity forms the foundation of
              every relationship we build. We practice transparency and honesty
              in all our interactions, ensuring our clients have complete trust
              in our strategies and methods. <br />
              <strong>Collaboration:</strong> We believe that great things are
              achieved through collaboration. Our culture is built on teamwork,
              not just within our own agency, but also in partnership with our
              clients. We work closely with you to understand your unique
              challenges and goals, integrating your insights into our
              strategies. <br />
              <strong>Customer-Centric:</strong>At the heart of our values is a
              customer-centric approach. We understand that our success is
              intrinsically linked to yours. Therefore, we focus on creating
              substantial value for our clients in every project. We listen to
              your needs, adapt to your requirements, and are committed to
              achieving your business objectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHeaderComp;
