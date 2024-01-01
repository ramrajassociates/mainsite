import React from "react";
import Head from "next/head";
function SeoComp({ seoInformation, children }) {
  return (
    <Head>
      <title>
        {seoInformation?.Title ? seoInformation.Title : "RamRajAssociates"}
      </title>
      <meta
        name="description"
        content={
          seoInformation?.meta_description
            ? seoInformation.meta_description
            : "Transform your business with cutting-edge IT solutions.Providing services like Seo, Custom web development, digital Marketing and surveillance related services ."
        }
      />
      <meta
        name="keywords"
        content={
          seoInformation?.keywords
            ? seoInformation.keywords
            : "digital marketing services, digital marketing agency in india, digital marketing company in india, digital marketing services in india, digital marketing agency in delhi, digital marketing company in delhi, digital marketing services in delhi, digital marketing agency in noida, digital marketing company in noida, digital marketing services in noida, digital marketing agency in gurgaon, digital marketing company in gurgaon, digital marketing services in gurgaon, digital marketing agency in faridabad, digital marketing company in faridabad, digital marketing services in faridabad, digital marketing agency in ghaziabad, digital marketing company in ghaziabad, digital marketing services in jaipur"
        }
      />
      <link
        rel="icon"
        href="https://d1efbx4910ct8i.cloudfront.net/Images2/favicon.png"
      />
      <meta
        property="og:image"
        content="https://d1efbx4910ct8i.cloudfront.net/Images2/logo.webp"
      />
      {children}
    </Head>
  );
}

export default SeoComp;
